import { useState } from "react";
import "./App.css";

function Greeting({ name, age }) {
  return (
    <h1>
      Hello, I am {name}, i am {age} years old!
    </h1>
  );
}

function App() {
  const [showGreeting, setShowGreeting] = useState(false);
  function toggleGreeting() {
    setShowGreeting(!showGreeting);
  }
  return (
    <div>
      <button onClick={toggleGreeting}>Toggle Greetings</button>
      {showGreeting && <Greeting name="Arimeyaw" age={24} />}
      {/* <Greeting name = {"Bartah"} age = {25}/>
      <Greeting name = {"Mohammed"} age = {26}/>
      <Greeting name={"Tymer"} age = {27}/> */}
    </div>
  );
}
// function getName (){
//   return "Gigo";
// }

//Component = funtion that return JSX

export default App;
