import "./App.css";
import Main from "./components/Main/Main.jsx";
import React from "react";
import "./styles/globals.css";
import { Route, Routes } from "react-router-dom";
import FirstDetail from "./components/Project/FirstDetail.jsx";

function App() {
    return (
        <div>
            {/* <Main /> */}
            <Routes>
                <Route path="/Portfolio" element={<Main />} />
                <Route path="/Portfolio/firstDetail" element={<FirstDetail />} />
            </Routes>
        </div>
    );
}

export default App;
