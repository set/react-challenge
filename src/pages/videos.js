import Layout from "../layout";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import React from "react";

function Videos ({ videos, type }) {
  const list = videos.map((video, i) => (
    <Link href="/" key={i}>
      <div className="video">
        <img src={video.images['Poster Art'].url} loading="lazy" alt=""/>
        <p>{ video.title }</p>
      </div>
    </Link>
    )
  );

  return (
    <Layout>
      <PageTitle title={`Popular ${type}`}></PageTitle>
      <div className="container list-container">

        { list }

      </div>
    </Layout>
  );
};

Videos.getInitialProps = async ctx => {
  const res = await import('../data/data.json');
  return {
    type: ctx.query.type,
    videos: res.entries.filter(item => item.programType === ctx.query.type),
  };
};

export default Videos;
