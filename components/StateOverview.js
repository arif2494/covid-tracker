import { format } from "date-fns";

const StateOverview = ({ data }) => {
  return (
    <div>
      {/* over view */}
      <div className='grid grid-cols-2 my-5 gap-8'>
        <div className='h-44 text-red-600 bg-red-100   flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-red-200 shadow-lg shadow-red-400/40'>
          <h2 className='text-2xl'>Currently Affected</h2>
          <p className='text-2xl font-bold'>{data.positive}</p>
        </div>
        <div className='h-44 text-amber-600 bg-amber-100  flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-amber-200 shadow-lg shadow-amber-400/40'>
          <h2 className='text-2xl'>Currently Death</h2>
          <p className='text-2xl font-bold'>{data.death}</p>
        </div>
        <div className='h-44 text-sky-600 bg-sky-100 flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-sky-200 shadow-lg shadow-sky-400/40'>
          <h2 className='text-2xl'>Total Test Result</h2>
          <p className='text-2xl font-bold'>{data.totalTestResults}</p>
        </div>
        <div className='h-44 text-green-600 bg-green-100  flex justify-center items-center flex-col space-y-4 rounded-2xl hover:bg-green-200 shadow-lg shadow-green-400/40'>
          <h2 className='text-2xl'>Currently Hospitalizrd</h2>
          <p className='text-2xl font-bold'>{data.hospitalizedCurrently}</p>
        </div>
      </div>
      <p className='text-xs text-gray-400'>
        Data Updated Today : {format(new Date(data.date), "hh-mm-a")}
      </p>
    </div>
  );
};

export default StateOverview;
