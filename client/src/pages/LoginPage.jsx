import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { login } = useAuth();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(name);
      }}
    >
      <h1>Login</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Login</button>
    </form>
  );
}
