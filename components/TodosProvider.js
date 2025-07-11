import { dateToStr } from "../utils/util"; // 16강
import React, { useState, useRef, createContext } from "react";


const TodosContext = createContext(); // 16강


const TodosProvider = ({children}) => {

  const testTodo = [
    {
      id: 1,
      content: "테니스 치기",
      regDate: dateToStr(new Date())
    },
    {
      id: 2,
      content: "운동하기",
      regDate: dateToStr(new Date())
    },
    {
      id: 1,
      content: "행복하기",
      regDate: dateToStr(new Date())
    },
  ]


  // const [todos, setTodos] = useState([]); 
  // const lastTodoIdRef = React.useRef(0);

  const [todos, setTodos] = useState([...testDate]); 
  const lastTodoIdRef = React.useRef(testTodo.length);


  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current; 
    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  return(
    <TodosContext.Provider value={{ todos, addTodo, removeTodo}}>
      {children}
    </TodosContext.Provider>
  );
};
export const useTodosState = () => {
  const context = useContext(TodosContext);
  if (!context) throw new Error("useTodosState must be used within a TodosProvider");
  return context;
};
export default TodosProvider;
