import React, { useState, useEffect, useCallback } from 'react'

import SaveContext from './SaveContext'
import { aavePoolContractAddress } from "constants/contractAddresses"


import useWallet from 'hooks/useWallet';
import { getContract } from 'utils/contractHelpers';
import { AbiItem } from "web3-utils";
import PoolV3Artifact from "@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json"


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


    return (
        <SaveContext.Provider value={{
            balance,
            debt,
        }}>
            {children}
        </SaveContext.Provider>
    )
}

export default SaveContextProvider