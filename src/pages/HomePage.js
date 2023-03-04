import { Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' detail={true} />
            <Row className='row-content'>
            </Row>
        </Container>
    );
};

export default HomePage;