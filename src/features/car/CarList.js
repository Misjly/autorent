import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import CarCard from "./CarCard";
import { selectAllCars } from "./carSlice";

const CarList = (props) => {
    const cars = useSelector(selectAllCars);
    
    return (
        <Row className='py-5'>
            {
                (props.state.location.length && props.state.carType.length) ?
                cars.map(car => {
                    if(props.state.location.includes(car.location) && props.state.carType.includes(car.type)) {
                        return (
                            <Col key={car.id} className='col-12'>
                                <CarCard car={car}/>
                            </Col>
                        )
                    }
                }) : 
                (props.state.location && props.state.location.length) ?
                cars.map(car => {
                    if(props.state.location.includes(car.location)) {
                        return (
                            <Col key={car.id} className='col-12'>
                                <CarCard car={car}/>
                            </Col>
                        )
                    }
                }) : 
                (props.state.carType && props.state.carType.length) ?
                cars.map(car => {
                    if(props.state.carType.includes(car.type)) {
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