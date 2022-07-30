// import { FundTwoTone } from "@ant-design/icons";
import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function TodoApp() {
  const [itemList, setItemList] = useState([]);

  function addItem(title) {
    setItemList([...itemList, { title, done: false }]);
  }
  function deleteItem(index) {
    setItemList([
      ...itemList.slice(0, index),
      ...itemList.slice(index + 1, itemList.length),
    ]);
  }
  // function editItem(index) {
  //   setItemList([...itemList].filter)
  // }
  return (
    <div>
      <TodoHeader addItem={addItem} />
      <TodoList deleteItem={deleteItem} itemList={itemList} />
    </div>
  );
}

export default TodoApp;
