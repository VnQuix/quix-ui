import React, { useState } from 'react'

import ChainDataContext from './ChainDataContext'
import useWallet from 'hooks/useWallet'
import { MAINNET_CHAIN_DATA, ChainData, POLYGON_CHAIN_DATA, KOVAN_CHAIN_DATA, RINKEBY_CHAIN_DATA, MUMBAI_CHAIN_DATA } from 'utils/connectors'

const ChainDataContextProvider: React.FC = ({ children }) => {
    const [chain, setChain] = useState<ChainData>(MAINNET_CHAIN_DATA)
    const { account, ethereum, isMetamaskConnected } = useWallet()

    const setMainnet = () => {
        setChain(MAINNET_CHAIN_DATA)
        if (isMetamaskConnected)
            ethereum?.send('wallet_switchEthereumChain', [
                { chainId: "0x1" },
                account,
            ])
    }

    const setPolygon = () => {
        setChain(POLYGON_CHAIN_DATA)
        if (isMetamaskConnected)
            ethereum?.send('wallet_addEthereumChain', [
                {
                    chainId: "0x89",
                    chainName: "Polygon",
                    nativeCurrency: {
                        name: 'Matic',
                        symbol: 'MATIC',
                        decimals: 18,
                    },
                    rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
                    blockExplorerUrls: ['https://polygonscan.com/']
                },
                account,
            ])
    }

    const setRinkeby = () => {
        setChain(RINKEBY_CHAIN_DATA)
        if (isMetamaskConnected)
            ethereum?.send('wallet_addEthereumChain', [
                {
                    chainId: "0x4",
                },
                account,
            ])
    }

    const setKovan = () => {
        setChain(KOVAN_CHAIN_DATA)
        if (isMetamaskConnected)
            ethereum?.send('wallet_addEthereumChain', [
                {
                    chainId: "0x2A",
                },
                account,
            ])
    }

    const setMumbai = () => {
        setChain(MUMBAI_CHAIN_DATA)
        if (isMetamaskConnected)
            ethereum?.send('wallet_addEthereumChain', [
                {
                    chainId: "0x13881",
                    chainName: "Mumbai",
                    nativeCurrency: {
                        name: 'Matic',
                        symbol: 'MATIC',
                        decimals: 18,
                    },
                    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
                },
                account,
            ])
    }

    return (
        <ChainDataContext.Provider
            value={{
                chain,
                setMainnet,
                setPolygon,
                setRinkeby,
                setKovan,
                setMumbai
            }}
        >
            {children}
        </ChainDataContext.Provider>
    )
}

export default ChainDataContextProvider