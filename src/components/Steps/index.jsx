import React from 'react'
import styled from 'styled-components';

const StepsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25rem;
    margin-top: 2rem;
`;

const StepCounter = styled.div`
    color: ${props => props.active === true ? '#fff' : '#333'};
    background-color: ${props => props.active === true ? '#4d1bc3' : "#FFF"};
    border-radius: 50%;
    border: ${props => !props.active ? '#555' : 'none'};
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const Line = styled.div`
    border: 1px solid #4d1bc3;
    width: ${props => props.step*6.25}rem;
    position: absolute;
    top: 70%;
`;

const Container = styled.div`
    position: relative;
`;

const Steps = ({ stepActive }) => {
    return (
        <Container>
            <StepsContainer>
                <StepCounter active={stepActive >= 1}>1</StepCounter>
                <StepCounter active={stepActive >= 2}>2</StepCounter>
                <StepCounter active={stepActive >= 3}>3</StepCounter>
                <StepCounter active={stepActive >= 4}>4</StepCounter>
            </StepsContainer>
            <Line step={stepActive} />
        </Container>
    )
}

export default Steps
