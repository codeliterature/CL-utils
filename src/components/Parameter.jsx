import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Parameter = ({ getData, resetData, getTitle }) => {
  const [id, setId] = useState([1, 2, 3, 4]);

  const [xVal, setxValues] = useState({});

  const [yVal, setyValues] = useState({});
  const [name, setName] = useState("");

  const setxVal = (e, itemId) => {
    setxValues((prevValues) => ({
      ...prevValues,
      [itemId]: e.target.value,
    }));
  };

  const setyVal = (e, itemId) => {
    setyValues((prevValues) => ({
      ...prevValues,
      [itemId]: parseInt(e.target.value),
    }));
  };
  const addName = (e) => {
    setName(e.target.value);
  };
  const add = () => {
    setId([...id, id.length + 1]);
  };

  const submit = () => {
    const x = Object.values(xVal);
    const y = Object.values(yVal);
    getData(x, y);
    getTitle(name);
  };

  const reset = () => {
    setxValues({});
    setyValues({});
    setId([1, 2, 3, 4]);
    resetData();
    getTitle("My Chart");
  };

  return (
    <div className="dark:text-white m-auto flex flex-col items-center m-4 p-2 space-y-4">
      <input
        type="text"
        className="td-class border"
        placeholder="Enter Name for Graph"
        onChange={addName}
        value={name}
      />
      <table className="table-fixed p-8">
        <thead>
          <tr className="border dark:border-white rounded">
            <th className="dark:bg-dark dark:text-black bg-light text-white">
              ID
            </th>
            <th className="dark:bg-dark dark:text-black bg-light text-white">
              X-Axis
            </th>
            <th className="dark:bg-dark dark:text-black bg-light  text-white">
              Y-Axis
            </th>
          </tr>
        </thead>
        <tbody>
          {id.map((item) => (
            <tr key={item} className="border dark:border-white rounded">
              <td className="td-class">{item}</td>
              <td>
                <input
                  type="text"
                  className="td-class w-[80%] border-l-[1px]"
                  onChange={(e) => setxVal(e, item)}
                  value={xVal[item] || ""}
                  name={item}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="td-class w-[80%] border-l-[1px]"
                  onChange={(e) => setyVal(e, item)}
                  value={yVal[item] || ""}
                  name={item}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="space-x-3">
        <button
          className="bg-light dark:bg-dark px-4 py-2 text-white dark:text-black rounded-lg"
          onClick={add}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button
          className="bg-light dark:bg-dark px-4 py-2 text-white dark:text-black rounded-lg"
          onClick={submit}
        >
          Submit
        </button>
        <button
          className="bg-light dark:bg-dark px-4 py-2 text-white dark:text-black rounded-lg"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Parameter;
