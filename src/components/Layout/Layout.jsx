import React from 'react';
import Sidebar from '../Sidebar';
import Sidebar3 from '../Sidebar3';
import Header from '../Header';

const Layout = ({ user, children }) => {
    console.log('layout: ', user)
    return (
        <>
            {/* <Sidebar /> */}
            {/* <Sidebar3 /> */}
            <div>
                <Header user={user} />
                <div>{children}</div>
            </div>
        </>
    );
};

export default Layout;