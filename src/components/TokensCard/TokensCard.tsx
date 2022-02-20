import React, { useEffect } from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import ethLogo from "assets/Token/eth-logo.png"
import useBalances from "hooks/useBalances"
import { displayFromWei } from 'utils'

const TokensCard: React.FC = () => {
    const { ethBalance } = useBalances()

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
                            {displayFromWei(ethBalance)}
                        </Col>
                    </Row>
                </Card>
            </Card.Body>
        </Card>
    )
}


export default TokensCard