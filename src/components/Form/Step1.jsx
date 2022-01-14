import React from 'react'
import { Container, Subheading, Label, InputContainer, Input, Button } from './Form.styled';

const Step1 = ({ onClick }) => {
    return (
        <Container>
            <h1>
                Welcome! First Things first...
            </h1>
            <Subheading>You can always change them later</Subheading>
            <InputContainer>
                <Label>Full Name</Label>
                <Input placeholder='Steve Jobs' />
            </InputContainer>
            <InputContainer>
                <Label>Display Name</Label>
                <Input placeholder='Steve' />
            </InputContainer>
            <Button onClick={onClick}>
                Create Workspace
            </Button>
        </Container>
    )
}

export default Step1
