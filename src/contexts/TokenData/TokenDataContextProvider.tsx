import React, { useEffect, useState } from 'react'

import TokenDataContext from './TokenDataContext'
import { TokenData } from './TokenData'
import InfoBarTokenList from 'constants/InfoBarTokens'


const TokenDataContextProvider: React.FC = ({ children }) => {

    const [infoBarTokens, setInfoBarTokens] = useState<TokenData[]>([])

    useEffect(() => {
        const InfoTokens = InfoBarTokenList.map(async (e) => {
            const TokenPrice = await getPrice(e)
            const PriceConverted = TokenPrice[e.name.toLowerCase()]["usd"]
            return convertToTokenData(e, JSON.stringify(PriceConverted))
        })
        Promise.all(InfoTokens)
            .then(setInfoBarTokens)

    }, [])

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
    tokenPrices?: string
) {
    if (!tokenPrices) {
        return token
    } else {
        return {
            address: token.address,
            id: token.id,
            image: token.image,
            name: token.name,
            symbol: token.symbol,
            priceUsd: tokenPrices,
            dailyPercentChange: token.dailyPercentChange,
        }
    }

}

function getPrice(
    token: TokenData
): Promise<any> {
    return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token.name}&vs_currencies=USD`)
        .then((response) => response.json())
        .catch((e) => console.log(e))
}

export default TokenDataContextProvider