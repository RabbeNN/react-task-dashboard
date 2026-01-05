import { useState } from "react";
import { createTask } from "../services/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function TaskFormPage() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stoppar default reload
    if (!title) return;
    try {
      await createTask({ title, status: "pågående" });
      setTitle(""); // Töm inputfältet
      navigate("/tasks"); // Navigera tillbaka till TaskListPage
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
