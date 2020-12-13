import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Layout = ({ user, children }) => {
    console.log('layout: ', user)
    return (
        <>
            <Sidebar />
            <div>
                <Header user={user} />
                <div>{children}</div>
            </div>
        </>
    );
};

export default Layout;