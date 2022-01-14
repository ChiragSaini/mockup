import React from 'react'
import styled from 'styled-components';
import logo from '../../logo.svg'

const StyledHeading = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = () => {
    return (
        <StyledHeading>
            <img src={logo} height="40px" />
            Eden
        </StyledHeading>
    )
}

export default Logo
