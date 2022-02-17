import React, { useCallback, useEffect } from 'react'

import styled from 'styled-components'

import { Card, Modal, Button, Col, Container, Row } from "react-bootstrap"
import useWallet from "hooks/useWallet"
import { toast } from "react-toastify"

import metamaskLogo from "assets/Wallet/metamask-fox.svg"
interface WalletModalProps {
    isOpen: boolean
    onDismiss: () => void
}


const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onDismiss }) => {
    const { account, connect } = useWallet()

    const handleConnectMetaMask = useCallback(
        () => {
            connect('injected')
        },
        [connect],
    )

    const handleConnectWalletConnect = useCallback(
        () => {
            connect('walletconnect')
        },
        [connect],
    )

    const handleConnectWalletLink = useCallback(
        () => {
            connect("walletlink")
        },
        [connect],
    )

    useEffect(
        () => {
            if (account) {
                onDismiss && onDismiss()
                toast.success("Welcome! You've logged in.", { toastId: 'success1' })
            }
        },
        [account, onDismiss],
    )

    return (
        <Modal
            show={isOpen}
            onExit={onDismiss}
        >
            <Modal.Header>
                <Modal.Title>
                    Please select your wallet type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Col xs={{ span: 4, offset: 4 }}>
                        <StyledCardWrapper>
                            <Card>
                                <img
                                    src={metamaskLogo}
                                    alt="metamaskLogo"
                                    height="50"
                                />
                            </Card>
                        </StyledCardWrapper>
                        <Button onClick={handleConnectMetaMask}>
                            Metamask
                        </Button>
                    </Col>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onDismiss}>
                    Cancel
                </Button>
            </Modal.Footer>


        </Modal>
    )
}

const StyledCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`

export default WalletModal