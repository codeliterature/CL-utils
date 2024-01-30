import React, { useState, useEffect } from 'react';
import Header from "./components/header";
import Home from "./components/Home";
import Graph from "./components/Graph";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [isDark, setTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []); 

  function changeTheme(val) {
    setTheme(val);
    localStorage.setItem('theme', val ? 'dark' : 'light');
  }

  return (
    <Router>
      <main className={isDark ? "dark" : ""}>
        <div className="font-Custom dark:bg-primary">
          <Header changeTheme={changeTheme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/graph" element={<Graph />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  )
}

export default App;
