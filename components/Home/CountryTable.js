const CountryTable = ({ data }) => {
  console.log(data);
  return (
    <div className='mt-6'>
      <h2 className='my-2 text-center text-2xl underline decoration-sky-500'>
        Reported Cases and Deaths by Country
      </h2>
      <div className='grid grid-cols-1'>
        <div className='inline-grid grid-cols-6 gap-1 mb-1'>
          <div className='py-3 px-6 font-semibold  bg-gray-300 text-slate-700 rounded'>
            Country
          </div>
          <div className='py-3 px-6 font-semibold  bg-gray-300 text-slate-700 rounded'>
            Confirmed
          </div>
          <div className='py-3 px-6 font-semibold  bg-gray-300 text-slate-700 rounded'>
            Active
          </div>
          <div className='py-3 px-6 font-semibold  bg-gray-300 text-slate-700 rounded'>
            Recovered
          </div>
          <div className='py-3 px-6 font-semibold  bg-gray-300 text-slate-700 rounded'>
            Tested
          </div>
          <div className='py-3 px-6 font-semibold  bg-gray-300 text-slate-700 rounded'>
            Death
          </div>
        </div>
      </div>

      {data.map((country, index) => (
        <div key={country.country} className='grid grid-cols-1'>
          <div className='inline-grid grid-cols-6 gap-1 mb-1 '>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-gray-100 text-slate-600 rounded"
                  : "py-3 px-6 bg-gray-200 text-slate-600 rounded"
              }
            >
              {country.country}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-gray-100 text-slate-600 rounded"
                  : "py-3 px-6 bg-gray-200 text-slate-600 rounded"
              }
            >
              {country.cases}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-gray-100 text-slate-600 rounded"
                  : "py-3 px-6 bg-gray-200 text-slate-600 rounded"
              }
            >
              {country.active}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-gray-100 text-slate-600 rounded"
                  : "py-3 px-6 bg-gray-200 text-slate-600 rounded"
              }
            >
              {country.recovered}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-gray-100 text-slate-600 rounded"
                  : "py-3 px-6 bg-gray-200 text-slate-600 rounded"
              }
            >
              {country.tests}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-gray-100 text-slate-600 rounded"
                  : "py-3 px-6 bg-gray-200 text-slate-600 rounded"
              }
            >
              {country.deaths}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryTable;
