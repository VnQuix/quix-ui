import React, { useState } from 'react'

import styled from 'styled-components'

import { Container, Form, Col, Button, Dropdown } from 'react-bootstrap'
import { TokenData } from 'contexts/TokenData/TokenData'
import { UNI_TOKEN_HOLDER, UNI_TOKEN_RINKEBY } from "constants/UniTokens"

const ExchangeCard: React.FC = () => {
    const [token0, settoken0] = useState<TokenData>(UNI_TOKEN_HOLDER)
    const [token1, setToken1] = useState<TokenData>(UNI_TOKEN_HOLDER)

    return (
        <Container>
            <Col xs={{ span: 8, offset: 2 }}>
                <Button variant='dark' style={{ minWidth: '30rem' }}>
                    <Form>
                        <Container className='pt-2'>
                            <h5 className='pt-2' style={{ textAlign: 'left' }}><strong>Swap</strong></h5>
                            <Form.Group className='pt-3'>
                                <StyledText>
                                    <Form.Control
                                        placeholder='0.0'
                                        style={{ backgroundColor: '#444', minHeight: '5rem', fontSize: '1.5rem', color: 'whitesmoke' }}
                                    />
                                    <Dropdown style={{ position: 'absolute', marginLeft: '20rem', minHeight: '4rem', marginTop: '1.5rem' }}>
                                        <Dropdown.Toggle id='dropdown-basic' variant='secondary'>
                                            <strong>{token0.symbol}</strong>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {UNI_TOKEN_RINKEBY.map((data) => (
                                                <Dropdown.Item onClick={() => { settoken0(data) }}>
                                                    <StyledText>
                                                        <img
                                                            alt=""
                                                            src={data.image}
                                                            width="20"
                                                            height="20"
                                                            className="pt-0"
                                                        />{" "}
                                                        <h6><strong style={{ marginLeft: "0.5rem" }}>{data.symbol}</strong></h6>
                                                    </StyledText>
                                                </Dropdown.Item>

                                            ))}
                                        </Dropdown.Menu>

                                    </Dropdown>


                                </StyledText>
                            </Form.Group>
                            <Form.Group className='pt-1' >
                                <StyledText>
                                    <Form.Control
                                        placeholder='0.0'
                                        style={{ backgroundColor: '#444', minHeight: '5rem', fontSize: '1.5rem', color: 'whitesmoke' }}
                                    />
                                    <Dropdown style={{ position: 'absolute', marginLeft: '20rem', minHeight: '4rem', marginTop: '1.5rem' }}>
                                        <Dropdown.Toggle id='dropdown-basic' variant='secondary'>
                                            <strong>{token1.symbol}</strong>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {UNI_TOKEN_RINKEBY.map((data) => (
                                                <Dropdown.Item onClick={() => { setToken1(data) }}>
                                                    <StyledText>
                                                        <img
                                                            alt=""
                                                            src={data.image}
                                                            width="20"
                                                            height="20"
                                                            className="pt-0"
                                                        />{" "}
                                                        <h6><strong style={{ marginLeft: "0.5rem" }}>{data.symbol}</strong></h6>
                                                    </StyledText>
                                                </Dropdown.Item>

                                            ))}
                                        </Dropdown.Menu>

                                    </Dropdown>
                                </StyledText>

                            </Form.Group>
                            <div className='py-3'>
                                <Button variant="success" type="submit" className='pt-2' style={{ minWidth: '25rem', minHeight: '3rem' }}>
                                    Swap
                                </Button>
                            </div>
                        </Container>
                    </Form>
                </Button>
            </Col>
        </Container >
    )
}

const StyledText = styled.div`
    position: static;
    display: flex;
`

export default ExchangeCard