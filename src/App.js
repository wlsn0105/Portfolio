import "./App.css";
import Index from "./pages/index.jsx";
import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FirstDetail from "./components/Project/FirstDetail.jsx";

function App() {
    return (
        <div>
            <Index />
            {/* <Router>
                <Routes>
                    <Route path="/firstDetail" element={<FirstDetail />} />
                </Routes>
            </Router> */}
        </div>
    );
}

export default App;
