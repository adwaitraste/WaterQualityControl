import React from 'react';
import { Container } from 'reactstrap';
import AppNavbar from '../Components/AppNavbar';
import FieldTable from '../Components/FieldTable';

const Home = () => 
{
    return (
        <div>
            <AppNavbar />
            <Container>
            <br/>
            <FieldTable name="Temperature"/>
            <FieldTable name="pH"/>
            <FieldTable name="TDS"/>
            <FieldTable name="Turbidity"/>
        </Container>
        </div>   
    )
}

export default Home;