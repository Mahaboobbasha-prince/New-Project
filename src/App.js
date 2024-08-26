import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import OneBox from './components/OneBox';
import './styles.css'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className={isLoggedIn ? '' : 'container'}>
            {isLoggedIn ? <OneBox /> : <LoginPage onLogin={handleLogin} />}
        </div>
    );
}

export default App;