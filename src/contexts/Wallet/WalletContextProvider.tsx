import React, { useState, useCallback } from 'react'

import WalletContext from './WalletContext'
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { walletconnect, walletlink, injected } from 'utils/connectors'
import useEagerConnect from 'hooks/useEagerConnect'

const WalletContextProvider: React.FC = ({ children }) => {
  const [connector, setConnector] = useState<string>("")
  const [status, setStatus] = useState('disconnected')
  const [isShowingWalletModal, setIsShowingWalletModal] = useState<boolean>(false)
  const [isMetamaskConnected, setIsMetamaskConnected] = useState<boolean>(false)
  const { account, activate, active, deactivate, library: ethereum, chainId } = useWeb3React()

  const reset = useCallback(
    () => {
      if (active) deactivate()

      setConnector('')
      setStatus('disconnected')
      localStorage.removeItem('walletconnect')
    },
    [active, deactivate],
  )

  const connect = useCallback(
    async (walletType: string) => {
      try {
        reset()
        setConnector(walletType)
        setStatus('connecting')
        switch (walletType) {
          case 'injected':
            activate(injected, undefined, true)
            setStatus('connected')
            setIsMetamaskConnected(true)
            break
          case 'walletconnect':
            await activate(walletconnect, undefined, true)
            setStatus('connected')
            break
          case 'walletlink':
            await activate(walletlink, undefined, true)
            setStatus('connected')
            break
          default:
            throw new Error("unknown wallet type: " + walletType)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [activate, reset],
  )

  const triedEagerConnect = useEagerConnect(connect)

  const onOpenWalletModal = useCallback(
    () => {
      setIsShowingWalletModal(true)
    },
    [setIsShowingWalletModal],
  )

  const onCloseWalletModal = useCallback(
    () => {
      setIsShowingWalletModal(false)
    },
    [setIsShowingWalletModal],
  )

  return (
    <WalletContext.Provider
      value={{
        account,
        connector,
        ethereum,
        status,
        isMetamaskConnected,
        isShowingWalletModal,
        triedEagerConnect,
        connect,
        reset,
        onCloseWalletModal,
        onOpenWalletModal,
        chainId
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

interface UseWalletProviderWrapperPropTypes {
  children: any
}

function UseWalletProviderWrapper(props: UseWalletProviderWrapperPropTypes) {
  return (
    <Web3ReactProvider getLibrary={(ethereum) => ethereum}>
      <WalletContextProvider {...props} />
    </Web3ReactProvider>
  )
}

export default UseWalletProviderWrapper