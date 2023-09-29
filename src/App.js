import React, { useState, useEffect } from 'react';
import CalendarHeatmap from './CalendarHeatmap';

const App = () => {
  const [handle, setHandle] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const submissionData = [];

  useEffect(() => {
    // Fetching the URL and parsing it
    const url = window.location.href;
    const urlObj = new URL(url);

    // Fetching the handle from the URL and updating state
    const handleFromUrl = urlObj.searchParams.get("handle");
    if (handleFromUrl) {
      setHandle(handleFromUrl);
    }

    // Fetching the month from the URL and updating state
    const monthFromUrl = urlObj.searchParams.get("month");
    if (monthFromUrl) {
      setSelectedMonth(monthFromUrl);
    }

    // Fetching the year from the URL and updating state
    const yearFromUrl = urlObj.searchParams.get("year");
    if (yearFromUrl) {
      setSelectedYear(yearFromUrl);
    }
  }, []);

  
  
  const [data, setData] = useState([]);

  useEffect(() => {
    if (handle) { 
    const url = `https://codeforces.com/api/user.status?handle=${handle}`;
    // console.log("handleurl: ", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Set the data
        setData(data.result);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [handle]);

  data.forEach((submission) => {
    const date = new Date(submission.creationTimeSeconds * 1000);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    submissionData.push(dateString);
  });

  const submissionDataDict = {};
  submissionData.forEach((date) => {
    if (date in submissionDataDict) {
      submissionDataDict[date] += 1;
    } else {
      submissionDataDict[date] = 1;
    }
  });

  const submissionDataList = [];
  Object.keys(submissionDataDict).forEach((date) => {
    submissionDataList.push({
      date,
      count: submissionDataDict[date],
    });
  });

  if (!selectedMonth) {
    setSelectedMonth((new Date().getMonth() + 1).toString().padStart(2, '0'));
  }

  // Check if selectedYear is null or not
  if (!selectedYear) {
    setSelectedYear(new Date().getFullYear().toString());
  }

  return (
    <div className="App" >
      <div>
        <CalendarHeatmap
          data={submissionDataList}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />
      </div>
    </div>
  );
};

export default App;
