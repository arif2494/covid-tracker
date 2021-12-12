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

const HistoryChart = ({ data }) => {
  return (
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

          <Bar dataKey='negative' fill='#16a34a' />
        </BarChart>
      </ResponsiveContainer>
      <h4 className='my-2 text-center text-green-600'>
        People Recovered from Covid:19 In USA
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

          <Bar dataKey='pending' fill='#0284c7' />
        </BarChart>
      </ResponsiveContainer>
      <h4 className='my-2 text-center text-sky-600'>
        People now fighting with from Covid:19 In USA
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
  );
};

export default HistoryChart;
