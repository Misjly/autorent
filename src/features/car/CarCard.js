import { Button, Card, CardImg, Col, Row } from "reactstrap"

const CarCard = ({car}) => {
    const { img, name, type, price } = car;

    return (
        <Row className='car-card mb-5'>
            <Col className='col-12 col-md-7 px-0'>
                <Card>
                    <CardImg src={img} alt={name} className='car-card-img'/>
                </Card>
            </Col>
            <Col>
                <div className='car-card-text'>
                    <div>{type}</div>
                    <div>{name}</div>
                    <div>{price}$ per day</div>
                    <Button type='submit' className='submit-button col-8'>Rent</Button>
                </div>
            </Col>
        </Row>
    );
}

export default CarCard;