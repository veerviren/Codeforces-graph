import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip } from 'react-tooltip';

const CustomCalendarHeatmap = ({ data, selectedMonth, selectedYear }) => {
    const filteredData = data.filter((value) => {
        const dateParts = value.date.split('-');
        const year = parseInt(dateParts[0], 10);
        return year == selectedYear;
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

        .outline-none {
            outline: none;
        }
    `;

    console.log("selectedMonth: ", selectedMonth);
    console.log("selectedYear: ", selectedYear);
    console.log("filteredData: ", filteredData);
    return (
        <div className="scrollable-container">
            <div className="calendar-heatmap" style={{ "width": "1000px", "background": "grey" }}>
                <style>{inlineCSS}</style>
                <CalendarHeatmap
                    startDate={new Date(`${selectedYear}-$01-01`)}
                    endDate={new Date(`${selectedYear}-$12-31`)}
                    values={filteredData}
                    classForValue={(value) => {
                        if (!value) {
                            return "color-empty outline-none";
                        }
                        return `color-scale-${value.count < 4 ? value.count : 4} outline-none`;
                    }}
                    tooltipDataAttrs={(value) => {

                        if(value.count > 0)
                        {
                            return {
                                "data-tooltip-id":"my-tooltip",
                                "data-tooltip-html":`${value.date}<br />submission: ${value.count}`
                            };
                        }
                        else{
                            return {
                                "data-tooltip-id":"my-tooltip",
                                "data-tooltip-html":`No submission`
                            };
                        }
                    }}
                    showWeekdayLabels={true}
                />
                <Tooltip id="my-tooltip"/>
            </div>
        </div>
    );
};

export default CustomCalendarHeatmap;
