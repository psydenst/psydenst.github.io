// import React from 'react';
// import App from 'next/app';
import '../styles/global.css'; // Assuming you have a global stylesheet
import Layout from '../components/layout';

function MyApp({ Component, PageProps }) {
    return ( 
    <Layout>
        <Component {...PageProps} />
    </Layout>
    );
}

export default MyApp;
