import React from 'react';
import {Header, Segment} from "semantic-ui-react";

const NoMatch: React.FC = () => {
    return (
        <Segment style={{margin: '0 0px'}}>
            <Header>No match</Header>
        </Segment>
    );
};

export default NoMatch;