import { Container } from 'reactstrap';
import CarForm from '../components/CarForm';
import SubHeader from '../components/SubHeader';
import CarTypeList from '../features/carType/CarTypeList';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' detail={true} />
            <h2>Search for cars</h2>
            <CarForm />
            <h2>Popular car types</h2>
            <CarTypeList />
        </Container>
    );
};

export default HomePage;