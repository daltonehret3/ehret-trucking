import React from "react";
import styled from "styled-components";

import { H2 } from "../../styles/headerStyles"
import { COMPANY_NAME } from "../constants/companyName";
import {NavBar} from "./NavBar";

const StyledDiv = styled.div`
    background-color: #FF0000;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HeaderComponent = () => {
    return (
        <StyledDiv>
            <div style={{justifyContent: 'center', display: 'flex'}}>
                <h1>{COMPANY_NAME}</h1>
            </div>
            <NavBar />
        </StyledDiv>
    );
};