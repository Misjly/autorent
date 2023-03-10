import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import CarTypeCard from "./CarTypeCard";
import { selectAllCarTypes } from "./carTypesSlice";

const CarTypeList = () => {
    const carTypes = useSelector(selectAllCarTypes);

    return (
        <Row className='py-5'>
            {
                carTypes.map(carType => {
                    return (
                        <Col key={carType.id} className='g-0'>
                            <CarTypeCard carType={carType}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default CarTypeList;