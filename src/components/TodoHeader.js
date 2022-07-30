import React, { useState } from "react";

function TodoHeader({ addItem }) {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <h1>
          Today's
          <br />
          To-Do List
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ marginRight: 10, width: 500, height: 40, fontSize: 22 }}
            type="text"
            placeholder="Enter a todo title"
          ></input>
          <button
            style={{
              width: 100,
              height: 45,
              borderWidth: 0,
              fontWeight: "bold",
              fontSize: 18,
            }}
            onClick={() => {
              addItem(todo);
              setTodo("");
            }}
          >
            {" "}
            Submit
          </button>
        </span>
      </div>
    </div>
  );
}

export default TodoHeader;
