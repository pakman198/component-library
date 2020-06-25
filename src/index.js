import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton, OutlineButton } from './components/Buttons';
import { GlobalStyle } from './utils';

const Wrapper = styled.section`
    /* display: grid; */
    width: 600px;
    /* grid-template-columns: repeat(3, 1fr); */
    /* gap: 16px; */
`;

const App = () => {
    return (
        <main>
            <GlobalStyle />
            <Wrapper>
                <PrimaryButton modifiers={['small', 'error']}>Hello World</PrimaryButton>
                <SecondaryButton modifiers={['large', 'error']}>Hello World</SecondaryButton>
                <OutlineButton modifiers={['errorOutline']}>Hello World</OutlineButton>
            </Wrapper>
        </main>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));