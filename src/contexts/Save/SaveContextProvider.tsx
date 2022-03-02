import React from 'react'

import SaveContext from './SaveContext'
import { aaveAdapterContractAddress } from "constants/contractAddresses"
import AaveAdapterAbi from "abi/AaveAdapter.json"
import useWallet from 'hooks/useWallet';
import { getContract } from 'utils/contractHelpers';
import { AbiItem } from "web3-utils";

const SaveContextProvider: React.FC = ({ children }) => {
    const { ethereum, account } = useWallet()

    const AaveTokenAdapter = getContract(
        ethereum,
        aaveAdapterContractAddress,
        AaveAdapterAbi.abi as unknown as AbiItem
    )
    const getBalance = async () => {
        try {
            const balance = await AaveTokenAdapter.methods.getCollateralInEth(account).call()
            return balance
        } catch (e) {
            return "Error"
        }
    }

    return (
        <SaveContext.Provider value={{
            getBalance
        }}>
            {children}
        </SaveContext.Provider>
    )
}

export default SaveContextProvider