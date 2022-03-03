import React, { useState, useEffect, useCallback } from 'react'

import SaveContext from './SaveContext'
import { aaveAdapterContractAddress, aaveInteractiveAdapterContractAddress } from "constants/contractAddresses"
import AaveAdapterAbi from "abi/AaveAdapter.json"
import AaveInteractiveAdapterAbi from "abi/AaveInteractiveAdapter.json"
import useWallet from 'hooks/useWallet';
import { getContract } from 'utils/contractHelpers';
import { AbiItem } from "web3-utils";

const SaveContextProvider: React.FC = ({ children }) => {
    const [balance, setBalance] = useState<string>("0")
    const [debt, setDebt] = useState<string>("0")
    const { ethereum, account, status } = useWallet()

    const AaveAdapter = getContract(
        ethereum,
        aaveAdapterContractAddress,
        AaveAdapterAbi.abi as unknown as AbiItem
    )

    const AaveInteractiveAdapter = getContract(
        ethereum,
        aaveInteractiveAdapterContractAddress,
        AaveInteractiveAdapterAbi.abi as unknown as AbiItem
    )

    const deposit = async (token: string, amount: number) => {
        try {
            await AaveInteractiveAdapter.methods.deposit(token, amount).call()
        } catch (error) {
            console.log(error)
        }
    }

    const withdraw = async (token: string, amount: number) => {
        try {
            await AaveInteractiveAdapter.methods.withdraw(token, amount).call()
        } catch (error) {
            console.log(error)
        }
    }

    const getBalance = useCallback(async () => {
        try {
            const balance = await AaveAdapter.methods.getCollateralInEth(account).call()
            setBalance(balance)
        } catch (e) {
            return "Error"
        }
    }, [account, AaveAdapter.methods])



    const getDebt = useCallback(async () => {
        try {
            const debt = await AaveAdapter.methods.getDebtInEth(account).call()
            setDebt(debt)
        } catch (e) {
            return "Error"
        }
    }, [account, AaveAdapter.methods])

    useEffect(() => {
        if (status !== 'connected') {
            setBalance("0")
            setDebt("0")
        }
    }, [status])

    useEffect(() => {
        if (account && ethereum) {
            getBalance()
            getDebt()
            let refreshInterval = setInterval(() => getBalance(), 10000)

            return () => clearInterval(refreshInterval)
        }
    }, [account, ethereum, getBalance, getDebt])


    return (
        <SaveContext.Provider value={{
            balance,
            debt,
            deposit,
            withdraw

        }}>
            {children}
        </SaveContext.Provider>
    )
}

export default SaveContextProvider