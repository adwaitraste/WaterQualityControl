import React, { useEffect, useState } from 'react';
import { Container, Table } from 'reactstrap';

const FieldTable = (props) => {

    const [fieldID, setFieldID] = useState(0);
    const [jsonData, setJsonData] = useState([]);

    const getData = (field) => {
        fetch("https://api.thingspeak.com/channels/1543836/fields/" + field + ".json?api_key=37WFEHRP9JD2266M&results=120", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setJsonData(data["feeds"]))
    }


    useEffect(() => {
        switch (props.name) {
            case "Temperature":
                setFieldID(1);
                getData(1);
                break;
            case "pH":
                setFieldID(2);
                getData(2);
                break;
            case "TDS":
                setFieldID(3);
                getData(3);
                break;
            case "Turbidity":
                setFieldID(4);
                getData(4);
                break;
            default:
                break;
        }


    }, [])

    return (
        <Container>
            <Table
                bordered
                dark
                hover
                responsive
                size=""
                striped
            >
                <thead>
                    <tr>
                        <th>
                            Time
                        </th>
                        <th>
                            {props.name}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jsonData.map(e => {
                            return <tr>
                                <td>
                                    {e["created_at"]}
                                </td>
                                <td>
                                    {e["field" + fieldID]}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default FieldTable;