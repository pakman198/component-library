import styled from 'styled-components';
import { rgba } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

import { defaultTheme, neutral, typeScale, primaryFont, text } from '../utils';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.paragraph};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h2};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${text.inverted};

        &:hover, &:focus {
            color: ${defaultTheme.white};
            background-color: ${defaultTheme.status.warningColorHover};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
        }

        $:active {
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    warningOutline: () => `
        background-color: ${defaultTheme.white};
        border-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.status.warningColor};

        &:hover {
            background-color: ${defaultTheme.status.warningColor};
            border-color: ${defaultTheme.status.warningColor};
        }

        &:focus {
            outline-color: ${defaultTheme.status.warningColor};
            background-color: ${defaultTheme.status.warningColor};
            border-color: ${defaultTheme.status.warningColor};
        }
    `,
    success: () => `
        background-color: ${defaultTheme.status.successColor};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.successColorHover};
            color: ${defaultTheme.white};
        }

        &:focus {
            outline-color: ${defaultTheme.status.successColorHover};
        }
    `,
    successOutline: () => `
        background-color: ${defaultTheme.white};
        border-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.status.successColor};

        &:hover {
            background-color: ${defaultTheme.status.successColor};
            border-color: ${defaultTheme.status.successColor};
        }

        &:focus {
            outline-color: ${defaultTheme.status.successColor};
            background-color: ${defaultTheme.status.successColor};
            border-color: ${defaultTheme.status.successColor};
        }
    `,
    error: () => `
    background-color: ${defaultTheme.status.errorColor};

    &:hover, &:focus {
        background-color: ${defaultTheme.status.errorColorHover};
        color: ${defaultTheme.white};
    }

    &:focus {
        outline-color: ${defaultTheme.status.errorColorHover};
    }
    `,
    errorOutline: () => `
    background-color: ${defaultTheme.white};
    border-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.status.errorColor};

    &:hover {
        background-color: ${defaultTheme.status.errorColor};
        border-color: ${defaultTheme.status.errorColor};
    }

    &:focus {
        outline-color: ${defaultTheme.status.errorColor};
        background-color: ${defaultTheme.status.errorColor};
        border-color: ${defaultTheme.status.errorColor};
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
        outline: 3px solid ${defaultTheme.primaryColor};
        outline-offset: 2px;
    }

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:hover, &:active, &:focus {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.primaryColor};
    }

    ${ applyStyleModifiers(BUTTON_MODIFIERS) }
`;

export const SecondaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};

    &:hover, &:active, &:focus {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.primaryColor};
    }

    ${ applyStyleModifiers(BUTTON_MODIFIERS) }
`;

export const OutlineButton = styled(Button)`
    background-color: ${neutral[100]};
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:hover, &:active, &:focus {
        color: ${text.inverted};
        background-color: ${defaultTheme.primaryColor};
        border-color: ${defaultTheme.primaryColor};
        
    }

    &:disabled {
        background-color: ${defaultTheme.white};
        border-color: ${ rgba(defaultTheme.primaryColor, 0.6) };
        color: ${ rgba(defaultTheme.primaryColor, 0.6) };
    }

    ${ applyStyleModifiers(BUTTON_MODIFIERS) }
`;