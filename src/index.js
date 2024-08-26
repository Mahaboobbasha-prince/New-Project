// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles.css';

// function App() {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const toggleTheme = () => {
//         setIsDarkMode((prevMode) => !prevMode);
//         document.body.classList.toggle('dark-mode', !isDarkMode);
//     };

//     return (
//         <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
//             <button className="theme-toggle" onClick={toggleTheme}>
//                 {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//             {/* Your other components */}
//         </div>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));