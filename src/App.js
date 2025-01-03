import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductList from './Component/TodoList/TodoList.jsx';
import NavbarMenu from './Component/NavbarMenu/NavbarMenu.jsx';


function App() {
  const Initialtodos =  [
    {todo_date:"2024/12/12", todo_text:"Study React", isCompleted: false},
    {todo_date:"2024/10/12", todo_text:"Study HTML", isCompleted: true},
    {todo_date:"2024/01/01", todo_text:"Data Structure", isCompleted: true},
  ]

  const [todos, setTodos] = useState(Initialtodos);

  return (
    <>
      <NavbarMenu /> 
      <h1>App Component</h1>
      <img srouce="" size="" />
      <ProductList todos={todos} setTodos={setTodos}/>
      
    </>
  );
}

export default App;
