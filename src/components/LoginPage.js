import React from 'react';

function LoginPage({ onLogin }) {
    const handleGoogleLogin = () => {
        // Simulate Google Login
        onLogin();
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
}

export default LoginPage;