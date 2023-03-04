import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col className='sm-8'>

                    </Col>
                    <Col sm={{size: 2}} className='text-center ms-0 ps-0'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-234-987-1234
                        </a>
                    </Col>
                    <Col  sm={{size: 3}}>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> someadress@gmail.co
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;