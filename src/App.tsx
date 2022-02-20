
import React, { useEffect } from 'react';

import styled from 'styled-components'

import Dashboard from 'views/Dashboard';

import SideBar from 'components/SideBar'
import InfoBar from 'components/InfoBar';
import { Col, Container, Row } from "react-bootstrap"
import { WalletContextProvider } from 'contexts/Wallet';
import { TokenDataContextProvider } from 'contexts/TokenData';
import { BalancesContextProvider } from 'contexts/Balances';
import { Slide, ToastContainer, toast } from 'react-toastify';
import useWallet from 'hooks/useWallet';

import 'react-toastify/dist/ReactToastify.css'
import './bootstrap.min.css';



const App: React.FC = () => {
  const { account } = useWallet()

  useEffect(() => {
    if (!account)
      toast.info('Please Connect Wallet')
  }, [account])

  return (
    <Providers>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <StyledSideBarWrapper>
              <SideBar />
            </StyledSideBarWrapper>
          </Col>
          <Col xs={6}>
            <StyledPageContentWrapper>
              <Dashboard />
            </StyledPageContentWrapper>
          </Col>
          <Col xs={4}>
            <StyledInfoBarWrapper>
              <InfoBar />
            </StyledInfoBarWrapper>
          </Col>
        </Row>
      </Container>
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <WalletContextProvider>
        <TokenDataContextProvider>
          <BalancesContextProvider>
            {children}
          </BalancesContextProvider>
        </TokenDataContextProvider>
      </WalletContextProvider>
      <ToastContainer transition={Slide} position='bottom-left' closeOnClick theme='colored' />
    </>
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
    margin-left: 5.19rem;
`
const StyledInfoBarWrapper = styled.div`
    min-height: 100vh !important;
    width: 100vw;
    margin-right: -1rem;

`

export default App;
