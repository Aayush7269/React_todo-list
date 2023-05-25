import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TableList } from "../component/TableList";
// import { v4 as uuid } from "uuid";

export const FormCom = () => {
  // const TaskList = [];

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [hr, setHr] = useState("");

  const handleOnChange = (e) => {
    if (e.target.ariaLabel === "task") {
      const { value } = e.target;
      setTask(value);
      // console.log(`this is from task ${value}`);
      // console.log(e);
    } else {
      const { value } = e.target;
      setHr(value);
      // console.log(`this is from Hr ${value}`);
      // console.log(e);
    }
  };

  //handleOnsubmit

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const newTask = FormData(e);
    // setTask(newTask.get("task"));
    // setHr(newTask.get("hr"));

    // const pass = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;
    // let ids = "";
    // const charLength = 6;
    // for (let i; i < charLength; i++) {
    //   const ranNum = Math.round(Math.random() * (pass.length - 1));
    //   ids += pass[ranNum];
    //   // setId(+pass[ranNum]);
    //   console.log(setId(ids));
    // }

    // creating unique Ids==============================

    const uid = uuidv4();
    // Slicing uid in 6 length
    const fid = uid.slice(0, 6);

    // console.log(setId(uid.slice(0, 6)));

    let taskObj = {
      id: fid,
      task,
      hr,
      type: "Entry",
    };
    setTaskList([...taskList, taskObj]);

    // console.log(taskObj);
  };
  console.log(taskList);

  const entryArg = taskList.filter((item) => {
    return item.type === "Entry";
  });

  return (
    <div>
      <div>
        <form action='' onSubmit={handleOnSubmit}>
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
        <TableList array={entryArg} />
      </div>
    </div>
  );
};
