import Layout from '../layout';
import Link from "next/link";

import React, { Component } from 'react';

import PageTitle from "../components/PageTitle";

class Index extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Populer Links"></PageTitle>
        <div className="container list-container">

          <Link href="/videos?type=series">
            <div className="category">
              <div className="image-area">
                <h2>Series</h2>
              </div>
              <p>Populer Series</p>
            </div>
          </Link>

          <Link href="/videos?type=movie">
            <div className="category">
              <div className="image-area">
                <h2>Movies</h2>
              </div>
              <p>Populer Movies</p>
            </div>
          </Link>

        </div>
      </Layout>
    );
  }
}

export default Index;
