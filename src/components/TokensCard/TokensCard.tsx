import React from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import ethLogo from "assets/Token/eth-logo.png"

const TokensCard: React.FC = () => {
    return (
        <Card>
            <Card.Header><h5><strong>Wallet</strong></h5></Card.Header>
            <Card.Body>
                <Card>
                    <Row>
                        <Col xs={1}>
                            <img
                                alt=""
                                src={ethLogo}
                                width="27"
                                height="27"
                                className="pt-0"
                            />{" "}
                        </Col>
                        <Col xs={5}>
                            <h5><strong style={{ marginLeft: "0.5rem" }}>Ethereum</strong></h5>
                        </Col>
                        <Col xs={5} style={{ textAlign: 'right' }}>
                            0.00
                        </Col>
                    </Row>
                </Card>
            </Card.Body>
        </Card>
    )
}


export default TokensCard