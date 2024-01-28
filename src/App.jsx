import React, {useState} from 'react';
import Header from "./components/header";
import Home from "./components/Home"
const App = () => {
  const [isDark, setTheme] = useState(true);

  function changeTheme(val) {
    setTheme(val);
  }
  
  return (
    <main className={isDark ? "dark" : ""}>
    <div className="font-Custom dark:bg-primary">
    <Header
      changeTheme={changeTheme}/>
    <Home />
    </div>
      </main>
  )
}

export default App;