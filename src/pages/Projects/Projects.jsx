import React from 'react';
import Layout from '../../components/Layout';

const Projects = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <h2>Projects</h2>
                <ul>
                    {user.projects.map((project, i) => (
                        <li key={i}>
                            <h3>{project.name}</h3>
                            <p>{project.summary}</p>
                            <h3>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <div key={j}>{item}</div>
                                ))}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Projects;