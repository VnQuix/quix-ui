import React, { useEffect, useState } from 'react'

import TokenDataContext from './TokenDataContext'
import { TokenData } from './TokenData'
import useWallet from 'hooks/useWallet'
import { MAINNET_CHAIN_DATA } from 'utils/connectors'
import InfoBarTokenList from 'constants/InfoBarTokens'
//tokenList
//get all the prices
//convert to props

const TokenDataContextProvider: React.FC = ({ children }) => {

    const [infoBarTokens, setInfoBarTokens] = useState<TokenData[]>([])
    const { ethereum: provider, chainId } = useWallet()

    useEffect(() => {
        if (
            chainId &&
            chainId === MAINNET_CHAIN_DATA.chainId &&
            provider
        ) {
            const InfoTokens = InfoBarTokenList.map(async (e) => {
                const tokenPrice = await getPrice(e)
                return convertToTokenData(e, tokenPrice)
            })
            Promise.all(InfoTokens)
                .then(setInfoBarTokens)
        }
    }, [provider, chainId])

    return (
        <TokenDataContext.Provider
            value={{
                infoBarTokens: infoBarTokens
            }}
        >
            {children}
        </TokenDataContext.Provider>
    )
}

function convertToTokenData(
    token: TokenData,
    tokenPrices: any
) {
    return {
        address: token.address,
        id: token.id,
        image: token.image,
        name: token.name,
        symbol: token.symbol,
        priceUsd: tokenPrices[token.name]["usd"],
        dailyPercentChange: token.dailyPercentChange,
    }
}

function getPrice(
    token: TokenData
): Promise<JSON> {
    return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token.name}&vs_currencies=USD`)
        .then((response) => response.json())
        .catch((e) => console.log(e))
}

export default TokenDataContextProvider