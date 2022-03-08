import React from 'react'

import styled from 'styled-components'

import { Modal, Button, Col, Container, Row, Form } from "react-bootstrap"
import Davatar from "@davatar/react"
import { shortenAddress } from '@usedapp/core'
import useWallet from 'hooks/useWallet'
import { SaveTokenMarket } from 'contexts/Save/types'
import useApproval from "hooks/useApproval"
import { aavePoolContractAddress } from 'constants/contractAddresses'
import useSave from "hooks/useSave"

interface ModalProps {
    isOpen: boolean
    onDismiss: () => void
    data: SaveTokenMarket
}


const SaveModal: React.FC<ModalProps> = ({ isOpen, onDismiss, data }) => {
    const {
        account,
        ethereum,
    } = useWallet()

    const { supply } = useSave()

    const approval = useApproval(data.address, aavePoolContractAddress)
    const approvalRequired = !approval.isApproved

    return (
        <Modal
            show={isOpen}
            onExit={onDismiss}
        >
            <Modal.Header>
                <Modal.Title className='pt-2'>
                    <h5>
                        <strong>Deposit</strong>
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
                        <Button variant='secondary'>
                            <Row>
                                <Col xs={6} style={{ textAlign: 'left', alignItems: 'left' }}>
                                    <Row><strong>Token</strong></Row>
                                    <Row className='py-4'>
                                        <StyledText>
                                            <img
                                                alt=""
                                                src={data.image}
                                                width="33"
                                                height="33"
                                            />{" "}&nbsp;&nbsp;
                                            <h4><strong>{data.symbol}</strong></h4>
                                        </StyledText>
                                    </Row>
                                </Col>
                                <Col xs={6} style={{ textAlign: 'right' }}>
                                    <Row><strong>Balance</strong></Row>
                                    <Row className='pt-3'>
                                        <Col xs={5}></Col>
                                        <Col xs={7}><Form>
                                            <Form.Group className='mb-3'>
                                                <Form.Control
                                                    placeholder='0.0'
                                                    style={{ backgroundColor: '#444', color: 'whitesmoke', minHeight: '3rem' }}
                                                />
                                            </Form.Group>
                                        </Form></Col>

                                    </Row>
                                </Col>
                            </Row>
                        </Button>
                    </Row>
                    <Row className='pt-4'>
                        <Button variant='secondary'>
                            <Container className='py-2'>
                                <Row>
                                    <Col xs={6} style={{ textAlign: 'left', alignItems: 'left' }}>
                                        <Row>Pool Info</Row>
                                        <Row className='pt-1'><strong>Market Size</strong></Row>
                                        <Row><strong>APY</strong></Row>
                                    </Col>
                                    <Col xs={6} style={{ textAlign: 'right' }} className='pt-1'>
                                        <Row className='pt-4'><strong>{data.marketSize}</strong></Row>
                                        <Row><strong>{data.APY}</strong></Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Button>
                    </Row>
                    <Row className='pt-4'>
                        {(approvalRequired) ? (
                            <Button variant='danger' onClick={approval.onApprove} className='py-2'>Approve</Button>
                        ) : (
                            <Button variant='success' onClick={approval.onApprove} className='py-2'>Deposit</Button>
                        )}
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


const StyledDavatar = styled.div`
  margin-right: 6px;
`

const StyledText = styled.div`
  position: static;
  display: flex;
`

export default SaveModal