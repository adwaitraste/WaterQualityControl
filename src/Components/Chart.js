import React, { useEffect, useState, useRef } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = () => {

    const [jsonData, setJsonData] = useState([]);
    const [myLabels, setMyLabels] = useState([]);
    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const isInitialMount = useRef(true);

    useEffect(() => {
        fetch("https://api.thingspeak.com/channels/1543836/fields/" + "1" + ".json?api_key=37WFEHRP9JD2266M&results=10", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                setJsonData(data["feeds"]);
            })
    }, [])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            jsonData.map(e => {
                setMyLabels([...myLabels, e["created_at"]]);
                setMyData([...myData, e['field1']]);
            })
            setLoading(false)
         }
    }, [jsonData])


    return (
        <div>
            {   !loading &&

                <Line
                    data={{
                        labels: myLabels,
                        datasets: [
                            {
                                label: "Temperature",
                                data: myData,   
                            }
                        ]
                    }}
                    width={600}
                    height={400}
                    options={{ maintainAspectRatio: false }}
                />
            }
        </div>
    );
}

export default Chart;