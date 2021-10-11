import React from "react"
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #FF0000;
    margin: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
`;

const Footer = () => {
    return (
        <StyledDiv>
            <div>
                <h3>Materials Hauled</h3>
                <p>Gravel</p>
                <p>Sand</p>
                <p>Dirt</p>
                <p>Asphalt</p>
                <p>Recycled Concrete</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p><strong>Cell:</strong> (641) 226-7708</p>
                <p><strong>Email:</strong> dillon@ehretTrucking.com</p>
            </div>
        </StyledDiv>
    );
};

export default Footer;