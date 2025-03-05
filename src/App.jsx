import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import InstrumentSearch from "./pages/InstrumentSearch/InstrumentSearch";

import "./App.css";
import InstrumentEditor from "./pages/InstrumentEditor/InstrumentEditor";
import InstrumentGet from "./pages/InstrumentGet/InstrumentGet";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/search" element={<InstrumentSearch />} />
        <Route path="/instrument/:instrumentId" element={<InstrumentGet />} />
        <Route path="/editor/:instrumentId?" element={<InstrumentEditor />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
