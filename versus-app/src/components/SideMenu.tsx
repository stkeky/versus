import React, {useState} from 'react';
import {Image, Menu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";


const Home: React.FC = () => {
    const [active, setActive] = useState("home");


    return (
        <Menu fixed="left" vertical inverted={true}>
            <Menu.Item>
                <Image src="https://source.boringavatars.com/bauhaus/120" style={{height: 28}}/>
            </Menu.Item>
            <Menu.Item as={NavLink} to="/" name="home" active={active === "home"}
                       onClick={() => setActive("home")} link={true}/>

            <Menu.Item as={NavLink} to="/snooze" name="snooze" active={active === "snooze"}
                       onClick={() => setActive("snooze")} link={true}/>

            <Menu.Item as={NavLink} to="/other" name="other" active={active === "other"}
                       onClick={() => setActive("other")} link={true}/>

            <Menu.Item name="versus" active={false}
                       style={{position: "absolute", bottom: 25, left: 0, width: "100%"}}>
                <code>v0.0.1</code>
            </Menu.Item>
        </Menu>
    );
};

export default Home;