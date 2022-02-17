import React, { useCallback, useEffect } from 'react'

import styled from 'styled-components'

import { Modal, Button, Col, Container, Row } from "react-bootstrap"
import useWallet from "hooks/useWallet"
import { toast } from "react-toastify"


import metamaskLogo from "assets/Wallet/metamask-fox.svg"
import walletConnectLogo from "assets/Wallet/wallet-connect.svg"
import coinbaseWalletLogo from "assets/Wallet/coinbase-wallet.svg"
import rainbowWalletLogo from "assets/Wallet/rainbow-logo.png"
import argentLogo from "assets/Wallet/argent-wallet.svg"
import ontoLogo from "assets/Wallet/onto-wallet.png"
import trustWalletLogo from "assets/Wallet/trust-wallet.svg"
import ledgerWalletLogo from "assets/Wallet/ledger-wallet.png"

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
                <Modal.Title className='pt-2'>
                    <h5>
                        <strong>Select a Wallet to Connect to Quix</strong>
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className='pt-3'>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectMetaMask} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={metamaskLogo}
                                        alt="metamaskLogo"
                                        width="35"
                                    />
                                    <StyledText>Metamask</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectWalletConnect} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={walletConnectLogo}
                                        alt="walletConnectLogo"
                                        width="35"
                                    />
                                    <StyledText>WalletConnect</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectWalletLink} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={coinbaseWalletLogo}
                                        alt="coinbaseWalletLogo"
                                        width="35"
                                    />
                                    <StyledText>Coinbase Wallet</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectWalletConnect} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={rainbowWalletLogo}
                                        alt="rainbowWalletLogo"
                                        width="40"
                                        height="40"
                                    />
                                    <StyledText>Rainbow</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectWalletConnect} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={argentLogo}
                                        alt="argentLogo"
                                        width="35"
                                    />
                                    <StyledText>Argent</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectWalletConnect} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={ontoLogo}
                                        alt="ontoLogo"
                                        width="40"
                                        height="40"
                                    />
                                    <StyledText>ONTO Wallet</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                    </Row>
                    <Row className='py-4'>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={handleConnectMetaMask} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={trustWalletLogo}
                                        alt="trustWalletLogo"
                                        width="35"
                                    />
                                    <StyledText>Trust Wallet</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                        <Col xs={6}>
                            <Button style={{ width: '14rem' }} onClick={() => toast.error("This feature is coming soon")} variant='dark'>
                                <StyledContent>
                                    <img
                                        src={ledgerWalletLogo}
                                        alt="ledgerWalletLogo"
                                        width="40"
                                        height="40"
                                    />
                                    <StyledText>Ledger</StyledText>
                                </StyledContent>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onDismiss}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal >
    )
}

const StyledContent = styled.div`
  position: static;
  display: flex;
  min-height: 3rem;
`

const StyledText = styled.h6`
    font-weight:bold;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0.8rem;
`



export default WalletModal