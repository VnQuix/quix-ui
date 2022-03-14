import React from 'react'

import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'
import { SwapWidget, darkTheme, lightTheme } from '@uniswap/widgets/dist/index.js'
import '@uniswap/widgets/dist/fonts.css'

import useWallet from 'hooks/useWallet'

let darkMode = true
const ExchangeCard: React.FC = () => {
    const { ethereum } = useWallet()
    const jsonRpcEndpoint = 'http://localhost:3000/'

    return (
        <Container >
            <Row>
                <Col xs={{ span: 8, offset: 2 }}>
                    <div className="Uniswap" >

                        <SwapWidget
                            provider={ethereum}
                            jsonRpcEndpoint={jsonRpcEndpoint}
                            width={500}
                            theme={darkMode ? darkTheme : lightTheme}
                        />

                    </div>
                </Col>
            </Row>

        </Container >
    )
}



export default ExchangeCard