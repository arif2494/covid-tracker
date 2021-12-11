import CountryTable from "../components/Home/CountryTable";
import OverView from "../components/Home/OverView";

export const getStaticProps = async () => {
  const res = await fetch("https://corona.lmao.ninja/v2/all?yesterday");
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
export default function Home({ data }) {
  return (
    <div className='container mx-auto'>
      <OverView data={data}></OverView>
      <div className='grid grid-cols-2'>
        <CountryTable></CountryTable>
      </div>
    </div>
  );
}
