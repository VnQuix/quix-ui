import React from 'react'

import { Card, Container, Form, Col, Button } from 'react-bootstrap'

const ExchangeCard: React.FC = () => {
    return (
        <Container>
            <Col xs={{ span: 6, offset: 3 }}>
                <Card>
                    <Form>
                        <Container className='pt-2'>
                            <h5 className='pt-3'><strong>From</strong></h5>
                            <Form.Group className='mb-3'>
                                <Form.Control
                                    placeholder='0.0'
                                    style={{ backgroundColor: '#444', minHeight: '4rem', fontSize: '1.5rem' }}
                                />
                            </Form.Group>
                            <h5 className='pt-2'><strong>To</strong></h5>
                            <Form.Group className='mb-3' >
                                <Form.Control
                                    placeholder='0.0'
                                    style={{ backgroundColor: '#444', minHeight: '4rem', fontSize: '1.5rem' }}
                                />
                            </Form.Group>
                            <div className="py-3">

                                <Button variant="secondary" type="submit">
                                    Exchange
                                </Button>

                            </div>
                        </Container>
                    </Form>
                </Card>
            </Col>
        </Container >
    )
}

export default ExchangeCard