import CountryTable from "../components/Home/CountryTable";
import OverView from "../components/Home/OverView";

export const getServerSideProps = async () => {
  const res = await fetch("https://corona.lmao.ninja/v2/all?yesterday");
  const data = await res.json();
  const res2 = await fetch(
    "https://corona.lmao.ninja/v2/countries?yesterday&sort"
  );
  const countryData = await res2.json();

  if (!data || !countryData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      countryData,
    },
  };
};
export default function Home({ data, countryData }) {
  return (
    <div className='container mx-auto'>
      <OverView data={data}></OverView>
      <div className='grid grid-cols-2'>
        <CountryTable data={countryData}></CountryTable>
      </div>
    </div>
  );
}
