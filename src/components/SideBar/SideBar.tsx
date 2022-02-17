import React from 'react'

import styled from 'styled-components'

import { Container, Nav } from 'react-bootstrap'

const SideBar: React.FC = () => {
    return (
        <Container>
            <StyledNav>
                <h2 style={{ marginRight: "2rem" }}>test</h2>
            </StyledNav>
        </Container>
    )
}

const StyledNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 19rem;
    min-height: 100vh !important;
    z-index: 100;
    padding: 48px 0 0;
    box-shadow: inset -1px 0 0 rgba(255, 255, 255, .3);    
`

export default SideBar