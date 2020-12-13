import React from 'react';
import Layout from '../../components/Layout';

const Work = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <h2>Work</h2>
                <ul>
                    {user.work.map((work, i) => (
                        <h3 key={i}>
                            <h4>{work.position}</h4>
                            <div>
                                <h5>{work.company}</h5> <span>{work.location}</span>
                                <span> &sdot; </span>
                                <span>
                                    {work.start.year} to {work.end.year}
                                </span>
                            </div>
                            <p>{work.summary}</p>
                        </h3>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Work;