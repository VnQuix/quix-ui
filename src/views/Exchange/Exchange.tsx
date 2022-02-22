import React from 'react'

import styled from 'styled-components'

import { Row, Col } from 'react-bootstrap'
import { StyledTitle, StyledContentWrapper } from 'views/Dashboard/Dashboard'
import ExchangeCard from 'components/ExchangeCard'

const Exchange: React.FC = () => {
    return (
        <div>
            <StyledTitle>Exchange</StyledTitle>
            <hr />
            <Row >
                <StyledTitle2>Exchang Tokens</StyledTitle2>
                <StyledContentWrapper>
                    <h6><strong>Swap into more than 2000 tokens, routing through UniSwap.</strong></h6>
                </StyledContentWrapper>
            </Row>
            <hr />
            <Row className='pt-4'>
                <Col>
                    <StyledContentWrapper>
                        <ExchangeCard />
                    </StyledContentWrapper>
                </Col>
            </Row>

        </div>
    )
}

export const StyledTitle2 = styled.h4`
    font-weight: bold;
    margin-left: 2rem;
    margin-top: 1rem;
`

export default Exchange