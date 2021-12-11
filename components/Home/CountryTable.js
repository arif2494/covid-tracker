const CountryTable = () => {
  return (
    <div>
      <div className='table w-full '>
        <div className='table-header-group '>
          <div className='table-row'>
            <div className='table-cell text-left '>Country</div>
            <div className='table-cell text-right '>Confirmed</div>
            <div className='table-cell text-right '>Active</div>
            <div className='table-cell text-right '>Recovered</div>
            <div className='table-cell text-right '>Tested</div>
          </div>
        </div>
        <div className='table-row-group'>
          <div className='table-row'>
            <div className='table-cell text-left'>Bangladesh</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
          </div>
          <div className='table-row'>
            <div className='table-cell text-left'>Australia </div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
          </div>
          <div className='table-row'>
            <div className='table-cell text-left'>Qatar</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
            <div className='table-cell text-right'>123456</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryTable;
