import { Carousel } from "react-bootstrap";


export default function Carousel_Item({name, img} : {name:string, img:string}){
    return (
    <Carousel.Item>
        <img className="w-100 h-25"src={img}></img>
        <Carousel.Caption>{name[0].toUpperCase() + name.slice(1) + "!"}</Carousel.Caption>    
    </Carousel.Item>
    )
}