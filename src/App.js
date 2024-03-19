import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact  path="/" element={<Home />}  />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/vendor_form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
