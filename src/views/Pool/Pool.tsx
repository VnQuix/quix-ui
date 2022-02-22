import React from 'react'

import { StyledTitle, StyledContentWrapper } from 'views/Dashboard/Dashboard'
import { StyledTitle2 } from 'views/Exchange/Exchange'
import { Row, Col } from 'react-bootstrap'
import PoolCard from 'components/PoolCard'

const Pool: React.FC = () => {
    return (
        <div>
            <StyledTitle>Exchange</StyledTitle>
            <hr />
            <Row >
                <StyledTitle2>Liquidity Pools</StyledTitle2>
                <StyledContentWrapper>
                    <h6><strong>Add liquidity to earn fees, incentives, voting rights, etc.</strong></h6>
                </StyledContentWrapper>
            </Row>
            <hr />
            <Row className='pt-4'>
                <Col>
                    <StyledContentWrapper>
                        <PoolCard />
                    </StyledContentWrapper>
                </Col>
            </Row>

        </div>
    )
}

export default Pool