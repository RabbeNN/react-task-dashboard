export default function TaskItem({ task, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px",
        borderBottom: "1px solid #ccc",
        alignItems: "center",
      }}
    >
      <span>
        {task.title} ({task.status})
      </span>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
}
