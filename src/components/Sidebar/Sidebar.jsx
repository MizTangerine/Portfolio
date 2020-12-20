import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

import * as CgIcons from 'react-icons/cg';
import * as GiIcons from 'react-icons/gi';

import { SidebarData } from './SidebarData.js'
import './Sidebar.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <ul className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <GiIcons.GiHamburgerMenu onClick={showSidebar} />
                    </Link>
                    {SidebarData.map(i => {
                        return (
                            <li className={i.cName} key={i.title}>
                                <Link
                                    element={Link}
                                    to={i.path}
                                >
                                    {i.icon}
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <CgIcons.CgCloseR />
                            </Link>
                        </li>
                        {SidebarData.map(i => {
                            return (
                                <li className={i.cName} key={i.title}>
                                    <Link
                                        element={Link}
                                        to={i.path}
                                    >
                                        {i.icon}<span>{i.title}</span>
                                    </Link>
                                </li>
                            )
                        }
                        )}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}



//     return (
//         <div >
//             <h2>
//                 {SidebarData.map(i => (
//                     <Link
//                         isActive={
//                             location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
//                         }
//                         element={Link}
//                         to={i.path}
//                         key={i.title}
//                     >
//                         {i.icon}{i.title}
//                     </Link>
//                 ))}
//             </h2>
//         </div>
//     );
// };

export default Sidebar;