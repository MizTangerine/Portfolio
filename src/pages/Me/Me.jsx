import React from 'react';
import Layout from '../../components/Layout';

const Me = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <h2>About Me</h2>
                <p>{user.basics.summary}</p>
            </div>
            <div>
                <h2>Skills</h2>
                <div>
                    {user.skills.map(skill => (
                        <div key={skill.name}>{skill.name}</div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Profiles</h2>
                <ul>
                    {user.basics.profiles.map((profile, i) => (
                        <div key={profile.network}>
                            {i !== 0 && ' | '}
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </a>
                        </div>
                        // <></>
                    ))}
                </ul>
            </div>
        </Layout >
    );
};

export default Me;