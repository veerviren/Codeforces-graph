import React, { useState } from 'react';
import CalendarHeatmap from './CalendarHeatmap';
import dummydata from './dummydata.json';

const App = () => {
  // Define initial values for selectedMonth and selectedYear
  const [selectedMonth, setSelectedMonth] = useState('01'); // January
  const [selectedYear, setSelectedYear] = useState('2019');

  // Function to handle changes in the selected month
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // Function to handle changes in the selected year
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const constSize = {
    width: '200px',
  }

  return (
    <div className="App">
      <h1>Calendar Heatmap Example</h1>
      <div>
        <label>Select Month:</label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
        </select>
      </div>
      <div>
        <label>Select Year:</label>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <div>
        <CalendarHeatmap
          data={dummydata}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          style={constSize}
        />
      </div>
    </div>
  );
};

export default App;
