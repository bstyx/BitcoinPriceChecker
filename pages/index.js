import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Price from "../components/Price";

const Index = props => (
  <Layout>
    <div>
      <h1 className="text-center m-5">Crypto Tracker</h1>
      <Price bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;
