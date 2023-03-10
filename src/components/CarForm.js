import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Container, Label, Row } from "reactstrap";
import { selectAllLocations } from "../features/location/locationSlice";

const CarForm = () => {
    const locations = useSelector(selectAllLocations);

    return (
        <Container>
            <Row className='mt-5'>
                <Col>
                    <Label for='pickUpLocation' type='input' className='col-12 car-form-button'><i className='fa fa-compass px-2'/>Pick up</Label>
                </Col>
                <Col>
                    <Label for='dropOffLocation' type='input' className='col-12 car-form-button'><i className='fa fa-compass px-2'/>Drop off</Label>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col>
                    <select name='pickUpLocation' id='pickUpLocation' className='col-12 py-2 car-form-button'>{
                        locations.map(location =>
                        <option
                        key={
                            location
                        }
                        value={
                            location
                        }>
                            {location}
                        </option>)
                    }
                    </select>
                </Col>
                <Col>
                    <select name='dropOffLocation' id='dropOffLocation' type='input' className='col-12 py-2 car-form-button'>{
                        locations.map(location =>
                            <option
                            key={
                                location
                            }
                            value={
                                location
                            }>
                                {location}
                            </option>)
                    }
                    </select>
                </Col>
            </Row>
            <Row className='mb-1'>
                <Col>
                    <Label className='col-12 fake-button disabled'><i className='fa fa-calendar px-2'/>Pick up date</Label>
                </Col>
                <Col>
                    <Label className='col-12 fake-button disabled'><i className='fa fa-calendar px-2'/>Drop off date</Label>
                </Col>
                <Col>
                    <Label className='col-12 fake-button disabled'><i className='fa fa-clock-o px-2'/>Pick up time</Label>
                </Col>
                <Col>
                    <Label className='col-12 fake-button disabled'><i className='fa fa-clock-o px-2'/>Drop off time</Label>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <input id='pickUpDate' type='date' className='col-12 car-form-button btn'/>
                </Col>
                <Col>
                    <input id='dropOffDate' type='date' className='col-12 car-form-button btn'/>
                </Col>
                <Col>
                    <input id='pickUpTime' type='time' className='col-12 car-form-button btn'/>
                </Col>
                <Col>
                    <input id='dropOffTime' type='time' className='col-12 car-form-button btn'/>
                </Col>
            </Row>

            <Link to={'/search'} className='submit-link' /* state={{
                pickUpLocation: document.getElementById('pickUpLocation').value,
                dropOffLocation: document.getElementById('dropOffLocation').value,
                pickUpDate: document.getElementById('pickUpDate').value,
                dropOffDate: document.getElementById('dropOffDate').value,
                pickUpTime: document.getElementById('pickUpTime').value,
                dropOffTime: document.getElementById('dropOffTime').value
            }} */>
                <Row className='my-5'><Button type='submit' className='submit-button col-2 offset-5'>Search</Button></Row>
            </Link>
        </Container>
    );
}

export default CarForm;