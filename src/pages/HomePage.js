import { Container, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import CarTypeList from '../features/car/CarTypeList';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' detail={true} />
            <h2>Popular car types</h2>
            <CarTypeList />
        </Container>
    );
};

export default HomePage;