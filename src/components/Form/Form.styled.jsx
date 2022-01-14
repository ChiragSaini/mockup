import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Subheading = styled.p`
    color: #777;
    margin-top: 0.5rem;
`;

export const Label = styled.p`
    font-size: 0.9em;
    color: #333;
    margin-bottom: 0.5rem;
`;

export const Input = styled.input`
    width: ${props => props.width || '25rem'};
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    border-top-left-radius: ${props => props.noLeftBorderRadius && '0px'};
    border-bottom-left-radius: ${props => props.noLeftBorderRadius && '0px'};
    ::placeholder{
        color: #aaa;
    }

    :focus-visible{
        outline: none;
    }
    z-index: 10;
`;

export const InputContainer = styled.div`
    margin: 1rem 0rem;
`;

export const Button = styled.button`
    width: 25rem;
    border: none;
    color: #fff;
    background-color: #4d1bc3;
    padding: 1rem;
    border-radius: 10px;
`;

const InputPrefix = styled.span`
    background-color: #eee;
    color: #333;
    width: 10rem;
    border-radius: 10px;
    padding: 12px;
    height: 49px;
    margin-right: -0.5rem;
    border: 1px solid #ddd;
    z-index: 1;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputPrefixContainer =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputWithPrefix = () => {
    return (
        <InputPrefixContainer>
            <InputPrefix>www.eden.com/</InputPrefix>
            <Input noLeftBorderRadius width="15rem" placeholder='Example' />
        </InputPrefixContainer>
    )
}

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    /* width: 100%; */
`;

export const StyledLogo = styled.img`
    margin: 1rem;
    display: block;
`;

export const CardTitle = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 0.9rem;
`;

export const CardBody = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #aaa;
`;

export const Card = styled.div`
    margin: 1.5rem;
    border: 1px solid ${props => props.selected ? '#4d1bc3' : '#ddd'};
    height: 200px;
    border-radius: 10px;
    width: 25%;
    cursor: pointer;
    :hover{
        border-color: ${props => !props.selected ? '#4d1bc350' : '#4d1bc3'};
    }
    transition: border 0.3s ease;
`;

export const StyledTick = styled.p`
    height: 75px;
    width: 75px;
    color: #fff;
    background-color: #4d1bc3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;