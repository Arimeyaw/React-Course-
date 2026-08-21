import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);

  }
  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }
  return (
    <div>
      <input type="text" placeholder="name..." onChange={handleNameChange} />
      <p>{name}</p>
      <input type="text" placeholder="email" onChange={handleEmailChange} />
      <p>{email}</p>
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
      />
      <p>{password}</p>
    </div>
  );
}
export default App;
