import Layout from '../layout';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';

import React from 'react';

export default class Videos extends React.Component {
  static async getInitialProps({ query }) {
    const res = await import('../data/data.json');
    return {
      type: query.type,
      videos: res.entries.filter(
        item => item.programType === query.type && item.releaseYear >= 2010
      )
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      keyword: null,
      sortBy: 'titleAsc',
      videos: this.props.videos
    };

    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  listVideos() {
    this.setState({
      videos: this.state.videos.sort((a, b) => {
        switch (this.state.sortBy) {
          case 'releaseYearAsc':
            return a.releaseYear > b.releaseYear ? 1 : -1;
            break;
          case 'releaseYearDesc':
            return a.releaseYear < b.releaseYear ? 1 : -1;
            break;
          case 'titleAsc':
            return a.title > b.title ? 1 : -1;
            break;
          case 'titleDesc':
            return a.title < b.title ? 1 : -1;
            break;
        }
      })
    });
  }

  componentDidMount() {
    this.listVideos();
  }

  handleChangeSort(event) {
    this.setState({
      sortBy: event.target.value
    });
    setTimeout(() => {
      this.listVideos();
    }, 500);
  }

  async handleSearch(event) {
    const keyword = event.target.value.length > 2 ? event.target.value : null;
    this.setState({
      keyword,
    });
    setTimeout(() => {
      this.listVideos();
    }, 500);
  }

  render() {
    const videos = this.state.videos.filter(video => {
      if( this.state.keyword ) {
        return video.title.search(new RegExp(this.state.keyword, 'i')) > -1
      } return true;
    }).slice(0, 21).map((video, i) => (
      <Link href="/" key={i}>
        <div className="video">
          <img src={video.images['Poster Art'].url} loading="lazy" alt="" />
          <p>
            {video.title} - {video.releaseYear}
          </p>
        </div>
      </Link>
    ));
    return (
      <Layout>
        <PageTitle title={`Popular ${this.props.type}`}></PageTitle>
        <div className="container filters">
          <div className="filter-input">
            <input type="text" placeholder="Search..." onChange={this.handleSearch} />
          </div>
          <div className="sorting">
            <select value={this.state.sortBy} onChange={this.handleChangeSort}>
              <option value="releaseYearAsc">Release Year ASC</option>
              <option value="releaseYearDesc">Release Year DESC</option>
              <option value="titleAsc">Title ASC</option>
              <option value="titleDesc">Title DESC</option>
            </select>
          </div>
        </div>
        <div className="container list-container">{videos}</div>
      </Layout>
    );
  }
}
