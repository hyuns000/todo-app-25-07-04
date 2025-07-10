import { dateToStr } from "../utils/util"; // 16강
import React, { useState, useRef, createContext } from "react";


const TodosContext = createContext(); // 16강


const TodosPrvider = ({children}) => {
  const [todos, setTodos] = useState([]); 
  const lastTodoIdRef = React.useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current; 
    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }
  return(
    <TodosContext.Provider value={{ todos, addTodo}}>
      {children}
    </TodosContext.Provider>
  );
};


export default TodosContext;
