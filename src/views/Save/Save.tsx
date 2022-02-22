import React from "react";

import { StyledTitle, StyledContentWrapper } from "views/Dashboard/Dashboard";
import { StyledTitle2 } from "views/Exchange/Exchange";
import { Row, Col } from "react-bootstrap";
import SaveCard from "components/SaveCard";

const Save: React.FC = () => {
    return (
        <div>
            <StyledTitle>Save</StyledTitle>
            <hr />
            <Row>
                <StyledTitle2>Deposit and Earn</StyledTitle2>
                <StyledContentWrapper>
                    <h6>
                        <strong>
                            Earn interest by depositing your assets.
                        </strong>
                    </h6>
                </StyledContentWrapper>
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

export default Save;
