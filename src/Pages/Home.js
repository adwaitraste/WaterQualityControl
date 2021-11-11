import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import AppNavbar from '../Components/AppNavbar';
import FieldTable from '../Components/FieldTable';
import TemperatureChart from '../Components/TemperatureChart';
import PHChart from '../Components/PHChart';
import TDSChart from '../Components/TDSChart';
import TurbidityChart from '../Components/TurbidityChart';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Container>
            <Row>
                <Col md="6" className="pt-2">
                    <TemperatureChart />
                    <Link to="/temperature">
                        <Button size="sm">View Temperature Data</Button>
                    </Link>
                </Col>
                <Col md="6" className="pt-2">
                    <PHChart />
                    <Link to="ph">
                        <Button size="sm">View pH Data</Button>
                    </Link>
                </Col>
                <Col md="6" className="pt-2">
                    <TDSChart />
                    <Link to="/tds">
                        <Button size="sm">View TDS Data</Button>
                    </Link>
                </Col>
                <Col md="6" className="pt-2">
                    <TurbidityChart />
                    <Link to="/turbidity">
                        <Button size="sm">View Turbidity Data</Button>
                    </Link>
                </Col>
            </Row>
            <br />
        </Container>

    )
}

export default Home;