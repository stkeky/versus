import React from 'react';
import {Layout, Skeleton, theme, Typography} from 'antd';

const {Content} = Layout;
const {Title} = Typography;


const Home: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Content style={{margin: '0 0px'}}>
            <div style={{padding: 24, minHeight: "100%", background: colorBgContainer}}>
                <Title level={2}>Home</Title>
                <Skeleton active/>
            </div>
        </Content>
    );
};

export default Home;