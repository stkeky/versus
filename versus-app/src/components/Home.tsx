import React, {Fragment} from 'react';
import {Container, Header, Label, Segment} from "semantic-ui-react";


const Home: React.FC = () => {

    return (
        <Container className="center aligned with-margin" style={{margin: 80}}>
            <Segment>
                <Header size="huge">stkeky's Versus</Header>
                <Label color="teal" className="center aligned">0.0.1</Label>
            </Segment>
            <Fragment>
                <Header size="tiny" >Versus© 2023</Header>
            </Fragment>
        </Container>
    );
};

export default Home;