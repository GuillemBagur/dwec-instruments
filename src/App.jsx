import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route exact path="/" element={<Home />} />

        <Route path="/search" element={<InstrumentSearch />} />
        <Route path="/add" element={<InstrumentAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
