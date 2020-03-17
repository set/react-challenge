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
          <div className="container">
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Collection Statement</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Manage Account</a></li>
              </ul>
            </nav>
            <p>Copyright 2016 DEMO Streaming. All Right Reserved</p>
            <div className="social">
              <div className="media-links">
                <a href="#"><img src="/images/social/facebook-white.svg" alt=""/></a>
                <a href="#"><img src="/images/social/twitter-white.svg" alt=""/></a>
                <a href="#"><img src="/images/social/instagram-white.svg" alt=""/></a>
              </div>
              <div className="downloads">
                <a href="#"><img src="/images/store/play-store.svg" alt=""/></a>
                <a href="#"><img src="/images/store/app-store.svg" alt=""/></a>
                <a href="#"><img src="/images/store/windows-store.svg" alt=""/></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
