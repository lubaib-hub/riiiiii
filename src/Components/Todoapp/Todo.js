import React, { useState, useEffect } from "react";
import "./Todo.css";
import Addtask from "./Addtask";
import Listtask from "./Listtask";
const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = `bab! you have ${tasks.length} pending task(s)`;
  });

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">DrToBe</div>

        <div className="add-task">
          <Addtask addTask={addTask} />
        </div>

        <div className="list-task">
          {tasks.map((task, index) => (
            <Listtask
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
