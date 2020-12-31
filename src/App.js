import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

let myUserId = 500000000;
let url = `https://jsonplaceholder.typicode.com/users/${myUserId}/todos`;
let deleteUrl = "https://jsonplaceholder.typicode.com/todos/";
let staticData = [
  { id: uuidv4(), title: "Take out the trash", completed: false },
  { id: uuidv4(), title: "Meeting with Ee", completed: false },
  { id: uuidv4(), title: "Eat with JoJo", completed: false },
];

class App extends React.Component {
  state = {
    // // static array
    // todos: [
    //   { id: uuidv4(), title: "Take out the trash", completed: false },
    //   { id: uuidv4(), title: "Meeting with Ee", completed: false },
    //   { id: uuidv4(), title: "Eat with JoJo", completed: false },
    // ],

    // dynamic array
    todos: [],
  };

  componentDidMount() {
    // get the static and dynamic data
    axios.get(url).then((res) => {
      console.log(res.data);
      this.setState({ todos: [...staticData, ...res.data] });
    });
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    });
  };

  // Delete Item
  deleteItem = (id) => {
    // this.setState({
    //   todos: [
    //     ...this.state.todos.filter((item) => {
    //       return item.id !== id;
    //     }),
    //   ],
    // });

    axios.delete(deleteUrl + id).then((res) => {
      this.setState({
        todos: [
          ...this.state.todos.filter((item) => {
            return item.id !== id;
          }),
        ],
      });
    });
  };

  // Add Todo
  addTodo = (title) => {
    // const newTodo = { id: uuidv4(), title, completed: false };
    // this.setState({
    //   todos: [...this.state.todos, newTodo],
    // });

    axios
      .post(url, {
        title,
        completed: false,
      })
      .then((res) => {
        // define the id
        res.data.id = uuidv4();
        console.log(res.data);
        this.setState({
          todos: [...this.state.todos, res.data],
        });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}></AddTodo>
                  <Todos
                    list={this.state.todos}
                    markComplete={this.markComplete}
                    deleteItem={this.deleteItem}
                  ></Todos>
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
