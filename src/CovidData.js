import React, { useEffect, useState } from "react";
import {
  
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

function CovidData() {
  const [data, setData] = useState("");
  const chart = [
    { name: "Cases", value: data.TotalConfirmed },
    { name: "Deaths", value: data.TotalDeaths },
    { name: "Recovered", value: data.TotalRecovered },
    { name: "Cases Today", value: data.NewConfirmed },
    { name: "Deaths Today", value: data.NewDeaths },
    { name: "Recovered Today", value: data.NewRecovered },
  ];
  

  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://api.covid19api.com/summary
    `)
      .then((res) => res.json())
      .then(
        (data) => setData(data.Global)
        // console.log(data.Global)
      );
  };

  return (
    <div className="covidData">
      <h1>COVID-19 CASES COUNTRY WISE</h1>
      <div className="covidData__input">
        <form onSubmit={handleSubmit}>
          <button type="submit">See Data</button>
        </form>
      </div>

    

      <div className="covidData__country__info">
   
        <BarChart
          width={1400}
          height={300}
          data={chart}
          fill = "#8884d8"
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={50}
          

        ><XAxis
        dataKey="name"
        // scale="point"
        
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 2" />
      <Bar dataKey="cases" fill="#8884d8"  background={{ fill: "#eee" }} />
    </BarChart>
        <div>
          <p>Cases : {data.TotalConfirmed}</p>

          <p>Deaths : {data.TotalDeaths}</p>

          <p>Recovered : {data.TotalRecovered}</p>

          <p>Cases Today : {data.NewConfirmed}</p>

          <p>Deaths Today : {data.NewDeaths}</p>

          <p>Recovered Today : {data.NewRecovered}</p>
        </div>
      </div>
    </div>
  );
}


export default CovidData;
