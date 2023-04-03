import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import FilterForm from "../components/FilterForm";
import SubHeader from "../components/SubHeader";
import CarList from "../features/car/CarList";

const SearchPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const carTypeFilter = searchParams.getAll('carType');
    const locationFilter = searchParams.getAll('carLocation');
    
    return (
        <Container>
            <SubHeader current='Search' />
            <Row>
                <Col className='col-7'> {
                    location.state ?
                        location.state.hasOwnProperty('carType') ?
                            <CarList state={{location: [], carType: [location.state.carType]}}/> :
                            location.state.hasOwnProperty('location') ?
                                <CarList state={{location: [location.state.location], carType: []}}/> :
                                    <CarList state={{location: locationFilter, carType: carTypeFilter}}/> :
                                    <CarList state={{location: locationFilter, carType: carTypeFilter}}/>
                }
                </Col> 
                <Col className='col-5'>
                    <FilterForm/>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchPage;