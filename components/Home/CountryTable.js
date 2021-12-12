import Link from "next/link";

const CountryTable = ({ data }) => {
  return (
    <div className='mt-6'>
      <h2 className='my-2 text-center text-2xl underline decoration-sky-500'>
        Reported Cases and Deaths of All USA States
      </h2>
      <div className='grid grid-cols-1'>
        <div className='inline-grid grid-cols-6 gap-1 mb-1'>
          <div className='py-3 px-6 font-semibold  bg-slate-300 text-slate-700 rounded'>
            State
          </div>
          <div className='py-3 px-6 font-semibold  bg-slate-300 text-slate-700 rounded'>
            Positive
          </div>
          <div className='py-3 px-6 font-semibold  bg-slate-300 text-slate-700 rounded'>
            Negative
          </div>
          <div className='py-3 px-6 font-semibold  bg-slate-300 text-slate-700 rounded'>
            Hospitalized
          </div>
          <div className='py-3 px-6 font-semibold  bg-slate-300 text-slate-700 rounded'>
            Tested
          </div>
          <div className='py-3 px-6 font-semibold  bg-slate-300 text-slate-700 rounded'>
            Death
          </div>
        </div>
      </div>

      {data.map((country, index) => (
        <div key={country.state} className='grid grid-cols-1'>
          <div className='inline-grid grid-cols-6 gap-1 mb-1 '>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-slate-50 text-slate-600 rounded hover:underline "
                  : "py-3 px-6 bg-slate-100 text-slate-600 rounded hover:underline "
              }
            >
              <Link href={"/" + country.state}>
                <a> {country.state}</a>
              </Link>
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-slate-50 text-slate-600 rounded"
                  : "py-3 px-6 bg-slate-100 text-slate-600 rounded"
              }
            >
              {country.positive}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-slate-50 text-slate-600 rounded"
                  : "py-3 px-6 bg-slate-100 text-slate-600 rounded"
              }
            >
              {country.negative}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-slate-50 text-slate-600 rounded"
                  : "py-3 px-6 bg-slate-100 text-slate-600 rounded"
              }
            >
              {country.hospitalized}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-slate-50 text-slate-600 rounded"
                  : "py-3 px-6 bg-slate-100 text-slate-600 rounded"
              }
            >
              {country.totalTestResults}
            </div>
            <div
              className={
                index % 2 === 0
                  ? "py-3 px-6 bg-slate-50 text-slate-600 rounded"
                  : "py-3 px-6 bg-slate-100 text-slate-600 rounded"
              }
            >
              {country.death}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryTable;
