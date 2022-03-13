import React from 'react'

import styled from 'styled-components'

import { Card, Row, Col, Button } from 'react-bootstrap'
import UniTokenPool from 'constants/UniTokens'
import useUniswapInteractor from 'hooks/useUniswapInteractor'

const PoolCard: React.FC = () => {
    const { pool } = useUniswapInteractor()
    return (
        <Card>
            <Card.Header>
                <h5 className='pt-2'><strong>Explore Opportunities</strong></h5>
            </Card.Header>
            <Button onClick={() => {
                console.log(pool)
            }}></Button>
            <Card.Body>
                <StyledRow>
                    <Row>
                        <Col xs={1}>
                            #
                        </Col>
                        <Col xs={3}>
                            Available Pools
                        </Col>
                        <Col xs={3}>
                            TVL
                        </Col>
                        <Col xs={2}>
                            Fee APR
                        </Col>
                    </Row>
                </StyledRow>
                {UniTokenPool.map((data) => (
                    <StyledRow className='pt-3' key={data.id}>
                        <Row>
                            <Col xs={1}>
                                {data.id}
                            </Col>
                            <Col xs={3}>
                                &nbsp;&nbsp;
                                <img
                                    alt=""
                                    src={data.token0.image}
                                    width="25"
                                    height="25"
                                    className="pt-0"
                                    style={{ marginBottom: '0.5rem' }}
                                />
                                &nbsp;&nbsp;
                                /
                                &nbsp;&nbsp;
                                <img
                                    alt=""
                                    src={data.token1.image}
                                    width="25"
                                    height="25"
                                    className="pt-0"
                                    style={{ marginBottom: '0.5rem' }}
                                />
                            </Col>
                            <Col xs={3}>{data.tvl}</Col>
                            <Col xs={2}>{data.APR}</Col>
                            <Col xs={3}>
                                <Button variant='success' style={{ marginBottom: '0.5rem' }}>Provide</Button>
                            </Col>
                        </Row>
                    </StyledRow>
                ))}
            </Card.Body>
        </Card>
    )
}

export const StyledRow = styled.div`
    font-weight: bold;
`

export default PoolCard