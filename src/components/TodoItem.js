import React, { useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
// import { EditOutlined } from "@ant-design/icons";

function TodoItem({ item, deleteItem, index }) {
  const [strikethrough, setstrikethrogh] = useState(false);
  const styles = {
    container: {
      border: "1px solid gray",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingInline: 10,
      marginTop: 10,
      backgroundColor: "#fff",
      fontSize: 25,
    },
    checkbox: {
      marginRight: 20,
    },
    text: {
      textDecoration: strikethrough && "line-through",
    },
  };
  return (
    <div style={styles.container}>
      <p style={styles.text}>{item.title}</p>
      <span>
        <input
          type="checkbox"
          style={styles.text}
          onChange={() => setstrikethrogh(!strikethrough)}
          checked={strikethrough}
        ></input>
        {/* <EditOutlined
          onClick={() => editItem(index)}
          style={{ fontSize: 20 }}
        /> */}
        <DeleteFilled
          onClick={() => deleteItem(index)}
          style={{ fontSize: 20 }}
        />
      </span>
    </div>
  );
}

export default TodoItem;
