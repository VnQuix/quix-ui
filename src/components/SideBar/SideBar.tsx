import React from "react";

import styled from "styled-components";

import { Container, Navbar } from "react-bootstrap";
import quixLogo from "assets/quix-logo.png";
import WalletButton from "components/WalletButton";
import ChainSelector from "components/ChainSelector";

import { AiFillHome } from "react-icons/ai";
import { FaExchangeAlt, FaPiggyBank } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import { Link } from 'react-router-dom'

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
                        />{" "}
                        &nbsp;
                        <strong> Quix</strong>
                    </Navbar.Brand>
                    <WalletButton />
                    <Link to={'/'} style={{ textDecoration: "none", color: "whitesmoke" }}>
                        <StyledText className="pt-5">
                            <AiFillHome fontSize="23px" style={{ marginRight: "1rem" }} />
                            <StyledHeading>Home</StyledHeading>
                        </StyledText>
                    </Link>

                    <Link to={"/exchange"} style={{ textDecoration: "none", color: "whitesmoke" }}>
                        <StyledText className="pt-3">
                            <FaExchangeAlt fontSize="23px" style={{ marginRight: "1rem" }} />
                            <StyledHeading>Exchange</StyledHeading>
                        </StyledText>
                    </Link>
                    <Link to={"/save"} style={{ textDecoration: "none", color: "whitesmoke" }}>
                        <StyledText className="pt-3">
                            <FaPiggyBank fontSize="23px" style={{ marginRight: "1rem" }} />
                            <StyledHeading>Save</StyledHeading>
                        </StyledText>
                    </Link>
                    <StyledFooter>
                        <span style={{ textDecoration: "none", color: "whitesmoke" }}>
                            <StyledText className="pt-3">
                                <StyledHeading>
                                    <ChainSelector />
                                </StyledHeading>
                            </StyledText>
                        </span>
                        <Link to={"/settings"} style={{ textDecoration: "none", color: "whitesmoke" }}>
                            <StyledText className="pt-3">
                                <IoIosSettings
                                    fontSize="23px"
                                    style={{ marginRight: "1rem" }}
                                />
                                <StyledHeading>Settings</StyledHeading>
                            </StyledText>
                        </Link>
                        <Link to={"/learnmore"} style={{ textDecoration: "none", color: "whitesmoke" }}>
                            <StyledText className="pt-3">
                                <HiDotsHorizontal
                                    fontSize="23px"
                                    style={{ marginRight: "1rem" }}
                                />
                                <StyledHeading>Learn More</StyledHeading>
                            </StyledText>
                        </Link>
                    </StyledFooter>
                </StyledSideBarContent>
            </StyledSideBar>
        </Container>
    );
};

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 9.7rem;
  min-height: 100vh !important;
  z-index: 100;
  padding: 24px 0 0;
  box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.3);
`;

const StyledSideBarContent = styled.div`
  margin-right: 0rem;
  display: flex;
  flex-direction: column;
  min-width: 12rem;
`;

const StyledHeading = styled.h6`
  font-weight: bold;
  margin-top: 0.2rem;
`;

const StyledText = styled.div`
  position: static;
  display: flex;
  margin-left: 0.2rem;
`;

const StyledFooter = styled.div`
  position: absolute;
  bottom: 5rem;
`;

export default SideBar;
