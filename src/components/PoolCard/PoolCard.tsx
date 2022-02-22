import React from 'react'

import styled from 'styled-components'

import { Card, Row, Col } from 'react-bootstrap'


const PoolCard: React.FC = () => {
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
                            Available Pools
                        </Col>
                        <Col xs={3}>
                            Liquidity
                        </Col>
                        <Col xs={2}>
                            Fee APR
                        </Col>
                    </Row>
                </StyledRow>
            </Card.Body>
        </Card>
    )
}

const StyledRow = styled.div`
    font-weight: bold;
`

export default PoolCard