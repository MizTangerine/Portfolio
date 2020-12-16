import React from 'react';
import * as Io5Icons from 'react-icons/io5';
import * as IoIcons from 'react-icons/io';
import * as CgIcons from 'react-icons/cg';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
    {
        title: 'AboutMe'
        , path: '/'
        , icon: <IoIcons.IoIosContact />
        , cName: 'nav-text'
    },
    {
        title: 'Projects'
        , path: '/projects'
        , icon: <IoIcons.IoMdConstruct />
        , cName: 'nav-text'
    },
    {
        title: 'Education/Licences'
        , path: '/education'
        , icon: <Io5Icons.IoSchoolOutline />
        , cName: 'nav-text'
    },
    {
        title: 'Experience'
        , path: '/work'
        , icon: <CgIcons.CgWorkAlt />
        , cName: 'nav-text'
    },
    {
        title: 'Contact Me'
        , path: '/contact'
        , icon: <GrIcons.GrContact />
        , cName: 'nav-text'
    },
];