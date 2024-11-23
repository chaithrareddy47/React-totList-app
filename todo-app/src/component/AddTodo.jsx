import { v4 as uuid } from "uuid";

const AddTodo = ({ task, setTask, setTaskList, taskList }) => {
  const handleInputTask = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const handleAddBtn = () => {
    // console.log("button click");

    if (task.trim() === "") {
      alert("Please enter a valid task");
      return;
    }
    // console.log(task);

    // tasklist holds all teh alls enetered by user
    // here spread operator copies the previous task each time user enters the new task
    const newTask = { id: uuid(), task };
    setTaskList([...taskList, newTask]);
    // console.log(taskList);
    setTask(""); // cleras input filed
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleInputTask}
      />
      <button onClick={handleAddBtn}>Add Task</button>
    </div>
  );
};

export default AddTodo;
