import Link from 'next/link';
import Head from 'next/head';
import React, { Component } from 'react';
import '../assets/styles/style.scss';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Watch App</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <header>
          <nav className="primary">
            <div className="container">
              <a href="/" className="brand">DEMO Streaming</a>
              <ul>
                <li><a>Login</a></li>
                <li><a className="secondary-button">Start your free trial</a></li>
              </ul>
            </div>
          </nav>
        </header>

        {this.props.children}

        <footer>

        </footer>
      </div>
    );
  }
}

export default Layout;
