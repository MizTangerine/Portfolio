import React from "react";
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import SideNav, {
    Toggle,
    Nav,
    NavItem,
    NavIcon,
    NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { SidebarData } from './SidebarData.js';

import "./Sidebar.css";

const Sidebar = () => {
    const history = useHistory();
    return (
        <SideNav
            style={{
                position: 'relative',
                float: 'left',
                height: '100vh'
            }}
            onSelect={selected => {
                history.push(selected)
            }}
        >

            <SideNav.Toggle />

            <SideNav.Nav defaultSelected="home">
                {SidebarData.map(i => {
                    return (
                        <NavItem className={i.cName} eventKey={i.path} key={i.title}>
                            <NavIcon>{i.icon}</NavIcon>
                            <NavText>
                                {/* <Link
                                    element={Link}
                                    to={i.path}
                                >
                                    {i.title}
                                </Link> */}
                                {i.title}
                            </NavText>
                        </NavItem>
                    )
                }
                )}
                {/* <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                    </NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i
                            className="fa fa-fw fa-line-chart"
                            style={{ fontSize: "1.75em" }}
                        />
                    </NavIcon>
                    <NavText>Charts</NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>Line Chart</NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>Bar Chart</NavText>
                    </NavItem>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav >
    );
}

export default Sidebar;