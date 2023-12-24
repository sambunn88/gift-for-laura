import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './style.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/noPage";
import FlipCoin from "./pages/flipCoin";
import AddRes from "./pages/addRes";
import Choose from "./pages/choose";
import AddAct from "./pages/addAct";

export default function App() {

    return (
        <BrowserRouter basename={'/gift-for-laura'}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/coin" element={<FlipCoin />} />
                    <Route path="/addRestaurant" element={<AddRes />} />
                    <Route path="/addActivity" element={<AddAct />} />
                    <Route path="/choose" element={<Choose />} />
                    <Route path="*" element={<NoPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
