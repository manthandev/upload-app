import { Divider } from '@chakra-ui/core';
import React from 'react'
import {Jumbotron} from 'reactstrap'
import { Heading } from "@chakra-ui/core";

function Home() {
    return (
        <Jumbotron className="mt-5" >
        <div className="container">
            <div className="row row-header d-flex justify-content-center">
                <div className="col-12 col-sm-6">
                <Heading>Welcome to Image Upload Service</Heading>
                </div>
            </div>
        </div>
    </Jumbotron>
    )
}

export default Home
