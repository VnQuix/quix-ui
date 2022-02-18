import React from 'react'


import styled from 'styled-components'

import { Container, Card } from 'react-bootstrap'

const InfoBar: React.FC = () => {
    return (
        <Container>
            <StyledInfoBar>
                <StyledInfoBarContent>
                    <Card style={{ minWidth: '18.5rem' }}>
                        Token Watchlist
                    </Card>
                </StyledInfoBarContent>
            </StyledInfoBar>
        </Container>
    )
}

const StyledInfoBar = styled.div`
    position: fixed;
    right: 15.15rem;
    min-height: 100vh !important;
    z-index: 100;
    padding: 24px 0 0;
    box-shadow: rgba(255, 255, 255, .3) -1px 0 0;    
`

const StyledInfoBarContent = styled.div`
    display: flex;
    flex-direction:column;
    margin-left:2rem;
    max-width: 10rem;
`

export default InfoBar