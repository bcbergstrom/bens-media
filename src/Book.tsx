import { Button, Card, Fade } from "react-bootstrap";
import books from './art/books_stock.jpg'
import {useState} from "react"

export default function Book() {
    const [open, setOpen] = useState(false)
    return (
        <Card>
            <Card.Img variant="top" src={books}></Card.Img>
            <Card.Body>
                <Button onClick={() => setOpen(!open)}>
                    Book #1
                </Button>
                <Fade in={open}>
                    <Card.Text>
                        Loren Ipsum
                    </Card.Text>
                </Fade>
            </Card.Body>
        </Card>
    )
}