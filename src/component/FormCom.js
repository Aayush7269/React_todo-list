import React from 'react';
import { TableList } from '../component/TableList';


export const FormCom = () => {
  return (
    <div>
    <div>
   <form action="">
          <div
            class="row g-2 mt-5 border rounded-4 p-3 py-5 bg-light shadow-lg"
          >
            <div class="col-md-7">
              <input
                name="task"
                type="text"
                class="form-control"
                placeholder="Your tasks"
                value="Coding"
                required
              />
            </div>
            <div class="col-md-2">
              <input
                name="hr"
                type="number"
                class="form-control"
                placeholder="33"
                value="9"
                required
              />
            </div>
            <div class="col-md-3 d-grid">
              <button class="btn btn-primary">
                <i class="fa-solid fa-plus"></i>
                Add New Task
              </button>
            </div>
          </div>
        </form>
        <TableList />

    </div>
   
    </div>
  )
}
