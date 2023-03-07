import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col sm={{size: 2}} className='mx-0 px-0'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='/'>
                                <i className='fa fa-user pe-1'/>Support
                        </a>
                    </Col>
                    <Col sm={{size: 2}} className='mx-0 px-0'>
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
                            <i className='fa fa-envelope-o' /> someadress@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;