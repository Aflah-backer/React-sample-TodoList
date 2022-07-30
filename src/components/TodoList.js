import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ deleteItem, itemList }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap:12,
      }}
    >
      {itemList.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
