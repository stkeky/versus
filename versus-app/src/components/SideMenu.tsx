import React, {useState} from 'react';
import {Icon, Image, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from "./../logo192.png";


const SideMenu: React.FC = () => {
    const [activeItem, setActive] = useState("home");


    return (
        <Menu fixed="left" vertical inverted={true} color="teal" icon="labeled" borderless tabular compact>
            <Menu.Item>
                <Image src={logo} style={{height: 50}}/>
            </Menu.Item>

            <Menu.Item as={Link} to="/versus"
                       name="home" active={activeItem === "home"}
                       onClick={() => setActive("home")} link={true}>
                <Icon name='home'/> Home
            </Menu.Item>

            <Menu.Item as={Link} to="/versus/snooze" name="snooze" active={activeItem === "snooze"}
                       onClick={() => setActive("snooze")} link={true}>
                <Icon name='clock'/> Snooze
            </Menu.Item>

            <Menu.Item name="versus" active={false}
                       style={{position: "absolute", bottom: 5, left: 0, width: "100%"}}>
                <code>v0.0.1</code>
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;