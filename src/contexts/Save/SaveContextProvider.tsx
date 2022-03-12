import React, { useState, useEffect, useCallback } from 'react'

import SaveContext from './SaveContext'
import { aavePoolContractAddress } from "constants/contractAddresses"

import useWallet from 'hooks/useWallet';
import { getContract } from 'utils/contractHelpers';
import { AbiItem } from "web3-utils";
import PoolV3Artifact from "@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json"
import Web3 from "web3";
import { provider } from 'web3-core'
import { getBalance } from 'utils'
import SaveTokenList from 'constants/SaveTokens';
import { SaveTokenMarket } from './types';

const SaveContextProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<SaveTokenMarket[]>([])
    const [balance, setBalance] = useState<string>("0")
    const [debt, setDebt] = useState<string>("0")
    const [isShowingSaveModal, setIsShowingSaveModal] = useState<boolean>(false)
    const { ethereum, account, status } = useWallet()

    const Pool = getContract(
        ethereum,
        aavePoolContractAddress,
        PoolV3Artifact.abi as unknown as AbiItem
    )

    const getData = useCallback(async () => {
        try {
            const data = await Pool.methods.getUserAccountData(account).call()
            setBalance(data[0])
            setDebt(data[1])
        } catch (e) {
            return "Error"
        }
    }, [account, Pool.methods])


    useEffect(() => {
        if (status !== 'connected') {
            setBalance("0")
            setDebt("0")
        }
    }, [status])

    useEffect(() => {
        if (account && ethereum) {
            getData()

            let refreshInterval = setInterval(() => getData(), 10000)

            return () => clearInterval(refreshInterval)
        }
    }, [account, ethereum, getData])

    const supply = useCallback(
        async (amount: string, address: string) => {
            await Pool.methods.supply(address, Web3.utils.toWei(amount, "ether"), account, 0)
                .send({
                    from: account,
                    gas: 800000,
                })
        },
        [account, Pool.methods]
    )

    const withdraw = useCallback(
        async (amount: string, address: string) => {
            await Pool.methods.withdraw(address, Web3.utils.toWei(amount, "ether"), account)
                .send({
                    from: account,
                    gas: 80000,

                })
        },
        [account, Pool.methods]
    )

    const getATokenBalance = useCallback(
        async (userAddress: string, address: string, provider: provider) => {
            const data = await Pool.methods.getReserveData(address).call()
            const aTokenAddress = data[8]
            if (userAddress) return await getBalance(provider, aTokenAddress, userAddress)
        },
        [Pool.methods]
    )

    const onOpenSaveModal = useCallback(
        () => {
            setIsShowingSaveModal(true)
        },
        [setIsShowingSaveModal],
    )

    const onCloseSaveModal = useCallback(
        () => {
            setIsShowingSaveModal(false)
        },
        [setIsShowingSaveModal],
    )

    const fetchBalances = useCallback((userAddress: string, provider: provider) => {
        const SaveTokenBalance = SaveTokenList.map(async (e) => {
            const data = await Pool.methods.getReserveData(e.address).call()
            const aTokenAddress = data[8]
            const aTokenBalance = await getBalance(provider, aTokenAddress, userAddress)

            return convertToSaveTokenData(e, JSON.stringify(aTokenBalance))
        })
        Promise.all(SaveTokenBalance)
            .then(setToken)
    }, [setToken, Pool.methods])

    useEffect(() => {
        if (status !== 'connected') {
            setToken([])
        }
    }, [status])

    useEffect(() => {
        if (account && ethereum) {
            fetchBalances(account, ethereum)
            let refreshInterval = setInterval(() => fetchBalances(account, ethereum), 10000)

            return () => clearInterval(refreshInterval)
        }
    }, [account, ethereum, fetchBalances])

    return (
        <SaveContext.Provider value={{
            balance,
            debt,
            supply,
            withdraw,
            isShowingSaveModal,
            onOpenSaveModal,
            onCloseSaveModal,
            token: token
        }}>
            {children}
        </SaveContext.Provider>
    )
}

function convertToSaveTokenData(
    token: SaveTokenMarket,
    tokenBalance: string,
) {
    if (!tokenBalance) {
        return token
    } else {
        return {
            id: token.id,
            assetName: token.assetName,
            symbol: token.symbol,
            marketSize: token.marketSize,
            APY: token.APY,
            address: token.address,
            image: token.image,
            balance: tokenBalance
        }
    }

}




export default SaveContextProvider