import React from 'react';
import {Avatar, Card, Col, Divider, Layout, Progress, Row, Space, theme, Typography} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";

import data from "./../db.json";

const {Content} = Layout;
const {Title} = Typography;

const {Meta} = Card;

const Snooze: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Content style={{margin: '0 0px'}}>
            <div style={{padding: 24, minHeight: "100%", background: colorBgContainer}}>
                <Title level={2}>Snooze</Title>

                <Divider/>

                <Row>
                    <Col span={4}>
                        <Card
                            hoverable

                            cover={
                                <img
                                    alt="stkeky"
                                    src="https://avatars.githubusercontent.com/u/16312404?v=4"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://source.boringavatars.com/bauhaus/120"/>}
                                title="stkeky"
                                description="Contender number one"
                            />
                        </Card>
                    </Col>
                    <Col span={2}>
                        <Space style={{margin:10}}>
                            <Progress type="circle" percent={data.stkeky.streak} format={(percent) => `${percent} Days`}/>
                        </Space>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={2}>
                        <Space style={{margin:10}}>
                            <Progress type="circle" percent={data.snooze.streak} format={(percent) => `${percent} Days`}/>
                        </Space>
                    </Col>
                    <Col span={4}>
                        <Card
                            hoverable

                            cover={
                                <img
                                    alt="Snooze button"
                                    src="https://cdn-icons-png.flaticon.com/512/9188/9188917.png"
                                />
                            }
                            actions={[
                                <SettingOutlined key="setting"/>,
                                <EditOutlined key="edit"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://source.boringavatars.com/bauhaus/120"/>}
                                title="Snooze button"
                                description="Contender number two"
                            />
                        </Card>
                    </Col>
                </Row>

            </div>
        </Content>
    );
};


export default Snooze;