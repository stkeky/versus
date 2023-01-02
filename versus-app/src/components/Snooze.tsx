import React, {Fragment} from 'react';

import data from "./../db.json";
import {Card, Divider, Grid, Header, Icon, Image, List, Segment} from "semantic-ui-react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import 'react-calendar-heatmap/dist/styles.css';
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

    const heatmap = data.timeline.map(x => ({"date": new Date(x.date) , "count": x.stkeky.points + x.stkeky.supporters.length - x.snooze.points - x.snooze.supporters.length}))

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
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
                                        <CircularProgressbar value={stkekyTotal} maxValue={100} text={`${stkekyTotal} Points`} />
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Segment>
                                        <CircularProgressbar value={snoozeTotal} maxValue={100} text={`${snoozeTotal} Points`} styles={buildStyles({pathColor: `rgba(196, 40, 36, 0.8)`, textColor: `rgba(196, 40, 36, 0.8)`})} />
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

                                            tooltipDataAttrs={(value:any) => {
                                                return {
                                                    'data-tip': value.count
                                                    }
                                                }
                                            }

                                            classForValue={(value) => {
                                                if (!value) {
                                                    return 'color-empty';
                                                }
                                                if (value.count > 0) {
                                                    return `color-gitlab-3`;
                                                } else {
                                                    return `color-github-4`;
                                                }
                                            }}

                                        />
                                        <ReactTooltip/>
                                    </Segment>
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
                                    <Card.Header>Snooze button</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>player two</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Proper sleeping habits depriving monster.
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