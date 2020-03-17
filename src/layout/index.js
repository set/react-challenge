import Link from 'next/link';
import React, { Component } from 'react';
import "../assets/style.scss";

class Layout extends Component {
  render(){
    return (
      <div>
        <header>
          <ul>
            <li><Link href="/movies">Filmler</Link></li>
            <li><Link href="/series">Diziler</Link></li>
          </ul>
        </header>

        { this.props.children }

        <footer>

        </footer>
      </div>
    );
  }
}

export default Layout;
