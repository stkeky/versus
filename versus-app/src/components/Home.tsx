import React, {Fragment} from 'react';
import {Container, Header, Label, Segment} from "semantic-ui-react";
import {Config} from "../Config";


const Home: React.FC = () => {

    return (
        <Container className="center aligned with-margin" style={{margin: 80}}>
            <Segment>
                <Header size="huge">stkeky's Versus</Header>
                <Label color="teal" className="center aligned">{Config.VERSION}</Label>
            </Segment>
            <Fragment>
                <Header size="tiny" >Versus© 2023</Header>
            </Fragment>
        </Container>
    );
};

export default Home;