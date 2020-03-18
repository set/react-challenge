import Layout from "../layout";
import PageTitle from "../components/PageTitle";

export default function Custom404() {
  return (
    <Layout>
      <PageTitle title="Not Found"></PageTitle>
      <p>Something went wrong</p>
    </Layout>
  );
}