import React, { useState } from 'react'

import styled from 'styled-components'

import { Card, Row, Col, Button } from 'react-bootstrap'
import SaveTokenList from 'constants/SaveTokens'
import useSave from 'hooks/useSave'
import SaveModal from 'components/SaveModal'
import { SaveTokenMarket } from 'contexts/Save/types'


const SaveCard: React.FC = () => {
    const [infoData, setinfoData] = useState<SaveTokenMarket>(SaveTokenList[0])
    const { isShowingSaveModal, onCloseSaveModal, onOpenSaveModal } = useSave()


    return (
        <Card>
            <Card.Header>
                <h5 className='pt-2'><strong>Explore Opportunities</strong></h5>
            </Card.Header>

            <Card.Body>
                <StyledRow>
                    <Row>
                        <Col xs={1}>
                            #
                        </Col>
                        <Col xs={3}>
                            Assets
                        </Col>
                        <Col xs={3}>
                            Market Size
                        </Col>
                        <Col xs={2}>
                            APY
                        </Col>
                    </Row>
                </StyledRow>
                <br className='pt-3' />
                {SaveTokenList.map((data) => {
                    const onClick =
                        () => {
                            onOpenSaveModal()
                            setinfoData(data)
                        }
                    return (<StyledRow className='pt-3' key={data.id}>
                        <Row>
                            <Col xs={1}>
                                {data.id}
                            </Col>
                            <Col xs={3}>
                                <img
                                    alt=""
                                    src={data.image}
                                    width="24"
                                    height="24"
                                    className="pt-0"
                                    style={{ marginBottom: '0.5rem' }}
                                />{" "}
                                {data.symbol}
                            </Col>
                            <Col xs={3}>
                                {data.marketSize}
                            </Col>
                            <Col xs={2}>
                                {data.APY}%
                            </Col>
                            <Col xs={3} >
                                <Button variant='success' style={{ marginBottom: '0.5rem' }} onClick={onClick}>
                                    Deposit

                                </Button>
                                <SaveModal
                                    isOpen={isShowingSaveModal}
                                    onDismiss={onCloseSaveModal}
                                    data={infoData}
                                />

                            </Col>
                        </Row>
                    </StyledRow>)
                })}


            </Card.Body>
        </Card>
    )
}

export const StyledRow = styled.div`
    font-weight: bold;
`

export default SaveCard