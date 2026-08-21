import "./App.css";

function TodoList(){
  const todos = [
    {id: 1, text: "Learn JSX"},
    {id: 2, text: "Understand props"},
    {id: 3, text: "Master state & events"},
  ];
  return(
    <div>
      <h2>My React Todos</h2>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <div>
      <TodoList/>
    </div>
  );
}
export default App;
