import React from "react";

export const TableList = () => {
  return (
    <div>
      <div className='row mt-5'>
        <div className='col-md'>
          <h3 className='text-center'>Task Entry List</h3>
          <hr />
          <table className='table table-striped table-hover border'>
            <tbody id='entry'></tbody>
          </table>
        </div>

        <div className='col-md'>
          <h3 className='text-center'>Bad List</h3>
          <hr />
          <table className='table table-striped table-hover border'>
            <tbody id='bad'></tbody>
          </table>
          <p>
            Total hrs you could have saved = <span id='badTotal'>0</span> hr
          </p>
        </div>
      </div>
    </div>
  );
};
