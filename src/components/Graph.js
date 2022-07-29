import React from "react";
import { useState } from "react";
import Data from "../sampledata.json";
import Chart from "react-apexcharts";
import "./graph.css";

const Graph = () => {
  const [username, setusername] = useState("rohit");
  const finder = Data.filter((x) => x.Name === username);
  const obj = finder[0];
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  values.shift();
  keys.shift();

  //  array of  Names for Select tag
  let arrayofNames = [];
  Data.forEach((obj) => {
    const name = Object.values(obj)[0];
    arrayofNames.push(name);
  });
  arrayofNames.shift();

  const handleChange = (event) => {
    setusername(event.target.value);
  };

  // code for getting ideal value
  const idealfinder = Data.filter((x) => x.Name === "Ideal");
  const idealobj = idealfinder[0];
  const idealvalues = Object.values(idealobj);
  idealvalues.shift();

  return (
    <>
      <div className="app">
        <div className="selectbox">
          <select name="filterbox" id="filterbox" onChange={handleChange}>
            {arrayofNames.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
        </div>
        <Chart
          type="bar"
          width={"100%"}
          height={"600px"}
          series={[
            {
              name: username,
              data: values,
            },
            {
              name: "Ideal",
              data: idealvalues,
            },
          ]}
          options={{
            title: {
              text: "Pshycology Test Graph ",
              style: { fontSize: 25, fontFamily: "monospace" },
            },
            colors: ["#0000FF", "#00FF00"],
            theme: { mode: "light" },
            xaxis: {
              categories: keys,
              title: {
                text: "Test Results",
                style: { fontSize: 25, fontFamily: "monospace" },
              },
            },
          }}
        ></Chart>
      </div>
    </>
  );
};

export default Graph;
