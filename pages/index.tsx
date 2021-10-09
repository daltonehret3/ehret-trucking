import React, { FC } from 'react';
import styled from 'styled-components';

import truck from '../assets/haulingTruck.jpg';

const StyledDiv = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
`;

const Home = () => {
    console.log(truck);
    
    return (
        <StyledDiv>
            <img 
                src= {'/_next/static/image/assets/haulingTruck.637192708b8469c5909452d7b0262336.jpg'}
                height='50%' width='50%'    
            />
        </StyledDiv>
    )
};

export default Home;