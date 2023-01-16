import React, {Fragment} from 'react';
import {Container, Header, Image, Label, Segment} from "semantic-ui-react";
import {Config} from "../Config";
import logo from "../logo192.png"

const Home: React.FC = () => {

    return (
        <Container className="centered" textAlign="center" >
            <Segment style={{marginTop: 50}}>
                <Image src={logo} className="centered" />

                <Header size="huge">stkeky's Versus</Header>
                <Label color="teal" className="center aligned">{Config.VERSION}</Label>
            </Segment>
        </Container>
    );
};

export default Home;