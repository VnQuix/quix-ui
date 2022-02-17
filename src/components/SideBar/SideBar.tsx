import React from 'react'

import styled from 'styled-components'

import { Container, Navbar } from 'react-bootstrap'
import quixLogo from 'assets/quix-logo.png'
import WalletButton from 'components/WalletButton'

const SideBar: React.FC = () => {
    return (
        <Container>
            <StyledSideBar>
                <StyledSideBarContent>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={quixLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}&nbsp;
                        <strong> Quix</strong>
                    </Navbar.Brand>
                    <WalletButton />
                </StyledSideBarContent>
            </StyledSideBar>
        </Container>
    )
}

const StyledSideBar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 10rem;
    min-height: 100vh !important;
    z-index: 100;
    padding: 24px 0 0;
    box-shadow: inset -1px 0 0 rgba(255, 255, 255, .3);    
`

const StyledSideBarContent = styled.div`
    margin-right: 0rem;
    display: flex;
    flex-direction: column;
    min-width:12rem;
`

export default SideBar