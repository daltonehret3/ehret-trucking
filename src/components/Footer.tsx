import React from "react"
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #FF0000;
    margin: 0;
    display: flex;
    justify-content: space-between;
`;

const Footer = () => {
    return (
        <StyledDiv>
            <div>
                <h3>Materials Haulded</h3>
                <p>Gravel</p>
                <p>Sand</p>
                <p>Dirt</p>
                <p>Asphalt</p>
                <p>Recycled Concrete</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Cell: (641) 226-7708</p>
                <p>Email: dillon@ehretTrucking.com</p>
            </div>
        </StyledDiv>
    );
};

export default Footer;