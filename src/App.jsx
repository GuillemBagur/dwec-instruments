import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import InstrumentSearch from "./pages/InstrumentSearch/InstrumentSearch";

import "./App.css";
import InstrumentAdd from "./pages/InstrumentAdd/InstrumentAdd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/search" element={<InstrumentSearch />} />
        <Route path="/add" element={<InstrumentAdd />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
