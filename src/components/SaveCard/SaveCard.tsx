import React from 'react'

import { Card, Row, Col } from 'react-bootstrap'
import { StyledRow } from 'components/PoolCard/PoolCard'

const SaveCard: React.FC = () => {
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
            </Card.Body>
        </Card>
    )
}

export default SaveCard