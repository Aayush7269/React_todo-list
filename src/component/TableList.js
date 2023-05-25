import React, { useState } from "react";

export const TableList = ({ array }) => {
  // const [EntryArg, setEntryArg] = useState([]);
  // setEntryArg(entryArg);
  let str = "";
  array.map((item, i) => {
    // console.log(i, item);

    str += ` {<tr>
    <td scope="row">}${i + 1}</td>
    <td>${item.task} </td>
    <td>${item.hr}</td>
    <td><button className="btn btn-sm btn-danger" onclick="onHandleDelete('${
      item.id
    }')">
            <i className="fa-solid
        fa-trash-can"></i>
            Delete</button>
        <button className="btn btn-sm btn-success" onclick="switchTask('${
          item.id
        }', 'bad')">Move To Important

            <i class="fa-solid
             fa-arrow-right"></i>
        </button>
    </td>
</tr>`;
  });

  return (
    <div>
      <div className='row mt-5'>
        <div className='col-md'>
          <h3 className='text-center'>Task Entry List</h3>
          <hr />
          <table className='table table-striped table-hover border'>
            <tbody id='entry'>{str}</tbody>
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
