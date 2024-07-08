import Header from "./Header";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import React, {useState, useEffect} from "react";


function WebpageBundle(){
    const [routingList, setRoutingList] = useState<object>([])
    const [reFetch, setReFetch] = useState<boolean>(false)
    const [media, setMedia] = useState<object>()
    useEffect(() => {
        fetch("http://localhost:3000/data")
        .then(r => r.json())
        .then(data => {
            setMedia(data)
            console.log(typeof(data))
            const routing:Array<object> = [...routingList, [{path:"/", element:<Home data={media}/> }]]
            setRoutingList(routing)
        })
    },[reFetch])

    useEffect(() => {
    }, [media])




    const router = createBrowserRouter(routingList)
    return(
        <>
        <Header />
        <RouterProvider router={router}/>
        </>
    )
}


export default WebpageBundle;