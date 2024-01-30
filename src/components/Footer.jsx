import React from "react";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="dark:text-white border-t-4 dark:border-dark border-light">
      <div className="flex flex-col items-center justify-center space-y-2 py-2">
        <p>{year} <sup className="text-[16px]">&#169;</sup> All rights reserved</p>
        <p>A creation of <a href="" target="_blank" className="underline dark:decoration-dark decoration-light">CodeLiterature</a></p>
        <ul>
          <li> <a> </a> </li>
          <li> <a> </a> </li>
          <li> <a> </a> </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
