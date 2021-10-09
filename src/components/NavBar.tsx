import { Router, useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
`;

const H3 = styled.h3`
    width: 100%;
    cursor: pointer;
    padding: 24px;
    margin: 0;
    text-align: center;
    
    :hover {
        background-color:  	#8B0000;
    }
`;

export const NavBar = () => {
    const router = useRouter();
    
    return (
        <StyledDiv>
            <Link href='/'>
                <H3>Home</H3>
            </Link>
            <Link href='/about'>
                <H3>About</H3>
            </Link>
            <H3>Trucking</H3>
        </StyledDiv>
    );
};

// export default NavBar;