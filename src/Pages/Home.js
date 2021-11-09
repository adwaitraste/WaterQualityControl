import React from 'react';
import { Container } from 'reactstrap';
import AppNavbar from '../Components/AppNavbar';
import FieldTable from '../Components/FieldTable';
import Chart from '../Components/Chart';

const Home = () => 
{
    return (
        <div>
            <AppNavbar />
            <br/>
            <Chart/>
            <FieldTable name="Temperature"/>
            <FieldTable name="pH"/>
            <FieldTable name="TDS"/>
            <FieldTable name="Turbidity"/>
        </div>   
        
    )
}

export default Home;