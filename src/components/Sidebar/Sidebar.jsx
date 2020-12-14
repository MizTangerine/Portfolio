import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, useLocation } from 'react-router-dom';

const items = [
    { name: 'Me', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' },
];

const Sidebar = () => {
    // const location = useLocation();

    return (
        <div >
            <h2>
                {items.map(i => (
                    <Link
                        // isActive={
                        //     location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                        // }
                        element={Link}
                        to={i.path}
                        key={i.name}
                    >
                        {i.name}
                    </Link>
                ))}
            </h2>
        </div>
    );
};

export default Sidebar;