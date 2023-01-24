import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import './scss/main.scss';
import Login from "./components/home/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                {/*<Route path="/Loggedln" element={<Logging />} />*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

