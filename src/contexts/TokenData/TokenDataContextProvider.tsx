import React, { useEffect, useState } from 'react'

import TokenDataContext from './TokenDataContext'
import { TokenData } from './TokenData'
import InfoBarTokenList from 'constants/InfoBarTokens'


const TokenDataContextProvider: React.FC = ({ children }) => {

    const [infoBarTokens, setInfoBarTokens] = useState<TokenData[]>([])

    useEffect(() => {
        const InfoTokens = InfoBarTokenList.map(async (e) => {
            const TokenPrice = await getPrice(e)

            const PriceConverted = TokenPrice[e.coinGeckoID]["usd"]
            const PercentageConverted = TokenPrice[e.coinGeckoID]["usd_24h_change"]

            return convertToTokenData(e, JSON.stringify(PriceConverted), JSON.stringify(PercentageConverted))
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
    tokenPrices: string,
    tokenPriceChangesPercentage: string
) {
    if (!tokenPrices) {
        return token
    } else {
        return {
            address: token.address,
            polygonAddress: token.polygonAddress,
            id: token.id,
            image: token.image,
            name: token.name,
            coinGeckoID: token.coinGeckoID,
            symbol: token.symbol,
            priceUsd: tokenPrices,
            dailyPercentChange: tokenPriceChangesPercentage,
            balance: token.balance,
        }
    }

}

function getPrice(
    token: TokenData
): Promise<any> {
    return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token.coinGeckoID}&vs_currencies=USD&include_24hr_change=true`)
        .then((response) => response.json())
        .catch((e) => console.log(e))
}

export default TokenDataContextProvider