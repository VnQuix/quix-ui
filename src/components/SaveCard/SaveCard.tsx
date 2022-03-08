import React from 'react'

import { Card, Row, Col, Button } from 'react-bootstrap'
import { StyledRow } from 'components/PoolCard/PoolCard'
import SaveTokenList from 'constants/SaveTokens'
import useWallet from 'hooks/useWallet'
import BigNumber from 'bignumber.js'

const SaveCard: React.FC = () => {
    const { account, ethereum } = useWallet()
    return (
        <Card>
            <Button>TEST</Button>
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
                {SaveTokenList.map((data) => (
                    <StyledRow className='pt-3'>
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
                                <Button variant='success' style={{ marginBottom: '0.5rem' }}>
                                    Deposit
                                </Button>
                            </Col>
                        </Row>
                    </StyledRow>
                ))}


            </Card.Body>
        </Card>
    )
}

export default SaveCard