import './App.css';
import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";



const Lazy = lazy(() => import('./Lazy'));
const UseCallback = lazy(() => import('./UseCallback'));
const UseContext = lazy(() => import('./UseContext'));
const UseDeferredValue = lazy(() => import('./UseDeferredValue'));
const UseMemo = lazy(() => import('./UseMemo'));
const UseReducer = lazy(() => import('./UseReducer'));
const UseRef = lazy(() => import('./UseRef'));
const UseRef2 = lazy(() => import('./UseRef2'));
const UseTransition = lazy(() => import('./UseTransition'));
const UseLayoutEffect = lazy(() => import('./UseLayoutEffect'));



function App() {
    return (
        <div className="App">
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', boxShadow: '1px 1px 5px 1px gray' }}>
                <a href="http://localhost:3000">Lazy</a>
                <a href="http://localhost:3000/use-Callback">UseCallback</a>
                <a href="http://localhost:3000/use-Context">UseContext</a>
                <a href="http://localhost:3000/use-UseDeferredValue">UseDeferredValue</a>
                <a href="http://localhost:3000/use-Memo">UseMemo</a>
                <a href="http://localhost:3000/use-Reducer">UseReducer</a>
                <a href="http://localhost:3000/use-Ref">UseRef</a>
                <a href="http://localhost:3000/use-Ref-2">UseRef2</a>
                <a href="http://localhost:3000/use-Transition">UseTransition</a>
                <a href="http://localhost:3000/use-LayoutEffect">UseLayoutEffect</a>

            </div>

            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Lazy />} />
                        <Route path="/use-Callback" element={<UseCallback />} />
                        <Route path="/use-Context" element={<UseContext />} />
                        <Route path="/use-UseDeferredValue" element={<UseDeferredValue />} />
                        <Route path="/use-Memo" element={<UseMemo />} />
                        <Route path="/use-Reducer" element={<UseReducer />} />
                        <Route path="/use-Ref" element={<UseRef />} />
                        <Route path="/use-Ref-2" element={<UseRef2 />} />
                        <Route path="/use-Transition" element={<UseTransition />} />
                        <Route path="/use-LayoutEffect" element={<UseLayoutEffect />} />

                    </Routes>
                </Suspense>
            </BrowserRouter>

        </div>
    );
}

export default App;
