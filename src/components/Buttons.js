import styled from 'styled-components';
import { rgba } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { defaultTheme, typeScale, primaryFont, text } from '../utils';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.paragraph};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h2};
        padding: 16px 24px;
    `,
    warning: ({ theme }) => `
        background-color: ${theme.status.warningColor};
        color: ${text.inverted};

        &:hover, &:focus {
            color: ${theme.white};
            background-color: ${theme.status.warningColorHover};
            outline: 3px solid ${theme.status.warningColorHover};
        }

        $:active {
            background-color: ${theme.status.warningColorActive};
        }
    `,
    warningOutline: ({ theme }) => `
        border-color: ${theme.status.warningColor};
        color: ${theme.status.warningColor};

        &:hover {
            background-color: ${theme.status.warningColor};
            border-color: ${theme.status.warningColor};
        }

        &:focus {
            outline-color: ${theme.status.warningColor};
            background-color: ${theme.status.warningColor};
            border-color: ${theme.status.warningColor};
        }
    `,
    success: ({ theme }) => `
        background-color: ${theme.status.successColor};

        &:hover, &:focus {
            background-color: ${theme.status.successColorHover};
            color: ${theme.white};
        }

        &:focus {
            outline-color: ${theme.status.successColorHover};
        }
    `,
    successOutline: ({ theme }) => `
        border-color: ${theme.status.successColor};
        color: ${theme.status.successColor};

        &:hover {
            background-color: ${theme.status.successColor};
            border-color: ${theme.status.successColor};
        }

        &:focus {
            outline-color: ${theme.status.successColor};
            background-color: ${theme.status.successColor};
            border-color: ${theme.status.successColor};
        }
    `,
    error: ({ theme }) => `
    background-color: ${theme.status.errorColor};

    &:hover, &:focus {
        background-color: ${theme.status.errorColorHover};
        color: ${theme.white};
    }

    &:focus {
        outline-color: ${theme.status.errorColorHover};
    }
    `,
    errorOutline: ({ theme }) => `
    border-color: ${theme.status.errorColor};
    color: ${theme.status.errorColor};

    &:hover {
        background-color: ${theme.status.errorColor};
        border-color: ${theme.status.errorColor};
    }

    &:focus {
        outline-color: ${theme.status.errorColor};
        background-color: ${theme.status.errorColor};
        border-color: ${theme.status.errorColor};
    }
    `
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.h4};
    min-width: 100px;
    color: ${text.inverted};
    border: none;
    cursor: pointer;
    font-family: ${primaryFont};
    transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear;

    &:focus {
        outline: 3px solid ${({ theme }) => theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:disabled {
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;

        &:hover {
            background-color: ${props => props.theme.disabled};
            color: ${props => props.theme.textOnDisabled};
            cursor: not-allowed;
        }
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover, &:active, &:focus {
        background-color: ${({ theme }) => theme.primaryColorHover};
    }

    ${ applyStyleModifiers(BUTTON_MODIFIERS) }
`;

export const SecondaryButton = styled(Button)`
    background-color: ${({theme}) => theme.primaryColor};

    &:hover, &:active, &:focus {
        background-color: ${({theme}) => theme.primaryColorHover};
    }

    ${ applyStyleModifiers(BUTTON_MODIFIERS) }
`;

export const OutlineButton = styled(Button)`
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.primaryColor};

    &:hover, &:active, &:focus {
        color: ${text.inverted};
        background-color: ${({theme}) => theme.primaryColor};
        border-color: ${({theme}) => theme.primaryColor};
        
    }

    &:focus {
        outline-color: ${({theme}) => theme.primaryColor}
    }

    &:disabled {
        background-color: ${defaultTheme.white};
        border-color: ${ ({ theme }) => rgba(theme.primaryColor, 0.6) };
        color: ${ ({ theme }) => rgba(theme.primaryColor, 0.6) };
    }

    ${ applyStyleModifiers(BUTTON_MODIFIERS) }
`;