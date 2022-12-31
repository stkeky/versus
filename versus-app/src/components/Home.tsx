import React from 'react';
import {Container, Header, Label, Segment} from "semantic-ui-react";


const Home: React.FC = () => {
    
    return (
        <Container className="center aligned with-margin" style={{margin: 80}}>
            <Segment>
                <Header size="huge">Versus</Header>
                <Label color="black" className="center aligned">0.0.1</Label>
            </Segment>
            <Segment>
                <Header size="medium">Versus© 2022</Header>
            </Segment>
        </Container>
    );
};

export default Home;