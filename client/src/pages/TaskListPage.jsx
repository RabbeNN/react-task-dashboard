import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import TaskItem from "../components/TaskItem";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <Link to="/tasks/new">+ Add Task</Link>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
