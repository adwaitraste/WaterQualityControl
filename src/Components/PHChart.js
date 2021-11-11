import React, { useEffect, useState, useRef } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { parseTime } from '../Utils/utils';

const PHChart = () => {

    let timestamps = [];
    let values = [];

    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const id = setInterval(() => {
            fetch("https://api.thingspeak.com/channels/1543836/fields/" + "2" + ".json?api_key=37WFEHRP9JD2266M&results=60", {
                method: 'GET',
            })
                .then(res => res.json())
                .then(data => {
                    timestamps = [];
                    values = [];
                    for (const dataObj of data["feeds"]) {
                        timestamps.push(parseTime(dataObj.created_at));
                        values.push(parseFloat(dataObj.field2));
                    }
                    setLoading(false)
                })
            setChartData({
                labels: timestamps,
                datasets: [
                    {
                        label: "pH",
                        data: values,
                        backgroundColor: ["rgba(75,192,192,0.6)"],
                        borderColor: ["rgba(75,192,192,0.6)"],
                        borderWidth: 4,
                    }
                ]
            })

        }, 5000);
        return () => clearInterval(id);
    }, []);


    return (
        <div>
            {
                !loading && 
                <Line
                data={chartData}
                options={{
                    responsive: true,
                }}
            />
            }
        </div>
    );
}

export default PHChart;