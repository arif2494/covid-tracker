import { format } from "date-fns";

const OverView = ({ data }) => {
  return (
    <div>
      <h2 className='my-2 text-4xl text-center'>Showing All Updated State</h2>
      <div className='grid grid-cols-4 my-5 gap-x-8'>
        <div className='h-44 text-red-600 bg-red-100   flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-red-200 shadow-lg shadow-red-400/40'>
          <h2 className='text-2xl'>Today Affected</h2>
          <p className='text-2xl font-bold'>{data.todayCases}</p>
        </div>
        <div className='h-44 text-amber-600 bg-amber-100  flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-amber-200 shadow-lg shadow-amber-400/40'>
          <h2 className='text-2xl'>Today Death</h2>
          <p className='text-2xl font-bold'>{data.todayDeaths}</p>
        </div>
        <div className='h-44 text-sky-600 bg-sky-100 flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-sky-200 shadow-lg shadow-sky-400/40'>
          <h2 className='text-2xl'>Active</h2>
          <p className='text-2xl font-bold'>{data.active}</p>
        </div>
        <div className='h-44 text-green-600 bg-green-100  flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-green-200 shadow-lg shadow-green-400/40'>
          <h2 className='text-2xl'>Today Recovered</h2>
          <p className='text-2xl font-bold'>{data.todayRecovered}</p>
        </div>
      </div>
      <p className='text-xs text-gray-400'>
        Data Updated Today : {format(new Date(data.updated), "mm-hh-a")}
      </p>
    </div>
  );
};

export default OverView;
