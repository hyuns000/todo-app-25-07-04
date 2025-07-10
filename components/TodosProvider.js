import { dateToStr } from "../utils/util"; // 16강
import React, { useState, useRef, createContext, useContext } from "react";


const TodosContext = createContext(); // 16강


const TodosProvider = ({children}) => {
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
export const useTodosState = () => {
  const context = useContext(TodosContext);
  if (!context) throw new Error("useTodosState must be used within a TodosProvider");
  return context;
};
export default TodosProvider;
