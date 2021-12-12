import CountryTable from "../components/Home/CountryTable";
import HistoryChart from "../components/Home/HistoryChart";
import OverView from "../components/Home/OverView";

export const getServerSideProps = async () => {
  const res = await fetch("https://api.covidtracking.com/v1/us/current.json");
  const data = await res.json();
  const res2 = await fetch(
    "https://api.covidtracking.com/v1/states/current.json"
  );
  const countryData = await res2.json();
  const res3 = await fetch("https://api.covidtracking.com/v1/us/daily.json");
  const historyData = await res3.json();

  if (!data || !countryData || !historyData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      countryData,
      historyData,
    },
  };
};
export default function Home({ data, countryData, historyData }) {
  return (
    <div className='container mx-auto'>
      <OverView data={data}></OverView>
      <div className='grid grid-cols-2 gap-4'>
        <CountryTable data={countryData}></CountryTable>
        <HistoryChart data={historyData}></HistoryChart>
      </div>
    </div>
  );
}
