import React, {useState} from 'react';
import {ClockCircleOutlined, CopyrightOutlined, HomeOutlined, TrophyOutlined,} from '@ant-design/icons';
import {Layout, Menu, theme, Typography} from 'antd';
import {Link as RouteLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Snooze from "./components/Snooze";
import Other from "./components/Other";
import NoMatch from "./components/NoMatch";

const {Footer, Sider} = Layout;
const {Text, Link} = Typography;


const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <HomeOutlined/>
                        <span>Home</span>
                        <RouteLink to="/"/>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <ClockCircleOutlined/>
                        <span>Snooze</span>
                        <RouteLink to="/snooze"/>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <TrophyOutlined/>
                        <span>Other</span>
                        <RouteLink to="/other"/>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="snooze" element={<Snooze/>}></Route>
                    <Route path="other" element={<Other/>}></Route>
                    <Route path="*" element={<NoMatch/>}></Route>
                </Routes>

                <Footer style={{textAlign: 'center', maxHeight: 40, padding: 0, background:colorBgContainer}}>
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