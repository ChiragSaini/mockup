import React, {useState} from 'react'
import { Container, Subheading, Button, CardsContainer, Card, StyledLogo, CardBody, CardTitle } from './Form.styled';
import logo from '../../logo.svg';

const Step3 = ({ onClick }) => {
    const [selected, setSelected] = useState(null)
    return (
        <Container>
            <h1>
                How are you planning to use Eden?
            </h1>
            <Subheading>We'll streamline your experience accordingly</Subheading>
            <CardsContainer>
                <Card selected={selected === 'myself'} onClick={() => setSelected('myself')}>
                    <StyledLogo src={logo} height="40px" />
                    <CardTitle>
                        For Myself
                    </CardTitle>
                    <CardBody>
                        Write Better. Think more clearly. Stay organized.
                    </CardBody>
                </Card>
                <Card selected={selected === 'team'} onClick={() => setSelected('team')}>
                    <StyledLogo src={logo} height="40px" />
                    <CardTitle>
                        With my team
                    </CardTitle>
                    <CardBody>
                        Wikis, docs, tasks & projects, all in one place.
                    </CardBody>
                </Card>
            </CardsContainer>
            <Button onClick={onClick}>
                Create Workspace
            </Button>
        </Container>
    )
}

export default Step3
