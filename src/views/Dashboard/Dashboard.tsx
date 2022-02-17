import React from 'react'

import styled from 'styled-components'

import SideBar from 'components/SideBar'
import { Col, Container, Row } from "react-bootstrap"


const Dashboard: React.FC = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={4}>
                    <StyledSideBarWrapper>
                        <SideBar />
                    </StyledSideBarWrapper>
                </Col>
                <Col xs={8}>
                    <StyledPageContentWrapper>
                        test
                    </StyledPageContentWrapper>
                </Col>
            </Row>
        </Container>
    )
}

const StyledSideBarWrapper = styled.div`
    min-height: 100vh !important;
    width: 100vw;
    margin-left: -1rem;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
`

const StyledPageContentWrapper = styled.div`
    min-width: 0;
    width: 100%;
`

export default Dashboard