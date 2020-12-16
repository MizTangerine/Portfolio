import React from 'react';
import Layout from '../../components/Layout';

const Education = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <h2>Education/Licenses</h2>
                <ul>
                    {user.education.map((education, i) => (
                        <li key={i}>
                            <h3>{education.position}</h3>
                            <div>
                                <h4>
                                    {education.studyType}, {education.area}
                                </h4>{' '}
                                <span> &sdot; </span>
                                <span>
                                    {education.start.year} to {education.end.year}
                                </span>
                            </div>
                            <p>{education.description.replace('\n\n', '\n')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Education;