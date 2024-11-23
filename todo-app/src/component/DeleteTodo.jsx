const DeleteTodo = ({ taskId, task, taskList, setTaskList }) => {
  const handleDelete = () => {
    const updateTask = taskList.filter((item) => item.id !== taskId);
    setTaskList(updateTask);
  };
  return (
    <li>
      {task}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default DeleteTodo;
