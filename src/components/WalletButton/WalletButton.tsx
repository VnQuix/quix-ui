import React, { useCallback } from 'react'

import styled from 'styled-components'

import Davatar from "@davatar/react"
import { shortenAddress, useLookupAddress } from '@usedapp/core'
import useWallet from 'hooks/useWallet'
import { Button } from 'react-bootstrap'
import WalletModal from 'components/WalletModal'

const WalletButton: React.FC = () => {
    const {
        account,
        ethereum,
        isShowingWalletModal,
        onCloseWalletModal,
        onOpenWalletModal,
        status,
        connect
    } = useWallet()
    const ens = useLookupAddress()

    const onClick = useCallback(
        () => {
            if (status !== 'connected' && (window as any).ethereum?.isONTO) {
                connect('injected')
            } else {
                onOpenWalletModal()
            }
        },
        [status, connect, onOpenWalletModal],
    )

    const openWalletText = getOpenWalletText(account, ens)
    const variant = !!account ? 'dark' : 'success'

    return (
        <>
            <Button
                onClick={onClick}
                variant={variant}
            >
                <StyledText>
                    {account && (
                        <StyledDavatar>
                            <Davatar
                                size={24}
                                address={account}
                                provider={ethereum}
                                generatedAvatarType='jazzicon'
                            />
                        </StyledDavatar>
                    )}
                    {openWalletText}
                </StyledText>
            </Button>
            <WalletModal
                isOpen={!account && isShowingWalletModal}
                onDismiss={onCloseWalletModal}
            />
        </>
    )
}

function getOpenWalletText(
    account: string | null | undefined,
    ens: string | null | undefined
) {
    if (account && ens) {
        return ens
    } else if (account) {
        return shortenAddress(account)
    } else {
        return 'Connect Wallet'
    }
}

const StyledDavatar = styled.div`
  margin-right: 6px;

`
const StyledText = styled.div`
  position: static;
  display: flex;
`

export default WalletButton