import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from "framer-motion";




const Header = ({changeTheme}) => {
  const [isOpen, setState] = useState(false);
 const [isDark, setDark] = useState(false)
  const setTheme = () => {
    setDark(!isDark)
    changeTheme(isDark)
  }
  return (
    <nav className="py-2">
      <div className="flex justify-between items-center px-2">
        <h1 className="font-bold tracking-wider text-2xl text-light dark:text-dark">CL Utility Tools</h1>
        
        <motion.button className="text-2xl dark:text-white" onClick={() => {
          setState(!isOpen)
        }}>
        {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isOpen && <motion.div
        initial={{ x: -100 , opacity: 0}}
        animate={{x: 0, opacity: 1}}
                   exit={{x: -100 , opacity: 0}}
                     transition={{ease: "easeIn",duration: 0.1}}
        className="fixed top-0 left-0 dark:bg-primary w-[60%] min-h-screen bg-white flex justify-center pt-4"
      >
        <ul className="text-xl dark:text-white space-y-2">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <button onClick={setTheme}>{isDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}</button>
        </ul>
      </motion.div>}
    </AnimatePresence>
    </nav>
  );
};

export default Header;
