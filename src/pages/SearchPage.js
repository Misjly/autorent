import { useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import CarList from "../features/car/CarList";

const SearchPage = () => {
    const location = useLocation();
    
    if(location.state) {
        return (
            <Container>
                <SubHeader current='Search' />
                <CarList state={location.state}/> 
            </Container>
        );
    }
    return (
        <Container>
            <SubHeader current='Search' />
            <CarList /> 
        </Container>
    );
}

export default SearchPage;