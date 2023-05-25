import "./App.css";
import { FormCom } from "./component/FormCom";
import { TableList } from "./component/TableList";

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col mt-5 text-center'>
            <h1>Not to do list</h1>
          </div>
        </div>

        <FormCom />
        <TableList />
      </div>
    </div>
  );
}

export default App;
