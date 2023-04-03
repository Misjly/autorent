import { Button, Card, CardImg, Col, Row } from "reactstrap"

const CarCard = ({car}) => {
    const { img, name, type, price, location } = car;

    return (
        <Row className='car-card mb-5'>
            <Col className='col-12 col-md-7 px-0'>
                <Card>
                    <CardImg src={img} alt={name} className='car-card-img'/>
                </Card>
            </Col>
            <Col className='car-card-info'>
                <div className='car-card-text'>
                    <div className='divider-first'>{type}</div>
                    <div className='divider'>{name}</div>
                    <div className='divider'>{price}$ per day</div>
                    <div className='divider-last'>{location}</div>
                    <Button type='submit' className='submit-button col-8 my-5'>Rent</Button>
                </div>
            </Col>
        </Row>
    );
}

export default CarCard;