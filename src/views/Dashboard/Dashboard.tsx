import React from 'react'

import styled from 'styled-components'

import { Row, Col } from 'react-bootstrap'
import TokensCard from 'components/TokensCard'
import NetWorthCard from 'components/NetWorthCard'

const Dashboard: React.FC = () => {
    return (
        <div>
            <StyledTitle>Home</StyledTitle>
            <hr />
            <Row className='pt-4'>
                <Col>
                    <StyledContentWrapper>
                        <NetWorthCard />
                    </StyledContentWrapper>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col>
                    <StyledContentWrapper>
                        <TokensCard />
                    </StyledContentWrapper>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col>
                    <StyledContentWrapper>

                    </StyledContentWrapper>
                </Col>
            </Row>
        </div>
    )
}

export const StyledTitle = styled.h4`
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 2rem;
`

export const StyledContentWrapper = styled.div`
    color: whitesmoke;
    margin-right: 2rem;
    margin-left: 2rem;
`

export default Dashboard