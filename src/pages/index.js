import Layout from '../layout';
import React, { Component } from 'react';

import PageTitle from "../components/PageTitle";

class Index extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Populer Links"></PageTitle>
        <h1>Burası index</h1>
      </Layout>
    );
  }
}

export default Index;
