import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel_Item from './Carousel_Item';



export default function Home({data} : {data:object}) {
    // const element = data.map((dat) => {
    //     return <Carousel_Item name={dat.name} img=''/>})
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1 className="text-center"> Ben's Media</h1>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Carousel>
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <h2>What's this about?</h2>
                    <p>
                        Have you ever wondered - what media does our friend Ben like? Well look no further, as this site is a record of all/majority of the media I've consumed in the past while!
                    </p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}