import { Link } from "react-router-dom";
import { Card, CardImg, CardText } from "reactstrap"; 

const CarTypeCard = ({ carType }) => {
    const { name, img } = carType;
    return (
        <Link to='/search'
            state={{carType: name}}>
            <Card className='card-container'>
                 <CardImg
                    id='cartype-card-img'
                    className='card-img'
                    top
                    fluid="true"
                    src={img}
                    alt={name}
                />
                <CardText className='card-text'>
                    {name}
                </CardText>
            </Card>
        </Link>
    );
}

export default CarTypeCard;