import './App.css';
import { useState } from 'react';
import Task from './Task';

function App() {
  const [works, setWorks] = useState([]);
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  }

  const handleAddWork = () => {
    const task = {
      id: works.length === 0 ? 1 : works[works.length - 1].id + 1,
      taskName: value,
      taskDone: false,
    }
    setValue("");
    setWorks([...works, task]);
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddWork();
    }
  }

  const handleDeleteWork = (id) => {
    setWorks(works.filter((work) => work.id !== id));
  }

  const handleDoneWork = (id) => {
    setWorks(
      works.map((work) => {
        if (work.id === id) {
          return { ...work, taskDone: true, }
        } else {
          return work;
        }
      })
    )
  }

  return (
    <div className="App">
      <h1>Learn a ReactJS HOOK with Quoc Duy</h1>

      <h3>To Do App</h3>
      <br />

      <input type="text" onChange={handleValue} value={value} onKeyPress={handleEnter} />
      <button onClick={handleAddWork}>Add</button>
      <br />

      {works && works.length > 0 &&
        <ul>
          {works.map((work) => {
            return (
              <Task id={work.id} taskName={work.taskName} doned={work.taskDone} deleteWork={handleDeleteWork} doneWork={handleDoneWork} />
            )
          })}
        </ul>
      }


    </div>
  );
}

export default App;
