
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Contact from './Contact';
import Sidebar from '../components/Sidebar3';

const Pages = ({ user }) => {
    console.log('user: ', user)
    return (
        <Router>
            <Sidebar style={{ position: 'relative' }} />
            <Switch>
                <Route exact path="/">
                    <Me user={user} />
                </Route>
                <Route path="/projects">
                    <Projects user={user} />
                </Route>
                <Route path="/education">
                    <Education user={user} />
                </Route>
                <Route path="/work">
                    <Work user={user} />
                </Route>
                <Route path="/contact">
                    <Contact user={user} />
                </Route>
            </Switch>
        </Router>
    );
};

export default Pages;