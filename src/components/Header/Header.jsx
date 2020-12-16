import React from 'react';
// import { useLocation } from 'react-router-dom';

const Header = ({ user }) => {
    // const location = useLocation();
    console.log('header: ', user)

    return (
        // <div isHome={location.pathname === '/'}>
        <div>
            <>
                <img src={user.basics.picture} alt="Clarissa" />
                <div>
                    <h2>{user.basics.name}</h2>
                    <h4>
                        <a
                            href={`https://gitconnected.com/${user.basics.username}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            @{user.basics.username}
                        </a>
                    </h4>
                    <p>{user.basics.label}</p>
                    <p>From {user.basics.region}</p>
                    {/* <p>{user.basics.yearsOfExperience} years of experience as a developer</p> */}
                    <p>{user.basics.headline}</p>
                </div>
            </>
            <div>
                <h2
                    href={`https://gitconnected.com/${user.basics.username}/resume`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Résumé</span>
                </h2>
            </div>
        </div>
    );
};

export default Header;