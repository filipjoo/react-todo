import { useEffect, useState } from "react";
import "./styles.css";
//inputTodo.jsxの内容をApp.jsxに移植
import { InputTodo } from "./components/inputTodo";
// incompleteTodos.jsxの内容をApp.jsxに移植
import { InConpleteTodos } from "./components/inconpleteTodos";
// completeTodos.jsxの内容をApp.jsxに移植
import { ConpleteTodos } from "./components/conpleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [inconpleteTodos, setinconpleteTodos] = useState([]);
  const [conpleteTodos, setconpleteTodos] = useState([]);
  const [disabled, setDisabled] = useState(false);

  // eventはinputタグのonChangeからもらう引数
  const onChangeTodotext = (event) => setTodoText(event.target.value);
  const addToDoText = () => {
    if (todoText === "") return;
    const newTodos = [...inconpleteTodos, todoText];
    setinconpleteTodos(newTodos);
    setTodoText("");
  };
  const deleteIncompleteTodoText = (index) => {
    const newTodos = [...inconpleteTodos];
    newTodos.splice(index, 1);
    setinconpleteTodos(newTodos);
  };
  const deleteCompleteTodoText = (index) => {
    const newTodos = [...conpleteTodos];
    newTodos.splice(index, 1);
    setconpleteTodos(newTodos);
  };
  // complectionTodoText関数を実装。
  // 完了ボタンが押されたら、inconpleteTodos[index]をconpleteTodosの末尾に追加
  // 併せて、inconpleteTodos[index]を併せて、inconpleteTodosから削除する。
  const comprectionTodoText = (index) => {
    const newTodos = [...conpleteTodos, inconpleteTodos[index]];
    setconpleteTodos(newTodos);
    deleteIncompleteTodoText(index);
  };
  // backTodoText関数を実装。ボタンが押されたら、indexのtodoを完了のTODOリストから未完了のTODOリストに移動。
  const backTodoText = (index) => {
    const newTodos = [...inconpleteTodos, conpleteTodos[index]];
    setinconpleteTodos(newTodos);
    deleteCompleteTodoText(index);
  };


  return (
    <>
      <InputTodo todoText={todoText} onChangeTodotext={onChangeTodotext} addToDoText={addToDoText} disabled={inconpleteTodos.length >= 5} />
      {inconpleteTodos.length >= 5 && <p style={{ color: "red" }}>登録できるTODOは5個までです。消化してください。</p>}
      <InConpleteTodos inconpleteTodos={inconpleteTodos} deleteIncompleteTodoText={deleteIncompleteTodoText} comprectionTodoText={comprectionTodoText} />
      <ConpleteTodos conpleteTodos={conpleteTodos} deleteCompleteTodoText={deleteCompleteTodoText} backTodoText={backTodoText} />
    </>
  );
};