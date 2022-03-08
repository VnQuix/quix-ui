import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { StyledTitle, StyledContentWrapper } from "views/Dashboard/Dashboard";
import { StyledTitle2 } from "views/Exchange/Exchange";
import { Row, Col } from "react-bootstrap";
import SaveCard from "components/SaveCard";
import useSave from 'hooks/useSave'
import aaveLogo from "assets/protocol/aave-logo.svg"
import useWallet from "hooks/useWallet";
import ethLogo from "assets/Token/eth-logo.png"


const Save: React.FC = () => {
    const [balanceUpdated, setBalanceUpdated] = useState<string>("0")
    const { balance, } = useSave()
    const { account, ethereum } = useWallet()


    useEffect(() => {
        if (account && ethereum) {
            setBalanceUpdated(balance)
        }
    }, [setBalanceUpdated, account, ethereum, balance])

    return (
        <div>
            <StyledTitle>Save</StyledTitle>
            <hr />
            <Row>
                <Col xs={8}>
                    <StyledTitle2>Deposit and Earn</StyledTitle2>
                    <StyledContentWrapper>
                        <h6>
                            <strong>
                                Earn interest by depositing your assets.
                            </strong>
                        </h6>
                    </StyledContentWrapper>
                </Col>
                <Col xs={4} className='pt-3'>
                    <StyledBalanceCol>
                        <img
                            alt=""
                            src={aaveLogo}
                            width="31"
                            height="31"
                            className="pt-0"
                        />{" "}&nbsp;&nbsp;
                        <h4><strong>Aave Balance:</strong></h4>
                    </StyledBalanceCol>
                    <StyledBalanceNumber>
                        {numbConversion(balanceUpdated)}&nbsp;&nbsp;
                        <img
                            alt=""
                            src={ethLogo}
                            width="23"
                            height="23"
                            style={{
                                marginBottom: '0.3rem'
                            }}
                        />{" "}
                    </StyledBalanceNumber>
                </Col>

            </Row>
            <hr />
            <Row className="pt-4">
                <Col>
                    <StyledContentWrapper>
                        <SaveCard />
                    </StyledContentWrapper>
                </Col>
            </Row>
        </div>
    );
};

const StyledBalanceCol = styled.div`
    display: flex;
    flex - direction: column;
`

const StyledBalanceNumber = styled.h4`
    font-weight: bold;
    text-align: right;
    margin-right: 3.6rem
`

function numbConversion(num: string) {
    try {
        const numLength = Number(num.length)
        const slice = numLength - 15

        return Number(num.slice(0, slice)) / 1000

    } catch (error) {
        console.log(error)
    }

}

export default Save;
