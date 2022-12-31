import React, {Fragment} from 'react';

import data from "./../db.json";
import {Card, Divider, Grid, Header, Icon, Image} from "semantic-ui-react";


const listData = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const Snooze: React.FC = () => {


    return (
        <Fragment>
            <div style={{padding: 24, minHeight: "100%"}}>
                <Header level={2}>Snooze</Header>

                <Divider/>

                <Grid celled divided>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Card key="stkeky" link>
                                <Image alt="stkeky"
                                       src="https://avatars.githubusercontent.com/u/16312404?v=4"
                                       wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>stkeky</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>player one</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Simple guy trying to resolve bad habit.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user'/>
                                        {data.stkeky.supporters} Supporters
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={10}></Grid.Column>
                        <Grid.Column width={3}>
                            <Card key="snooze" link>
                                <Image alt="snooze"
                                       src="https://cdn-icons-png.flaticon.com/512/9188/9188917.png"

                                       wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>Snooze button</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>player two</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Proper sleeping habits depriving monster.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user'/>
                                        {data.snooze.supporters} Supporters
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Fragment>
    );
};


export default Snooze;