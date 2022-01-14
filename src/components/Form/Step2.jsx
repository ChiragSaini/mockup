import React from 'react'
import { Container, Subheading, Label, InputContainer, Input, Button, InputWithPrefix } from './Form.styled';

const Step2 = ({ onClick }) => {
    return (
        <Container>
            <h1>
                Let's set up a home for all your work
            </h1>
            <Subheading>You can always create another workspace later.</Subheading>
            <InputContainer>
                <Label>Workspace Name</Label>
                <Input placeholder='Eden' />
            </InputContainer>
            <InputContainer>
                <Label>Workspace URL (optional)</Label>
                <InputWithPrefix placeholder='Steve' />
            </InputContainer>
            <Button onClick={onClick}>
                Create Workspace
            </Button>
        </Container>
    )
}

export default Step2
