import React, {useState} from 'react';
import {
    ClockCircleFilled, ClockCircleOutlined,
    ClockCircleTwoTone, CopyOutlined, CopyrightOutlined, CopyrightTwoTone,
    DesktopOutlined,
    FileOutlined, HomeFilled, HomeOutlined, HomeTwoTone,
    PieChartOutlined,
    TeamOutlined, TrophyOutlined, TrophyTwoTone,
    UserOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Typography, Skeleton, Layout, Menu, theme} from 'antd';

const {Header, Content, Footer, Sider} = Layout;
const {Text, Link} = Typography;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '1', <HomeOutlined/>),
    getItem('Snooze', '2', <ClockCircleOutlined/>),
    getItem('Other', 'sub1', <TrophyOutlined/>),
];

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout className="site-layout">
                <Header style={{padding: 0, background: colorBgContainer}}/>
                <Content style={{margin: '0 16px'}}>
                    <Skeleton active/>
                    <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                        <Skeleton active/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    <Text strong>Versus </Text>
                    <CopyrightOutlined/>
                    <Text strong>2022 ✨ </Text>
                    <Link href="https://github.com/stkeky" target="_blank">@stkeky</Link>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;