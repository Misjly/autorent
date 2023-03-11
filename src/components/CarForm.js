import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Container, FormGroup, Label, Row } from "reactstrap";
import { selectAllLocations } from "../features/location/locationSlice";
import { validateCarForm } from "../utils/validateCarForm";

const CarForm = () => {
    const locations = useSelector(selectAllLocations);

    const handleSubmit = (values) => {
        document.getElementById('carSubmit').state= {/* 
            pickUpLocation: document.getElementById('pickUpLocation').value,
            dropOffLocation: document.getElementById('dropOffLocation').value,
            pickUpDate: document.getElementById('pickUpDate').value,
            dropOffDate: document.getElementById('dropOffDate').value,
            pickUpTime: document.getElementById('pickUpTime').value,
            dropOffTime: document.getElementById('dropOffTime').value */
            
            pickUpLocation: values.pickUpLocation,
            dropOffLocation: values.dropOffLocation,
            pickUpDate: values.pickUpDate,
            dropOffDate: values.dropOffDate,
            pickUpTime: values.pickUpTime,
            dropOffTime: values.dropOffTime
        }
    }

    return (
        <Formik
            initialValues={{
                pickUpDate: '',
                dropOffDate: '',
                pickUpTime: '',
                dropOffTime: ''
            }}
            validate={validateCarForm}
            onSubmit={handleSubmit}>
            <Form>
                <Row className='my-5'>
                    <FormGroup className='col-6'>
                        <Label for='pickUpLocation' type='input' className='col-12 car-form-button'><i className='fa fa-compass px-2'/>Pick up</Label>
                        <select name='pickUpLocation' id='pickUpLocation' className='col-12 py-2 car-form-button'>{
                            locations.map(location =>
                            <option
                            key={location}
                            value={location}>
                                {location}
                            </option>)
                        }
                        </select>
                    </FormGroup>
                    <FormGroup className='col-6'>
                        <Label for='dropOffLocation' type='input' className='col-12 car-form-button'><i className='fa fa-compass px-2'/>Drop off</Label>
                        <select name='dropOffLocation' id='dropOffLocation' type='input' className='col-12 py-2 car-form-button'>{
                            locations.map(location =>
                                <option
                                key={location}
                                value={location}>
                                    {location}
                                </option>)
                        }
                        </select>
                    </FormGroup>
                </Row>
                
                <Row className='mb-1'>
                        <FormGroup className='col-3'>
                            <Label for='pickUpDate' className='col-12 fake-button disabled'><i className='fa fa-calendar px-2'/>Pick up date</Label>
                            <Field id='pickUpDate' name='pickUpDate' type='date' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='pickUpDate'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        
                        <FormGroup className='col-3'>
                            <Label for='dropOffDate' className='col-12 fake-button disabled'><i className='fa fa-calendar px-2'/>Drop off date</Label>
                            <Field id='dropOffDate' name='dropOffDate' type='date' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='dropOffDate'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        <FormGroup className='col-3'>
                            <Label for='pickUpTime' className='col-12 fake-button disabled'><i className='fa fa-clock-o px-2'/>Pick up time</Label>
                            <Field id='pickUpTime' name='pickUpTime' type='time' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='pickUpTime'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        <FormGroup className='col-3'>
                            <Label for='dropOffTime' className='col-12 fake-button disabled'><i className='fa fa-clock-o px-2'/>Drop off time</Label>
                            <Field id='dropOffTime' name='dropOffTime' type='time' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='dropOffTime'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                </Row>

                <Button type='submit' className='submit-button my-5 col-2 offset-5'>
                    <Link to={'/search'} className='submit-link' id='carSubmit'>Search</Link>
                </Button>
            </Form>
        </Formik>
    );
}

export default CarForm;