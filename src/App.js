import "./App.css";
import Main from "./components/Main/Main.jsx";
import React from "react";
import "./styles/globals.css";
import { Route, Routes } from "react-router-dom";
import FirstDetail from "./components/Project/ProjectFirstSection/FirstDetail.jsx";
import SecondDetail from "./components/Project/ProjectSecondSection/SecondDetail.jsx";
import ThirdDetail from "./components/Project/ProjectThirdSection/ThirdDetail.jsx";

function App() {
    return (
        <div>
            {/* <Main /> */}
            <Routes>
                <Route path="/Portfolio" element={<Main />} />
                <Route path="/Portfolio/firstDetail" element={<FirstDetail />} />
                <Route path="/Portfolio/secondDetail" element={<SecondDetail />} />
                <Route path="/Portfolio/thirdDetail" element={<ThirdDetail />} />
            </Routes>
        </div>
    );
}

export default App;
