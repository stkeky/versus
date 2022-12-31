import React, {useState} from 'react';
import {Link as RouteLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Snooze from "./components/Snooze";
import Other from "./components/Other";
import NoMatch from "./components/NoMatch";
import SideMenu from "./components/SideMenu";
import {Container} from "semantic-ui-react";



const App: React.FC = () => {

    return (
        <Container style={{minHeight: '100vh'}}>
            <SideMenu></SideMenu>

            <Container className="site-layout"  style={{marginLeft: 220}}>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/snooze" element={<Snooze/>}></Route>
                    <Route path="/other" element={<Other/>}></Route>
                    <Route path="*" element={<NoMatch/>}></Route>
                </Routes>

            </Container>
        </Container>
    );
};

export default App;