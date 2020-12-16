import React from 'react';
import Layout from '../../components/Layout';

const Contact = ({ user }) => {
    return (
        <Layout user={user}>
            <h3>{user.basics.username}</h3>
        </Layout>
    );
};

export default Contact;