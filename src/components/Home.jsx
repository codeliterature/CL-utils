import React from "react";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <div className="dark:text-white min-h-[80vh] flex flex-col space-y-4">
      <div className="flex flex-col items-center p-4 space-y-4 m-2">
        <h1 className="dark:text-dark text-light text-4xl font-bold tracking-wider">
          CL Utils
        </h1>
        <p className="text-lg text-justify">
          Welcome to our utility tools site, where you'll discover a suite of
          helpful resources. Explore interactive graphs for visualizing data,
          utilize our efficient currency exchange tool, and access a variety of
          other practical utilities designed to simplify your financial and
          analytical needs.
        </p>
      </div>

      <div>
        <h2 className="text-center text-3xl text-light dark:text-dark font-bold tracking-wider">Tools Available</h2>
        <div>
          <Carousel />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
