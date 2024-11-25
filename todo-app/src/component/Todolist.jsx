// import { useState } from "react";
// import { v4 as uuid } from "uuid";
// import AddTodo from "./AddTodo";
// import DeleteTodo from "./DeleteTodo";

// const Todolist = () => {
//   const [task, setTask] = useState(""); // task

//   // tasklist is an empty array
//   const [taskList, setTaskList] = useState([]); // stores the task list when we click btn or add task echa time

//   return (
//     <div>
//       <h1>Todo List</h1>
//       {/* passing props to to addtodo */}
//       <AddTodo
//         task={task}
//         setTask={setTask}
//         taskList={taskList}
//         setTaskList={setTaskList} // attaching uuid
//       />

//       <ul>
//         {taskList.map((item) => (
//           <DeleteTodo
//             key={item.id} // Use unique key (id) from task object
//             taskId={item.id}
//             task={item.task}
//             taskList={taskList}
//             setTaskList={setTaskList}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todolist;

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";

const Todolist = () => {
  const [task, setTask] = useState(""); // task

  // tasklist is an empty array
  const [taskList, setTaskList] = useState([]); // stores the task list when we click btn or add task echa time

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(
          "https://fake-api-kf7b.onrender.com/todos"
        );
        const data = await response.json();
        console.log(data);

        setTaskList(data); // storing fetched data
      } catch (error) {
        console.error("Error Fetching task:", error);
      }
    };
    fetchTask();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {/* passing props to to addtodo */}
      <AddTodo
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList} // attaching uuid
      />

      <ul>
        {taskList.length > 0 ? (
          taskList.map((item) => (
            <DeleteTodo
              key={item.id}
              taskId={item.id}
              task={item.task} // Display the task text
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))
        ) : (
          <p>No tasks available.</p> // Show message when no tasks are available
        )}
      </ul>
    </div>
  );
};

export default Todolist;

