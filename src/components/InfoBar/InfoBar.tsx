import React, { useEffect } from "react";

import styled from "styled-components";

import { Container, Card, Row, Col } from "react-bootstrap";

import btcLogo from "assets/Token/btc-logo.svg";
import ethLogo from "assets/Token/eth-logo.png";
import adaLogo from "assets/Token/ada-logo.svg";
import solLogo from "assets/Token/sol-logo.png";
import avaxLogo from "assets/Token/avax-logo.png";

import useTokenData from "hooks/useTokenData";

const InfoBar: React.FC = () => {
    const { infoBarTokens } = useTokenData()

    useEffect(() => {
        console.log(infoBarTokens)
    }, [infoBarTokens])

    return (
        <Container>
            <StyledInfoBar className="pt-4">
                <StyledInfoBarContent>
                    <Card style={{ minWidth: "21rem", color: "whitesmoke" }}>
                        <Card.Header style={{ fontWeight: "bold" }}>
                            Token Watchlist
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={1}>
                                    {" "}
                                    <img
                                        alt=""
                                        src={btcLogo}
                                        width="27"
                                        height="27"
                                        className="pt-0"
                                    />{" "}
                                </Col>
                                <Col xs={3}><StyledToken>BTC</StyledToken></Col>
                                <Col xs={7} style={{ marginLeft: '1.4rem', textAlign: 'right' }}>$00.000 (+0.00%)</Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    {" "}
                                    <img
                                        alt=""
                                        src={ethLogo}
                                        width="27"
                                        height="27"
                                        className="pt-0"
                                    />{" "}
                                </Col>
                                <Col xs={3}><StyledToken>ETH</StyledToken></Col>
                                <Col xs={7} style={{ marginLeft: '1.4rem', textAlign: 'right' }}>$00.000 (+0.00%)</Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    {" "}
                                    <img
                                        alt=""
                                        src={adaLogo}
                                        width="27"
                                        height="27"
                                        className="pt-0"
                                    />{" "}
                                </Col>
                                <Col xs={3}><StyledToken>ADA</StyledToken></Col>
                                <Col xs={7} style={{ marginLeft: '1.4rem', textAlign: 'right' }}>$00.000 (+0.00%)</Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    {" "}
                                    <img
                                        alt=""
                                        src={solLogo}
                                        width="27"
                                        height="27"
                                        className="pt-0"
                                    />{" "}
                                </Col>
                                <Col xs={3}><StyledToken>SOL</StyledToken></Col>
                                <Col xs={7} style={{ marginLeft: '1.4rem', textAlign: 'right' }}>$00.000 (+0.00%)</Col>
                            </Row>
                            <Row>
                                <Col xs={1}>
                                    {" "}
                                    <img
                                        alt=""
                                        src={avaxLogo}
                                        width="27"
                                        height="27"
                                        className="pt-0"
                                    />{" "}
                                </Col>
                                <Col xs={3}><StyledToken>AVAX</StyledToken></Col>
                                <Col xs={7} style={{ marginLeft: '1.4rem', textAlign: 'right' }}>$00.000 (+0.00%)</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </StyledInfoBarContent>
            </StyledInfoBar>
        </Container>
    );
};

const StyledInfoBar = styled.div`
  position: fixed;
  right: 15.15rem;
  min-height: 100vh !important;
  z-index: 100;
  padding: 24px 0 0;
  box-shadow: rgba(255, 255, 255, 0.3) -1px 0 0;
`;

const StyledInfoBarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  max-width: 10rem;
`;

const StyledToken = styled.p`
  font-weight: bold;
  font-size: 1.05rem;
  margin-left: 0.8rem;
`;

export default InfoBar;
