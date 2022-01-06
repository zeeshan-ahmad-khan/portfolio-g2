import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Components/Projects'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
