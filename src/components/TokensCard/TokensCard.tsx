import React from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import useBalances from "hooks/useBalances"
import { displayFromWei } from 'utils'
import BigNumber from 'utils/bignumber'

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

                            <Col xs={5} style={{ textAlign: 'right' }}>
                                {displayFromWei(new BigNumber(Number(data.balance)))}
                            </Col>
                        </Row>
                    ))}
                </Card>
            </Card.Body>
        </Card>
    )
}


export default TokensCard