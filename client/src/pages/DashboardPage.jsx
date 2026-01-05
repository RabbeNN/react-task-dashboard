import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "klar").length;
  const ongoing = tasks.filter((t) => t.status === "pågående").length;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Välkommen! Här är din task-statistik:</p>
      <ul>
        <li>Total tasks: {total}</li>
        <li>Ongoing: {ongoing}</li>
        <li>Done: {done}</li>
      </ul>
    </div>
  );
}
