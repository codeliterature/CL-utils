import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Parameter from "./Parameter";

const Home = () => {
  const chartRef = useRef(null);
  const link = useRef(null);
  const [title, setTitle] = useState("My Chart");
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: ["rgb(75,192,192)"],
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
      },
      legend: {
        display: false,
      },
    },
  });

  useEffect(() => {
    setChartData((prevChartData) => ({
      ...prevChartData,
      labels: data[0],
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: data[1],
        },
      ],
    }));
  }, [data]);

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      plugins: {
        ...prevOptions.plugins,
        title: {
          ...prevOptions.plugins.title,
          text: title,
        },
      },
    }));
  }, [title]);

  const getData = (arr1, arr2) => {
    setData([arr1, arr2]);
  };

  const getTitle = (val) => {
    setTitle(val);
  };

  const resetData = (arr1, arr2) => {
    setData([arr1, arr2]);
  };

  const handleDownload = () => {
    let canvas = chartRef.current.canvas;
    let url = canvas.toDataURL("image/jpeg");

    link.current.download = "Chart.jpg";
    link.current.href = url;
  };

  return (
    <div className="min-h-screen">
      <Parameter getData={getData} resetData={resetData} getTitle={getTitle} />
      <Bar ref={chartRef} data={chartData} options={chartOptions} />

      <a
        ref={link}
        onClick={handleDownload}
        className="bg-light dark:bg-dark px-4 py-2 text-white dark:text-black mt-2  w-[95%] m-auto text-center rounded cursor-pointer block"
      >
        Download
      </a>
    </div>
  );
};

export default Home;
