import React, { useState, useEffect, useCallback } from 'react'

import SaveContext from './SaveContext'
import { aavePoolContractAddress } from "constants/contractAddresses"
import { RIK_DAI } from 'constants/Erc20Token';

import useWallet from 'hooks/useWallet';
import { getContract } from 'utils/contractHelpers';
import { AbiItem } from "web3-utils";
import PoolV3Artifact from "@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json"
import BigNumber from 'bignumber.js';
import Web3 from "web3";


const SaveContextProvider: React.FC = ({ children }) => {
    const [balance, setBalance] = useState<string>("0")
    const [debt, setDebt] = useState<string>("0")
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
        async () => {
            console.log(RIK_DAI.address, Web3.utils.toWei("50", "ether"), account, "0")
            await Pool.methods.supply(RIK_DAI.address, Web3.utils.toWei("50", "ether"), account, "0")
                .send({
                    from: account,
                    gas: 2100000,
                    gasPrice: 8000000000
                })

        },
        [account, Pool.methods]
    )

    const withdraw = useCallback(
        async () => {
            await Pool.methods.withdraw(RIK_DAI.address, Web3.utils.toWei("50", "ether"), account)
                .send({
                    from: account,
                    gas: 2100000,
                    gasPrice: 8000000000
                })

        },
        [account, Pool.methods]
    )



    return (
        <SaveContext.Provider value={{
            balance,
            debt,
            supply,
            withdraw
        }}>
            {children}
        </SaveContext.Provider>
    )
}

export default SaveContextProvider