import React, { useState, useEffect } from 'react';
import CalendarHeatmap from './CalendarHeatmap';
import dummydata from './dummydata.json';

const App = () => {

  //fetch data from the url and set the data to the state url(https://codeforces-graph.vercel.app/?handle=$handle&year=$currYear)
  console.log("url: ", window.location.href);
  const [data, setData] = useState([]);
  const [handle, setHandle] = useState("");
  const [selectedYear, setSelectedYear] = useState("2019");
  const [selectedMonth, setSelectedMonth] = useState("01");

  //check if selectedMonth is null or not
  if (selectedMonth === null) {
    //set current month
    setSelectedMonth(new Date().getMonth() + 1);
  }

  //check if selectedYear is null or not
  if (selectedYear === null) {
    //set current year
    setSelectedYear(new Date().getFullYear());
  }

  return (
    <div className="App">
      <div>
        <CalendarHeatmap
          data={dummydata}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      </div>
    </div>
  );
};

export default App;
