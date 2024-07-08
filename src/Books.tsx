import Book from "./Book"
import {Col, Row} from "react-bootstrap"
export default function Books(){
    const three = [1, 2, 3]
    const element = three.map((w)=> {
       return (<Col>
            <Book></Book>
        </Col>)
    })
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {element}
            </Row>
        </div>
    )

}