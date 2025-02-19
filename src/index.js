import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import { HashRouter as Router } from "react-router-dom";
// import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <Router> */}
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        {/* <HashRouter> */}
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
        {/* </HashRouter> */}
        {/* </Router> */}
        {/* </BrowserRouter> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
