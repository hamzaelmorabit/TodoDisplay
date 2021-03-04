const GetTodo = ({ title, completed, id, userId }) => {
  return (
    //I use a new componenet for display the todo
    <div className="todo">
      <p> userID : {userId}</p>
      <p> ID : {id}</p>
      <p> title : {title}</p>
      <p> completed : {completed} </p>
    </div>
  );
};

export default GetTodo;

// import logo from "./logo.svg";
// import "./App.css";
// import GetTodo from "./GetTodo";
// import React, { Component } from "react";
// import axios from "axios";

// function App() {
//   // class App extends Component {
//     state = {
//       isDisplayTodo: false,
//       id: 0,
//       title: "",
//       completed: "",
//       userId: 0,
//     };

//     async componentDidMount() {
//       try {
//         const result = await axios.get(
//           `https://jsonplaceholder.typicode.com/todos/1`
//         );
//         const data = await result.data;
//         console.log("🚀 ~ data", data.completed);

//         this.setState({ id: data.id });
//         this.setState({ userId: data.userId });
//         this.setState({ title: data.title });
//         this.setState({ completed: data.completed ? "yes" : "no" });

//         return data;
//       } catch (error) {
//         alert(error);
//       }
//     }

//     render() {
//       const { id, userId, completed, title, isDisplayTodo } = this.state;
//       return (
//         <div className="App">
//           {!isDisplayTodo ? (
//             <button onClick={() => this.setState({ isDisplayTodo: true })}>
//               get todo
//             </button>
//           ) : (
//               <React.Fragment>
//                 <GetTodo
//                   id={id}
//                   title={title}
//                   completed={completed}
//                   userId={userId}
//                 />

//                 <button onClick={() => this.setState({ isDisplayTodo: false })}>
//                   {" "}
//               reset todo
//             </button>
//               </React.Fragment>
//             )}
//         </div>
//       );
//     }
//   }
// }
// export default App;
// // function App() {
// // useEffect(() => {
// // try {
// //     const result =  axios.get(
// // `https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`
// // );
// // const data = await result.json();
// // const tomorrow = data.consolidated_weather[1];
// // console.log(
// // `Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`
// // );
// // return data;
// // } catch (error) {
// // alert(error);
// // }
// // }, []);

// // return (
// //       <div className="App">
// //            <h1>hello</h1>
// //       </div>
// // );
// // }

// // export default App;
