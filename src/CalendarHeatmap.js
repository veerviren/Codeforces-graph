import React from 'react';
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
    console.log("selectedMonth: ", selectedMonth);
    console.log("selectedYear: ", selectedYear);
    console.log("filteredData: ", filteredData);
    return (
        <div className="calendar-heatmap" style={{"width":"200px", "background":"grey"}}>
            <style>{inlineCSS}</style> 
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
                onClick={(value) => alert(`Clicked on value with count: ${value.count? value.count : 0}`)}
                showWeekdayLabels={true}
                showMonthLabels={false}
                horizontal={false}
            />
        </div>
    );
};

export default CalendarHeatmap;
