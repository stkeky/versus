import React from 'react';
import {Layout, Skeleton, theme, Typography} from 'antd';

const {Content} = Layout;
const {Text} = Typography;


const Snooze: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Content style={{margin: '0 16px'}}>
            <Skeleton active/>
            <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                <Text strong>Snooze</Text>
                <Skeleton active/>
            </div>
        </Content>
    );
};


export default Snooze;