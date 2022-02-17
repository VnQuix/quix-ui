import React, { useCallback } from 'react'

import styled from 'styled-components'

import Davatar from "@davatar/react"
import { shortenAddress, useLookupAddress } from '@usedapp/core'
import useWallet from 'hooks/useWallet'
import { Button } from 'react-bootstrap'
import WalletModal from 'components/WalletModal'
import { AiFillWarning } from 'react-icons/ai'

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
        <div className='pt-5'>
            {!account && (
                <StyledText>
                    <AiFillWarning fontSize='18px' color="red" /> &nbsp; <h6><strong>No Wallet Connected</strong></h6>
                </StyledText>
            )}

            <Button
                onClick={onClick}
                variant={variant}
                style={{ minHeight: '3rem' }}
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
                    <strong>{openWalletText}</strong>
                </StyledText>
            </Button>
            <WalletModal
                isOpen={!account && isShowingWalletModal}
                onDismiss={onCloseWalletModal}
            />

        </div>
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