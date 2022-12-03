// ---------Lazy : 
//its for lazy loading of components
//The React.lazy function lets you render a dynamic import as a regular component.

// ---------Suspense:
// for allows us to show some fallback content (such as a loading indicator)
// while we’re waiting for the lazy component to load.

import './App.css';
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import MyCompo from './components/MyCompo';
// import MyCompo2 from './components/MyCompo2';


const MyCompo = lazy(() => import('./components/MyCompo'));
const MyCompo2 = lazy(() => import('./components/MyCompo2'));


function App() {
  console.log('app.js')

  return (
    <div className="App">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <MyCompo />
        <MyCompo2 />
      </Suspense>
      hello app */}
      {/* <MyCompo />
      <MyCompo2 /> */}
      <h5>hey lazy</h5>

      {/* <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/2" element={<MyCompo2 />} />
          </Routes>
        </Suspense>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
