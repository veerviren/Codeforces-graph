import React, { useState } from 'react';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const CalendarHeatmap = ({ data, selectedMonth, selectedYear }) => {

    console.log("data: ", data);
    const filteredData = data.filter((value) => {
        const dateParts = value.date.split('-'); 
        // console.log("dateParts: ", dateParts);
        const year = parseInt(dateParts[0], 10); 
        const month = parseInt(dateParts[1], 10);
        // console.log("year: ", year);
        // console.log("month: ", month);
        return year == selectedYear && month == selectedMonth;
    });

    const inlineCSS = `
        .color-empty {
            fill: #eeeeee;
        }
        .color-scale-1 {
            fill: #d6e685;
        }
        .color-scale-2 {
            fill: #8cc665;
        }
        .color-scale-3 {
            fill: #44a340;
        }
        .color-scale-4 {
            fill: #1e6823;
        }
    `;

    // let selectedDate = "";
    // let selectedCount = "";

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedCount, setSelectedCount] = useState("");

    const testStyle = {   
        "margin": "0px",
        "padding": "0px",
    };
    console.log("selectedMonth: ", selectedMonth);
    console.log("selectedYear: ", selectedYear);
    console.log("filteredData: ", filteredData);
    return (
        <div className="calendar-heatmap" style={{"display":"flex"}}>
            <style>{inlineCSS}</style> 
            <div style={{"width":"100px" }}>
            <ReactCalendarHeatmap
                startDate={new Date(selectedYear, selectedMonth - 1, 1)}
                endDate={new Date(selectedYear, selectedMonth, 0)}
                values={filteredData}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count < 4 ? value.count : 4}`;
                }}
                onClick={(value) => {
                    if(value){
                        setSelectedDate(value.date);
                        setSelectedCount(value.count);
                    }
                }}
                showWeekdayLabels={true}
                showMonthLabels={false}
                horizontal={false}
                />
            </div>
            
            <div style={{"width":"100px", "display":'flex', "justifyContent":"center", "alignItems":'center'}}>
                <div>
                <h5 style={testStyle}>Selected cube</h5>
                <h6 style={testStyle}>date: {selectedDate}</h6>
                    <h6 style={testStyle}>count: {selectedCount}</h6>
                </div>
            </div>
        </div>
    );
};

export default CalendarHeatmap;
