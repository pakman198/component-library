import React from 'react';
import styled from 'styled-components';

import { typeScale } from '../utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
    width: 800px;
    height: 580px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.formInputBackground};
    color: ${({ theme }) => theme.formInputText};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 2px;
`;

const SignupHeader = styled.h3`
    font-size: ${typeScale.h1};
`;

const SignupText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`;

const CloseButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`;

const HeroImage = styled.img`
    width: 50%;
    margin-top: 40px;
`;


export const SignUpModal = () => {
    return (
        <ModalWrapper>
            <HeroImage src={Illustrations.Signup} aria-hidden="true" />
            <SignupHeader>Sign Up</SignupHeader>
            <SignupText>
                Sign up today to get access!
            </SignupText>
            <PrimaryButton>Sign Up!</PrimaryButton>
            <CloseButton aria-label="Close modal">
                <CloseIcon />
            </CloseButton>
        </ModalWrapper>
    )
}