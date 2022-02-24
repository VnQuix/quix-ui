import React, { useEffect, useState } from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import useBalances from "hooks/useBalances"
import useWallet from 'hooks/useWallet';
import { POLYGON_CHAIN_DATA } from 'utils/connectors';
import { TokenData } from 'contexts/TokenData/TokenData';


const TokensCard: React.FC = () => {
    const [token, setToken] = useState<TokenData[] | undefined>([])
    const { tokenBalances, tokenBalancesPol } = useBalances()
    const { chainId } = useWallet()
    useEffect(() => {
        if (chainId === POLYGON_CHAIN_DATA.chainId) setToken(tokenBalancesPol)
        else setToken(tokenBalances)
    }, [chainId, tokenBalances, tokenBalancesPol])

    return (
        <Card>
            <Card.Header><h5><strong>Wallet</strong></h5></Card.Header>
            <Card.Body>
                <Card>
                    {token?.map((data) => {
                        if (data.balance !== "\"0\"") {
                            return (
                                <Row className='pt-3' key={data.id}>
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
                            )
                        } else {
                            return null
                        }
                    })}
                </Card>
            </Card.Body>
        </Card>
    )
}

export function stringConversion(num: string) {
    const numLength = Number(num.length)
    const slice = numLength - 15

    return Number(num.slice(1, slice)) / 10000
}


export default TokensCard