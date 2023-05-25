import React, { useState } from "react";

import { TableList } from "../component/TableList";

export const FormCom = () => {
  // const TaskList = [];

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [hr, setHr] = useState("");

  const handleOnChange = (e) => {
    if (e.target.ariaLabel === "task") {
      const { value } = e.target;
      setTask(value);
      console.log(`this is from task ${value}`);
      // console.log(e);
    } else {
      const { value } = e.target;
      setHr(value);
      console.log(`this is from Hr ${value}`);
      // console.log(e);
    }
  };

  //handleOnsubmit
  const id = "1";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const newTask = FormData(e);
    // setTask(newTask.get("task"));
    // setHr(newTask.get("hr"));

    let taskObj = {
      id,
      task,
      hr,
      type: "Entry",
    };

    setTaskList([...taskList, taskObj]);

    // console.log(taskObj);
  };
  console.log(taskList);

  return (
    <div>
      <div>
        <form
          action=''
          onSubmit={handleOnSubmit}
        >
          <div className='row g-2 mt-5 border rounded-4 p-3 py-5 bg-light shadow-lg'>
            <div className='col-md-7'>
              <input
                name='task'
                type='text'
                className='form-control'
                placeholder='Your tasks'
                onChange={handleOnChange}
                aria-label='task'
                required
              />
            </div>
            <div className='col-md-2'>
              <input
                name='hr'
                type='number'
                className='form-control'
                placeholder='33'
                onChange={handleOnChange}
                aria-label='hr'
                required
              />
            </div>
            <div className='col-md-3 d-grid'>
              <button className='btn btn-primary'>
                <i className='fa-solid fa-plus'></i>
                Add New Task
              </button>
            </div>
          </div>
        </form>
        <TableList />
      </div>
    </div>
  );
};
