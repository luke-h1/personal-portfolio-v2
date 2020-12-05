import React from 'react';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import Image5 from '../../../static/Image5.jpeg';

const Automation = () => (
  <Layout>
    <ProjectPage
      title="Breaking Bad Quotes App"
      src={Image5}
      alt="Macbook in Dark room"
      desc=" In this project I built a quote app that uses React hooks to display random breaking bad quotes."
      github="https://github.com/luke-h1/breaking-bad-quotes-react"
      site="https://breaking-bad-quotes.vercel.app/"
    />
  </Layout>
);

export default Automation;