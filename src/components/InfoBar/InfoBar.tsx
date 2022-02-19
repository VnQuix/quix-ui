import React, { useEffect } from "react";

import styled from "styled-components";

import { Container, Card, Row, Col } from "react-bootstrap";
import useTokenData from "hooks/useTokenData";

const InfoBar: React.FC = () => {
    const { infoBarTokens } = useTokenData()

    return (
        <Container>
            <StyledInfoBar className="pt-4">
                <StyledInfoBarContent>
                    <Card style={{ minWidth: "21rem", color: "whitesmoke" }}>
                        <Card.Header style={{ fontWeight: "bold" }}>
                            Token Watchlist
                        </Card.Header>
                        <Card.Body>
                            {infoBarTokens?.map((data) => (
                                <Row>
                                    <Col xs={1}>
                                        {" "}
                                        <img
                                            alt=""
                                            src={data.image}
                                            width="27"
                                            height="27"
                                            className="pt-0"
                                        />{" "}
                                    </Col>
                                    <Col xs={3}><StyledToken>{data.symbol}</StyledToken></Col>
                                    <Col xs={7} style={{ marginLeft: '1.4rem', textAlign: 'right' }}>{currencyFormat(Number(data.priceUsd))}</Col>
                                </Row>
                            ))}
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

function currencyFormat(num: number) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default InfoBar;
