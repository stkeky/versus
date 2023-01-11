import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Snooze from "./components/Snooze";
import NoMatch from "./components/NoMatch";
import SideMenu from "./components/SideMenu";
import {Container} from "semantic-ui-react";



const App: React.FC = () => {

    return (
        <Container style={{minHeight: '100vh'}}>
            <SideMenu></SideMenu>

            <Container className="site-layout"  style={{marginLeft: 50}}>
                <Routes>
                    <Route path="/versus" element={<Home/>}></Route>
                    <Route path="/versus/snooze" element={<Snooze/>}></Route>
                    <Route path="*" element={<NoMatch/>}></Route>
                </Routes>

            </Container>
        </Container>
    );
};

export default App;