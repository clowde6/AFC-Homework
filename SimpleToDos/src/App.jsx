import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
const endpoint = "https://accbucketlists.herokuapp.com/user/piyush/bucket";

// CRUD
// Create

// Update
// Delete

const App = () => {
  // set our states
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue);
  }

  const handleKeyDown = (event) => {
    if(event.key === "Enter"){
      event.preventDefault()
    }
  }

  const handleDelete = (event) => {
    // we need the id from the selected todo
    console.log("delete Item")
    event.stopPropagation()
    let requestedID = event.target.parentElement.dataset.id;
    // we need to compare our current todos with selected it
    // console.log(requestedID)
    // console.log(event.target)
    // we need to compare our current todos with selected it
    let newTodos = todos.filter(el => {
    console.log(el.id);
    console.log(requestedID)
    return el.id !== requestedID
    })
    setTodos(newTodos)
    
  }

   //UPDATE
const handleUpdate =(event) => {
  console.log("Handle This")
  let copyOfTodos = [...todos]
  // we need the id from the selected todo
  let requestedID = event.target.dataset.id;
  // we need to compare out current todos with selected it
  let newTodo = todos.find(el => {
      return Number(requestedID) === el.id
    })
    newTodo.isComplete = !newTodo.isComplete
    setTodos(copyOfTodos)
}

  //CREATE
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been submitted");
    if(inputValue.trim()){
      let todoObj = {
        id: Date.now(),
        description: inputValue,
        isComplete: false
      }
      let items = [...todos, todoObj]
    setTodos(items)
    }
    // reset the input text box
    setInputValue("")
  };

  //READ
  useEffect(() => {
    // only want to run one time
    axios
      .get(endpoint)
      .then((response) => {
        // console.log(response);
        setTodos(response.data);
      })
      .catch((err) => {
        console.log(`Issues reading data: ${err}`);
      });
  }, []);


  // CREATE
  //Building out list
  let todosArray = todos.map((el, i) => {
    return (
    <li 
        key={el.id} 
        data-id={el.id}
        onClick={handleUpdate}
        className={el.isComplete ? "completed" : ""}
        >
      <button onClick={handleDelete}>X</button>
      {el.description}
    </li>
  );
  });

  return (
    <>
      <h1>Simple Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={inputValue}
          placeholder="Enter new todo here...."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>{todosArray}</ul>
    </>
  );
};

export default App;