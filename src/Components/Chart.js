import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = () => {

    const [jsonData, setJsonData] = useState([]);
    const [labels, setLabels] = useState([]);
    const [myData, setMyData] = useState([]);


    useEffect(() => {
        fetch("https://api.thingspeak.com/channels/1543836/fields/" + "1" + ".json?api_key=37WFEHRP9JD2266M&results=3", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setJsonData(data["feeds"]);
                jsonData.map( e => {
                    setLabels([...labels, e["created_at"]]);
                    setMyData([...myData, e['field1']]);
                })
            })
    }
    )


    return (
        <div>
            <Bar
                data={null}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    );
}

export default Chart;