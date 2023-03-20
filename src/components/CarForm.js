import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { Button, FormGroup, Label, Row } from "reactstrap";
import { selectAllLocations } from "../features/location/locationSlice";
import { validateCarForm } from "../utils/validateCarForm";
import { useNavigate } from 'react-router-dom';
const CarForm = () => {
    const navigate = useNavigate();
    const locations = useSelector(selectAllLocations);
    const handleSubmit = (values) => {
        navigate('/search', {state: {
            location: values.pickUpLocation,
            dropOffLocation: values.dropOffLocation,
            pickUpDate: values.pickUpDate,
            dropOffDate: values.dropOffDate,
            pickUpTime: values.pickUpTime,
            dropOffTime: values.dropOffTime
        }});
    }

    return (
        <Formik
            initialValues={{
                pickUpLocation: 'Alabama',
                dropOffLocation: 'Alabama',
                pickUpDate: new Date(Date.now()).toISOString().slice(0, 10),
                dropOffDate: new Date(Date.now()).toISOString().slice(0, 10),
                pickUpTime: '15:00',
                dropOffTime: '15:00'
            }}
            validate={validateCarForm}
            onSubmit={handleSubmit}>
            <Form id='form'>
                <Row className='my-5'>
                    <FormGroup className='col-6'>
                        <Label htmlFor='pickUpLocation' type='input' className='col-12 car-form-button'>
                            <i className='fa fa-compass px-2'/>Pick up
                        </Label>
                        <Field as='select' name='pickUpLocation' id='pickUpLocation' className='col-12 py-2 car-form-button'>{
                            locations.map(location =>
                            <option key={location} value={location}>
                                {location}
                            </option>)
                        }
                        </Field>
                    </FormGroup>
                    <FormGroup className='col-6'>
                        <Label htmlFor='dropOffLocation' type='input' className='col-12 car-form-button'>
                            <i className='fa fa-compass px-2'/>Drop off
                        </Label>
                        <Field as='select' name='dropOffLocation' id='dropOffLocation' type='input' className='col-12 py-2 car-form-button'>{
                            locations.map(location =>
                                <option key={location} value={location}>
                                    {location}
                                </option>)
                        }
                        </Field>
                    </FormGroup>
                </Row>
                
                <Row className='mb-1'>
                        <FormGroup className='col-3'>
                            <Label htmlFor='pickUpDate' className='col-12 fake-button'>
                                <i className='fa fa-calendar px-2'/>Pick up date
                            </Label>
                            <Field id='pickUpDate' name='pickUpDate' type='date' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='pickUpDate'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        
                        <FormGroup className='col-3'>
                            <Label htmlFor='dropOffDate' className='col-12 fake-button'>
                                <i className='fa fa-calendar px-2'/>Drop off date
                            </Label>
                            <Field id='dropOffDate' name='dropOffDate' type='date' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='dropOffDate'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        <FormGroup className='col-3'>
                            <Label htmlFor='pickUpTime' className='col-12 fake-button'>
                                <i className='fa fa-clock-o px-2'/>Pick up time
                            </Label>
                            <Field id='pickUpTime' name='pickUpTime' type='time' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='pickUpTime'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>

                        <FormGroup className='col-3'>
                            <Label htmlFor='dropOffTime' className='col-12 fake-button'>
                                <i className='fa fa-clock-o px-2'/>Drop off time
                            </Label>
                            <Field id='dropOffTime' name='dropOffTime' type='time' className='col-12 car-form-button btn'/>
                            <ErrorMessage name='dropOffTime'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                </Row>
                    <Button type='submit' className='submit-button my-5 col-2 offset-5'>
                        Search
                    </Button>
            </Form>
        </Formik>
    );
}

export default CarForm;