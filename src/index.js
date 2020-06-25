import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { PrimaryButton, SecondaryButton, OutlineButton } from './components/Buttons';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState();

    const styles = {
        backgroundColor: useDarkTheme ? defaultTheme.primaryColor : defaultTheme.disabled,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme }>
            
                <button 
                    style={{ margin: "0 16px 24px", padding: "8px", background: 'none'}} 
                    onClick={() => setUseDarkTheme(true)}
                >
                    Dark Theme
                </button>
                <button 
                    style={{ margin: "0 16px 24px", padding: "8px", background: 'none'}} 
                    onClick={() => setUseDarkTheme(false)}
                >
                    Default Theme
                </button>
                <div style={styles}>
                    <PrimaryButton modifiers={[]}>Hello World</PrimaryButton>
                    <SecondaryButton modifiers={[]}>Hello World</SecondaryButton>
                    <OutlineButton modifiers={[]}>Hello World</OutlineButton>
                </div>
            
            <GlobalStyle />
        </ThemeProvider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));