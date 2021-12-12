import {
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import StateOverview from "../components/StateOverview";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.covidtracking.com/v1/states/current.json"
  );
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { state: ninja.state.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.state;

  const res = await fetch(
    `https://api.covidtracking.com/v1/states/${id.toLowerCase()}/daily.json`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const Details = ({ data }) => {
  return (
    <div>
      <div className='container mx-auto'>
        <h2 className='text-3xl text-center my-2'>
          Showing The Data of &quot; {data[0].state} &quot; State of America
        </h2>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <StateOverview data={data[0]}></StateOverview>
          </div>
          <div>
            <div style={{ width: "100%" }}>
              <h1 className='text-center font-semibold my-2 text-xl underline decoration-indigo-600'>
                Statistics Report of Covid-19 USA
              </h1>
              <ResponsiveContainer width='100%' height={200}>
                <BarChart
                  width={150}
                  height={40}
                  data={data}
                  syncId='anyId'
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='date' />
                  <YAxis />
                  <Tooltip />

                  <Bar dataKey='positive' fill='#dc2626' />
                </BarChart>
              </ResponsiveContainer>
              <h4 className='my-2 text-center text-red-600'>
                People Affected by Covid:19 In USA
              </h4>

              <ResponsiveContainer width='100%' height={200}>
                <BarChart
                  width={150}
                  height={40}
                  data={data}
                  syncId='anyId'
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='date' />
                  <YAxis />
                  <Tooltip />

                  <Bar dataKey='totalTestResults' fill='#16a34a' />
                </BarChart>
              </ResponsiveContainer>
              <h4 className='my-2 text-center text-green-600'>
                Total test of Covid:19 In USA
              </h4>
              <ResponsiveContainer width='100%' height={200}>
                <BarChart
                  width={150}
                  height={40}
                  data={data}
                  syncId='anyId'
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='date' />
                  <YAxis />
                  <Tooltip />

                  <Bar dataKey='hospitalizedCurrently' fill='#0284c7' />
                </BarChart>
              </ResponsiveContainer>
              <h4 className='my-2 text-center text-sky-600'>
                People hospitalized from Covid:19 In USA
              </h4>
              <ResponsiveContainer width='100%' height={230}>
                <BarChart
                  width={150}
                  height={40}
                  data={data}
                  syncId='anyId'
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='date' />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey='death' fill='#d97706' />
                  <Brush />
                </BarChart>
              </ResponsiveContainer>
              <h4 className='my-2 text-center text-amber-600'>
                People died from Covid:19 In USA
              </h4>
              <Brush />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
