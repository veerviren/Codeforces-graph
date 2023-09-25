import React, { useState } from 'react';
import CalendarHeatmap from './CalendarHeatmap';
import dummydata from './dummydata.json';

const App = () => {

  //fetch data from the url and set the data to the state url(https://codeforces-graph.vercel.app/?handle=$handle&year=$currYear)
  
  const [handle, setHandle] = useState("");
  const [selectedYear, setSelectedYear] = useState("2019");
  const [selectedMonth, setSelectedMonth] = useState("01");

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
