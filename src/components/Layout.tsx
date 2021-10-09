import React, { Component } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import {HeaderComponent} from "./HeaderComponent";

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
`;

type ILayout = {
    children: any
}

const Layout = ({children}: ILayout) => {
    return (
        <StyledDiv>
            <HeaderComponent />
            <main>{children}</main>
            <Footer></Footer>
        </StyledDiv>
    );
};

export default Layout;