
import React, { useEffect } from 'react';

import styled from 'styled-components'

import Dashboard from 'views/Dashboard';
import Exchange from 'views/Exchange';
import Pool from 'views/Pool';
import Save from 'views/Save';

import SideBar from 'components/SideBar'
import InfoBar from 'components/InfoBar';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap"
import { WalletContextProvider } from 'contexts/Wallet';
import { TokenDataContextProvider } from 'contexts/TokenData';
import { BalancesContextProvider } from 'contexts/Balances';
import { ChainDataContextProvider } from 'contexts/ChainData';
import { TransactionWatcherContextProvider } from 'contexts/TransactionWatcher';
import { SaveContextProvider } from 'contexts/Save';
import { UniswapInteractorContextProvider } from 'contexts/UniswapInteractor';
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
    <Router>
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
                <Switch>
                  <Route path='/' component={Dashboard} exact />
                  <Route path='/exchange' component={Exchange} />
                  <Route path='/pool' component={Pool} />
                  <Route path='/save' component={Save} />
                </Switch>
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
    </Router>
  );
}

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <TransactionWatcherContextProvider>
        <WalletContextProvider>
          <ChainDataContextProvider>
            <TokenDataContextProvider>
              <BalancesContextProvider>
                <UniswapInteractorContextProvider>
                  <SaveContextProvider>
                    {children}
                  </SaveContextProvider>
                </UniswapInteractorContextProvider>
              </BalancesContextProvider>
            </TokenDataContextProvider>
          </ChainDataContextProvider>
        </WalletContextProvider>
      </TransactionWatcherContextProvider>
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
