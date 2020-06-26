import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { SignUpModal } from './components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const styles = {
        backgroundColor: useDarkTheme ? defaultTheme.primaryColor : defaultTheme.disabled,
        width: '100vw',
        height: '90vh',
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
                <button 
                    style={{ margin: "0 16px 24px", padding: "8px", background: 'none'}} 
                    onClick={() => setShowModal(!showModal)}
                >
                    Toggle Modal
                </button>
                <div style={styles}>
                    <SignUpModal showModal={showModal} toggleModal={setShowModal} />
                </div>
            
            <GlobalStyle />
        </ThemeProvider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));