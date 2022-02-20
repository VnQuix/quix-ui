import React from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import useBalances from "hooks/useBalances"
const TokensCard: React.FC = () => {
    const { tokenBalances } = useBalances()

    return (
        <Card>
            <Card.Header><h5><strong>Wallet</strong></h5></Card.Header>
            <Card.Body>
                <Card>
                    {tokenBalances?.map((data) => (
                        <Row className='pt-3'>
                            <Col xs={1}>
                                <img
                                    alt=""
                                    src={data.image}
                                    width="27"
                                    height="27"
                                    className="pt-0"
                                />{" "}
                            </Col>
                            <Col xs={5}>
                                <h5><strong style={{ marginLeft: "0.5rem" }}>{data.name}</strong></h5>
                            </Col>

                            <Col xs={4} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                {stringConversion(data.balance)}
                            </Col>
                            <Col xs={2} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                                {data.symbol}
                            </Col>
                        </Row>
                    ))}
                </Card>
            </Card.Body>
        </Card>
    )
}

function stringConversion(num: string) {
    const numLength = Number(num.length)
    const slice = numLength - 15

    return Number(num.slice(1, slice)) / 10000
}


export default TokensCard