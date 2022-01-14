import React, { useState } from 'react'
import styled from 'styled-components'
import Step1 from './components/Form/Step1';
import Step2 from './components/Form/Step2';
import Step3 from './components/Form/Step3';
import Step4 from './components/Form/Step4';
import Logo from './components/Logo';
import Steps from './components/Steps';

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const App = () => {
    const [stepActive, setStepActive] = useState(1);

    const incrementStepCount = () => setStepActive(prevValue => prevValue+1);

    return (
        <Container>
            <Logo />
            <Steps stepActive={stepActive} />
            {
                stepActive === 1 && (
                    <Step1 onClick={incrementStepCount} />
                )
            }
            {stepActive === 2 && (
                <Step2 onClick={incrementStepCount} />
            )}
            {
                stepActive === 3 && (
                    <Step3 onClick={incrementStepCount} />
                )
            }
            {
                stepActive === 4 && (
                    <Step4 />
                )
            }
        </Container>
    )
}

export default App
