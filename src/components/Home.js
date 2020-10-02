import React from 'react'
import {Jumbotron} from 'reactstrap'
import { Heading } from "@chakra-ui/core";

function Home() {
    return (
        <Jumbotron className="mt-5" >
        <div className="container">
            <div className="d-flex justify-content-center">
                <Heading>Welcome to Image Upload Service</Heading>
            </div>
       </div>
    </Jumbotron>
    )
}

export default Home
