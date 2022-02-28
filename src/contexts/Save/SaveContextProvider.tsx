import React from 'react'

import SaveContext from './SaveContext'
import { aaveTokenAdapterContract } from "constants/contractAddresses"
import AaveTokenAdapterAbi from "abi/AaveTokenAdapter.json"
import useWallet from 'hooks/useWallet';
import { getContract } from 'utils/contractHelpers';
import { AbiItem } from "web3-utils";
import ethers from "ethers"
import Web3 from "web3";

const SaveContextProvider: React.FC = ({ children }) => {
    const { ethereum } = useWallet()
    const AaveTokenAdapter = getContract(
        ethereum,
        aaveTokenAdapterContract,
        AaveTokenAdapterAbi.abi as unknown as AbiItem
    )
    const getBalance = async () => {

        const web3 = new Web3(ethereum)
        const contract = new web3.eth.Contract(
            AaveTokenAdapterAbi.abi as unknown as AbiItem,
            aaveTokenAdapterContract
        )
        try {
            const balance = await contract.methods.getName("0x13512979ADE267AB5100878E2e0f485B568328a4").call()
            return balance
        } catch (e) {
            return "none"
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