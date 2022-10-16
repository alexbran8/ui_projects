import React, { Suspense  } from 'react';

import { AppRouter } from "./AppRouter";
import './App.scss';
import './main.scss'
import './index.css';

function App() {
   
    return (
        <div className="App">
            <Suspense fallback="loading"><AppRouter /></Suspense>;
        </div>
    );
}

export default App;
