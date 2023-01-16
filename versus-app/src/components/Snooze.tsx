import React, {Fragment} from 'react';

import data from "./../db.json";
import {Button, Card, Grid, Header, Icon, Image, List, Segment} from "semantic-ui-react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import 'react-calendar-heatmap/dist/styles.css';
import '../App.css';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

const Snooze: React.FC = () => {
    const stkekyRawPoints = data.timeline.reduce((sum, current) => sum + current.stkeky.points, 0);
    const snoozeRawPoints = data.timeline.reduce((sum, current) => sum + current.snooze.points, 0);
    const stkekySupporters = data.timeline.reduce((sum, current) => sum + current.stkeky.supporters.length, 0);
    const snoozeSupporters = data.timeline.reduce((sum, current) => sum + current.snooze.supporters.length, 0);
    const stkekyTotal = stkekyRawPoints + stkekySupporters
    const snoozeTotal = snoozeRawPoints + snoozeSupporters

    const stkekySupportersList = data.timeline.map(x => x.stkeky.supporters).reduce((all, current) => all.concat(current), [])
    const snoozeSupportersList = data.timeline.map(x => x.snooze.supporters).reduce((all, current) => all.concat(current), [])

    const heatmap = data.timeline.map(x => ({
        "date": new Date(x.date),
        "count": x.stkeky.points + x.stkeky.supporters.length - x.snooze.points - x.snooze.supporters.length
    }))

    return (
        <Fragment>
            <div style={{padding: 24, minHeight: "100%"}}>
                <Segment color="teal" raised>
                    <Header level={3} textAlign="center">STKEKY vs. SNOOZE BUTTON </Header>
                </Segment>

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
                                        Simple guy trying to resolve a bad habit.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Icon name='user'/>
                                    {stkekySupporters} Supporters
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={8}>
                                        <Segment>
                                            <CircularProgressbar value={stkekyTotal}
                                                                 maxValue={100} text={`${stkekyTotal} Points`}
                                                                 styles={buildStyles({
                                                                     pathColor: "#2185d0",
                                                                     textColor: "#2185d0"
                                                                 })}/>
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Segment>
                                            <CircularProgressbar value={snoozeTotal}
                                                                 maxValue={100} text={`${snoozeTotal} Points`}
                                                                 styles={buildStyles({
                                                                     pathColor: "#db2828",
                                                                     textColor: "#db2828"
                                                                 })}/>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Segment>
                                            <CalendarHeatmap

                                                startDate={new Date('2022-12-31')}
                                                endDate={new Date('2023-12-30')}
                                                values={heatmap}

                                                tooltipDataAttrs={(value: any) => {
                                                    if (value.date != null) {
                                                        return {'data-tip': `${value.date.toISOString().split('T')[0]} resulted in ${value.count}`}
                                                    } else {
                                                        return null;
                                                    }
                                                }
                                                }

                                                classForValue={(value) => {
                                                    if (!value) {
                                                        return 'color-empty';
                                                    }
                                                    if (value.count > 0) {
                                                        return `player-one`;
                                                    } else {
                                                        return `player-two`;
                                                    }
                                                }}

                                            />
                                            <ReactTooltip/>
                                        </Segment>
                                    </Grid.Column>


                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16} textAlign={"center"}>
                                        <Button.Group>
                                            <Button as="a"
                                                    href="https://github.com/stkeky/versus/issues/new?title=vs1%7Cstkeky&body=%3C%21--%20Please%20leave%20a%20comment%20and%20click%20the%20%27Submit%20new%20issue%27.%20--%3E"
                                                    color={"blue"}>Support player one</Button>
                                            <Button.Or text='or'/>
                                            <Button as="a"
                                                    href="https://github.com/stkeky/versus/issues/new?title=vs1%7Csnooze&body=%3C%21--%20Please%20leave%20a%20comment%20and%20click%20the%20%27Submit%20new%20issue%27.%20--%3E"
                                                    color={"red"}>Support player two</Button>
                                        </Button.Group>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Card key="snooze" link>
                                <Image alt="snooze"
                                       src="https://cdn-icons-png.flaticon.com/512/9188/9188917.png"

                                       wrapped ui={false}/>
                                <Card.Content>
                                    <Card.Header>snooze button</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>player two</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Monster that deprives proper sleeping habits.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Icon name='user'/>
                                    {snoozeSupporters} Supporters
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <List>
                                {stkekySupportersList.map((supporter: any) => {
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
                                {snoozeSupportersList.map((supporter: any) => {
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