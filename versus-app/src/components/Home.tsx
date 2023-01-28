import React from 'react';
import {Container, Divider, Header, Image, Label, Segment} from "semantic-ui-react";
import {Config} from "../Config";
import logo from "../logo192.png"

const Home: React.FC = () => {

    return (
        <Container className="centered" textAlign="center" >
            <Segment style={{marginTop: 50}}>
                <Image src={logo} className="centered" />

                <Header size="huge">STKEKY VERSUS</Header>
                <Label color="blue" className="center aligned">{Config.VERSION}</Label>
                <Divider />
                <Label color="teal">🏆  A stress-free project to try out some concepts and maybe get rid of few bad habits.  🏆</Label>
            </Segment>
        </Container>
    );
};

export default Home;