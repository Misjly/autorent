import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import CarCard from "./CarCard";
import { selectAllCars } from "./carSlice";

const CarList = (props) => {
    const cars = useSelector(selectAllCars);
    
    return (
        <Row className='py-5'>
            {
                props.state ?
                props.state.pickUpLocation ?
                cars.map(car => {
                    if(car.location === props.state.pickUpLocation) {
                        return (
                            <Col key={car.id} className='col-12'>
                                <CarCard car={car}/>
                            </Col>
                        )
                    }
                }) : 
                cars.map(car => {
                    if(car.type === props.state) {
                        return (
                            <Col key={car.id} className='col-12'>
                                <CarCard car={car}/>
                            </Col>
                        )
                    }
                }) :
                cars.map(car => {
                    return (
                        <Col key={car.id} className='col-12'>
                            <CarCard car={car}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default CarList;