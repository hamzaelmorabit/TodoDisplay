import "./App.css";
import GetTodo from "./component/layout/GetTodo";
import React, {
  useState,
  useEffect,
  // Component
} from "react";
// import axios from "axios";

function App() {
  //isDsiplayTodo use it for switch between the reset and get todo
  const [isDisplayTodo, setIsDisplayTodo] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(null);
  const [completed, setCompleted] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/3`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log("🚀 ~ data", data);
        setId(data.id);
        setUserId(data.userId);
        setTitle(data.title);
        setCompleted(data.completed ? "yes" : "no");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      {!isDisplayTodo ? (
        <button
          onClick={(event) => {
            event.preventDefault();
            setIsDisplayTodo(true);
          }}
        >
          get todo
        </button>
      ) : (
        <React.Fragment>
          <GetTodo
            id={id}
            title={title}
            completed={completed}
            userId={userId}
          />

          <button
            style={{ marginTop: "18px" }}
            onClick={(event) => {
              event.preventDefault();
              setIsDisplayTodo(false);
            }}
          >
            {" "}
            reset todo
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
