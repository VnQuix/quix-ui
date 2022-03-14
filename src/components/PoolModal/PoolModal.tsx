import React, { useState } from 'react'

import styled from 'styled-components'

import { UniLiquidityPool } from 'constants/UniTokens'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import Davatar from "@davatar/react"
import { shortenAddress } from '@usedapp/core'
import useWallet from 'hooks/useWallet'
import useApproval from "hooks/useApproval"
import useUniswapInteractor from 'hooks/useUniswapInteractor'

interface ModalProps {
    isOpen: boolean
    onDismiss: () => void
    data: UniLiquidityPool
}

const PoolModal: React.FC<ModalProps> = ({ isOpen, onDismiss, data }) => {
    const [amountToken0, setAmountToken0] = useState<string>("0")

    const { pool } = useUniswapInteractor()
    const {
        account,
        ethereum,
    } = useWallet()

    const token0Approval = useApproval(data.token0.address, pool[data.id].address.slice(1, -1))
    const token0ApprovalRequired = !token0Approval.isApproved

    const token1Approval = useApproval(data.token1.address, pool[data.id].address.slice(1, -1))
    const token1ApprovalRequired = !token1Approval.isApproved

    return (
        <Modal
            show={isOpen}
            onExit={onDismiss}
        >
            <Modal.Header>
                <Modal.Title className='pt-2'>
                    <h5>
                        <strong>Provide Liquidity</strong>
                    </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Button
                            style={{ minHeight: '3rem' }}
                            variant='secondary'
                        >
                            <StyledText>

                                <strong>Notes: You are transacting with {account && shortenAddress(account)}</strong>&nbsp;&nbsp;
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
                            </StyledText>
                        </Button>
                    </Row>
                    <Row className='pt-4'>
                        <Col xs={6} style={{ textAlign: 'left' }}>
                            <Row className='pt-3'>

                                <StyledText>
                                    <img
                                        alt=""
                                        src={data.token0.image}
                                        width="33"
                                        height="33"
                                        style={{ marginTop: '0.5rem' }}
                                    />{" "}&nbsp;&nbsp;
                                    <h4 style={{ marginTop: '0.5rem' }}><strong>{data.token0.symbol}</strong></h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Col xs={5} >
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Control
                                                    placeholder='0.0'
                                                    onChange={(e) => setAmountToken0(e.target.value)}
                                                    style={{ backgroundColor: '#444', color: 'whitesmoke', minHeight: '3rem' }}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </StyledText>
                            </Row>
                        </Col>
                        <Col xs={6} style={{ textAlign: 'right' }}>
                            <Row className='pt-3'>

                                <StyledText>
                                    <img
                                        alt=""
                                        src={data.token1.image}
                                        width="33"
                                        height="33"
                                        style={{ marginTop: '0.5rem' }}
                                    />{" "}&nbsp;&nbsp;
                                    <h4 style={{ marginTop: '0.5rem' }}><strong>{data.token1.symbol}</strong></h4>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Col xs={5} >
                                        <Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Control
                                                    placeholder='0.0'
                                                    onChange={(e) => setAmountToken0(e.target.value)}
                                                    style={{ backgroundColor: '#444', color: 'whitesmoke', minHeight: '3rem' }}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </StyledText>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='pt-2' style={{ textAlign: 'left' }}>
                        <Col xs={6}>
                            {
                                (token0ApprovalRequired) ? (
                                    <Button variant='danger' onClick={token0Approval.onApprove} className='py-2' style={{ minWidth: '12rem' }}>Approve {data.token0.symbol}</Button>
                                ) : (
                                    null
                                )}
                        </Col>
                        <Col xs={6}>
                            {
                                (token1ApprovalRequired) ? (
                                    <Button variant='danger' onClick={token1Approval.onApprove} className='py-2' style={{ minWidth: '12rem' }}>Approve {data.token1.symbol}</Button>
                                ) : (
                                    null
                                )
                            }
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Button variant='success' disabled={token0ApprovalRequired && token1ApprovalRequired}>
                            Provide
                        </Button>
                    </Row>

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

const StyledDavatar = styled.div`
                margin-right: 6px;
                `

const StyledText = styled.div`
                position: static;
                display: flex;
                `

export default PoolModal