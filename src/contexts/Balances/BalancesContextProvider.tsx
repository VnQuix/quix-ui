import React, { useState, useCallback, useEffect } from 'react'

import BalancesContext from './BalancesContext'
import BigNumber from "utils/bignumber"
import useWallet from 'hooks/useWallet'
import { provider } from 'web3-core'
import { getEthBalance } from 'utils'

const BalancesContextProvider: React.FC = ({ children }) => {
    const [ethBalance, setEthBalance] = useState<BigNumber>(new BigNumber(0))

    const { account, ethereum, status, chainId } = useWallet()

    const fetchBalances = useCallback(
        async (userAddress: string, provider: provider) => {
            if (chainId) {
                const balances = await Promise.all([
                    getEthBalance(provider, userAddress)
                ])
                setEthBalance(new BigNumber(balances[0]))
            }
        },
        [chainId],
    )

    useEffect(() => {
        if (status !== 'connected') {
            setEthBalance(new BigNumber(0))
        }
    }, [status])

    useEffect(() => {
        if (account && ethereum) {
            fetchBalances(account, ethereum)
            let refreshInterval = setInterval(() => fetchBalances(account, ethereum), 10000)

            return () => clearInterval(refreshInterval)
        }
    }, [account, ethereum, fetchBalances])

    return (
        <BalancesContext.Provider
            value={{
                ethBalance: ethBalance
            }}
        >
            {children}
        </BalancesContext.Provider>
    )
}

export default BalancesContextProvider