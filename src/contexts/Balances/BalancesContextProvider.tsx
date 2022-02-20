import React, { useState, useCallback, useEffect } from 'react'

import BalancesContext from './BalancesContext'
import useWallet from 'hooks/useWallet'
import { provider } from 'web3-core'
import WalletTokenList from 'constants/Erc20Token'
import { TokenData } from 'contexts/TokenData/TokenData'
import { getBalance } from 'utils'

const BalancesContextProvider: React.FC = ({ children }) => {
    const [walletTokenBalance, setWalletTokenBalance] = useState<TokenData[]>([])

    const { account, ethereum, status, chainId } = useWallet()

    const fetchBalances = useCallback((userAddress: string, provider: provider) => {
        const WalletTokens = WalletTokenList.map(async (e) => {
            const TokenBalances = await getBalance(provider, e.polygonAddress, userAddress)
            return convertToTokenData(e, JSON.stringify(TokenBalances))
        })
        Promise.all(WalletTokens)
            .then(setWalletTokenBalance)
    }, [setWalletTokenBalance])


    useEffect(() => {
        if (status !== 'connected') {
            setWalletTokenBalance([])
        }
    }, [status])

    useEffect(() => {
        if (account && ethereum) {
            fetchBalances(account, ethereum)
            let refreshInterval = setInterval(() => fetchBalances(account, ethereum), 10000)

            return () => clearInterval(refreshInterval)
        }
    }, [account, ethereum, fetchBalances, chainId])



    return (
        <BalancesContext.Provider
            value={{
                tokenBalances: walletTokenBalance
            }}
        >
            {children}
        </BalancesContext.Provider>
    )
}


function convertToTokenData(
    token: TokenData,
    tokenBalances: string
) {
    if (!tokenBalances) {
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
            priceUsd: token.priceUsd,
            dailyPercentChange: token.dailyPercentChange,
            balance: tokenBalances
        }
    }

}

export default BalancesContextProvider