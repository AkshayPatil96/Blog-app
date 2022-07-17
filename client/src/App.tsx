import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageRender from "./PageRender";

const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={""} />
                    <Route path="/:page" element={""} />
                    <Route path="/:page/:slug" element={""} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
