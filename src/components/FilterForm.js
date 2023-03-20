import { Field, Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Row } from "reactstrap";
import { selectAllCarTypes } from "../features/carType/carTypesSlice";
import { selectAllLocations } from "../features/location/locationSlice";

const FilterForm = () => {
    const navigate = useNavigate();
    const carTypes = useSelector(selectAllCarTypes);
    const carLocations = useSelector(selectAllLocations);
    const handleSubmit = (values) => {
        navigate('/search', { state: {
            carType: values.carType,
            location: values.carLocation
        }});
    }

    return (
        <Row className='p-5 mx-5'>
            <Formik
                initialValues={{
                    carType: [],
                    location: []
                }}
                onSubmit={handleSubmit}>
                <Form className='filter-form'>
                    <FormGroup className='mb-5'>
                        <h5 className='col-12 mb-5'>Car Type</h5>
                        <div className='car-filter'>
                            {
                                carTypes.map(type => {
                                    return (
                                        <div key={type.name} role='group' className='mb-3'>
                                            <Label>
                                                <Field type='checkbox' name='carType' id={type.name} value={type.name}/>
                                                {type.name}
                                            </Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h5 className='col-12 mb-5'>Location</h5>
                        <div className='car-filter'>
                            {
                                carLocations.map(location => {
                                    return (
                                        <div key={location} role='group' className='mb-3'>
                                            <Label>
                                                <Field type='checkbox' name='carLocation' id={location} value={location}/>
                                                {location}
                                            </Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Button type='submit' className='submit-button col-12'>Filter</Button>
                    </FormGroup>
                </Form>
            </Formik>
        </Row>
    );
}

export default FilterForm;