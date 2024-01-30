import React, { useState, useEffect, useRef } from "react";
import {motion, AnimatePresence} from "framer-motion";
import { Bar, Line, Pie, Doughnut} from "react-chartjs-2";
import "chart.js/auto";
import Parameter from "./Parameter";
import {getRandomColors} from 'get-random-colors';

const Graph = () => {
  const chartRef = useRef(null);
  const link = useRef(null);
  const [title, setTitle] = useState("My Chart");
  const [data, setData] = useState([]);
  const [chart, showChart] = useState(false);
  const [chartName, setChartName] = useState("Bar");
  const [colors, setColors] = useState([]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: colors,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
          hoverBorderColor: colors, 
        borderWidth: 1,
        hoverOffset: 30
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
        display: true,
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
          borderColor: colors,
          backgroundColor: colors,
          hoverBackgroundColor: colors,
            hoverBorderColor: colors,
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

  const getData = (arr1, arr2, val, name) => {
    setData([arr1, arr2]);
    showChart(val)
    setChartName(name)
    const bgColors =  getRandomColors(80, arr2.length);
    setColors(bgColors.rgbColorLists);
    console.log(bgColors, colors)
  };

  const getTitle = (val) => {
    setTitle(val);
  };

  const resetData = (arr1, arr2, val) => {
    setData([arr1, arr2]);
    showChart(val)
  };

  const handleDownload = () => {
    let canvas = chartRef.current.canvas;
    let url = canvas.toDataURL("image/jpeg");

    link.current.download = "Chart.jpg";
    link.current.href = url;
  };

  

  return (
    <div className="min-h-[90vh]">
      <Parameter getData={getData} resetData={resetData} getTitle={getTitle} />
      <AnimatePresence>
      {chart && (
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.25, ease:"easeIn"}}
          exit={{scale: 0}}
        >
            {chartName === "Bar" && (
              <Bar ref={chartRef} data={chartData} options={chartOptions} />
            )}

            {chartName === "Line" && (
              <Line ref={chartRef} data={chartData} options={chartOptions} />
            )}

            {chartName === "Pie" && (
              <Pie ref={chartRef} data={chartData} options={chartOptions} />
            )}

            {chartName === "Doughnut" && (
              <Doughnut ref={chartRef} data={chartData} options={chartOptions} />
            )}

          <a
            ref={link}
            onClick={handleDownload}
            className="bg-light dark:bg-dark px-4 py-2 text-white dark:text-black my-2  w-[95%] m-auto text-center rounded cursor-pointer block"
          >
            Download
          </a>
        </motion.div>
      )}
        </AnimatePresence>
    </div>
  );
};

export default Graph;
