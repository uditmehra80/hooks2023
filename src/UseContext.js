// ---------UseContext Context API: 
// With the context API you can specify certain pieces of data that will 
// be available to all components nested inside the context with no need to pass this 
// data through each component.

import './App.css';
import React, { useState, createContext } from 'react';
import FunctionContext from './components/FunctionContext';
import ClassContext from './components/ClassContext';
import { BlogViewProvider } from './components/context';
import BlogBtn from './components/BlogBtn';

export const ThemeContext = createContext();

function App() {
    const [darkTheme, setDarktheme] = useState(true);

    function toggleTheme() {
        setDarktheme(prev => !prev)
    }
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle theme</button>
                <FunctionContext />
                {/* <ClassContext /> */}
            </ThemeContext.Provider>

            <BlogViewProvider>
                <BlogBtn />
            </BlogViewProvider>
        </>
    );
}

export default App;
