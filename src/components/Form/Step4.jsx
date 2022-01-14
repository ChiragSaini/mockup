import React from 'react'
import { Container, Subheading, Button, StyledTick } from './Form.styled';
import { Check } from 'react-feather';

const Step3 = () => {
    return (
        <Container>
            <StyledTick>
                <Check color="white" size={48} />
            </StyledTick>
            <h1>
                Congratulations, Eren
            </h1>
            <Subheading>You have completed the onboarding, you can start using the Eden!</Subheading>
            <Button style={{
                marginTop: '1rem'
            }}>
                Launch Eden
            </Button>
        </Container>
    )
}

export default Step3
