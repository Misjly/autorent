import { Button, Card, CardImg, Col, Row } from "reactstrap"

const CarCard = ({car}) => {
    const { img, name, type, price } = car;

    return (
        <Row>
            <Col className='col-4'>
            <Card>
                <CardImg src={img} alt={name} className='car-card-img'/>
            </Card>
            </Col>
            <Col className='car-card-text col-4'>
                <h4>{type}</h4>
                <h4>{name}</h4>
                <h4>{price}$ per day</h4>
                <Button type='submit' className='submit-button col-3'>Rent</Button>
            </Col>
        </Row>
    );
}

export default CarCard;