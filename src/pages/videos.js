import Layout from "../layout";

function Videos ({ videos, type }) {
  const list = videos.map((video, i) => (
    <p key={i}>{video.title} - <b>{video.releaseYear}</b></p>)
  );

  return (
    <Layout>
      <h1>Burası { type === 'movie' ? 'Filmler' : 'Diziler' }</h1>
      { list }
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
