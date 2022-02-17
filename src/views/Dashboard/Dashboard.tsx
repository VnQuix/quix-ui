import React from 'react'

import styled from 'styled-components'

import SideBar from 'components/SideBar'
import { Col, Container, Row } from "react-bootstrap"


const Dashboard: React.FC = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <StyledSideBarWrapper>
                        <SideBar />
                    </StyledSideBarWrapper>
                </Col>
                <Col xs={9}>
                    <StyledPageContentWrapper>

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
    overflow: hidden;
`

const StyledPageContentWrapper = styled.div`
    width: 100%;
`

export default Dashboard