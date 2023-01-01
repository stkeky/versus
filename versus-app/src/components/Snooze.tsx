import React, {Fragment} from 'react';

import data from "./../db.json";
import {Card, Divider, Grid, Header, Icon, Image, List} from "semantic-ui-react";


const Snooze: React.FC = () => {

    return (
        <Fragment>
            <div style={{padding: 24, minHeight: "100%"}}>
                <Header level={2} textAlign="center">STKEKY vs. SNOOZE BUTTON </Header>

                <Divider/>

                <Grid celled divided>
                    <Grid.Row>
                        <Grid.Column width={4}>
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
                                    <a href="#">
                                        <Icon name='user'/>
                                        {data.stkeky.supporters.length} Supporters
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={8}></Grid.Column>
                        <Grid.Column width={4}>
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
                                    <a href="#">
                                        <Icon name='user'/>
                                        {data.snooze.supporters.length} Supporters
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <List>
                                {data.stkeky.supporters.map((supporter: any) => {
                                    return (
                                        <List.Item>
                                            <Image avatar src={supporter.avatar}/>
                                            <List.Content>
                                                <List.Header as='a'>{supporter.name}</List.Header>
                                                <List.Description>
                                                    {supporter.comment}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    );
                                })}
                            </List>
                        </Grid.Column>
                        <Grid.Column width={2} textAlign="center">
                            <Fragment>
                                <Icon circular name='users' size="big"/>
                            </Fragment>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <List>
                                {data.snooze.supporters.map((supporter: any) => {
                                    return (
                                        <List.Item>
                                            <Image avatar src={supporter.avatar}/>
                                            <List.Content>
                                                <List.Header as='a'>{supporter.name}</List.Header>
                                                <List.Description>
                                                    {supporter.comment}
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    );
                                })}
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Fragment>
    );
};


export default Snooze;