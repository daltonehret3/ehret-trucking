import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;
`;

const StyledH3 = styled.h3`
    margin: 8px;
    text-align: center;
`;

export const WebsiteComingSoon = () => (
    <StyledDiv>
        <div style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 style={{paddingBottom: '8px'}}>
                {'Website Coming Soon!'}
            </h1>
            <StyledH3>
                {'Feel free to contact me at: '}
                <a
                    style={{color: 'white'}}
                    href={'mailto: dillon@ehrettrucking.com'}
                >
                    {'dillon@ehrettrucking.com'}
                </a>
            </StyledH3>
        </div>
    </StyledDiv>
);