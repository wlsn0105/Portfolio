import "./App.css";
import Main from "./components/Main/Main.jsx";
import React from "react";
import "./styles/globals.css";
import { Route, Routes } from "react-router-dom";
import FirstDetail from "./components/Project/ProjectFirstSection/FirstDetail.jsx";
import SecondDetail from "./components/Project/ProjectSecondSection/SecondDetail.jsx";
import ThirdDetail from "./components/Project/ProjectThirdSection/ThirdDetail.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div>
            {/* <Main /> */}
            <Router>
                <Routes>
                    <Route path="/MyPortfolio" element={<Main />} />
                    <Route path="/MyPortfolio/firstDetail" element={<FirstDetail />} />
                    <Route path="/MyPortfolio/secondDetail" element={<SecondDetail />} />
                    <Route path="/MyPortfolio/thirdDetail" element={<ThirdDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
