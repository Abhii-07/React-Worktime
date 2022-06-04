import React, { useEffect, useState } from 'react';
import styles from "./Todos.module.css";
import axios from 'axios';

function Todos() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("")
  const [totalCount,setTotalCount] = useState(0)
  const [limit,setLimit] = useState(5);
  const [page, setPage] = useState(1)
  
  const handleChange = (e) => {
    setNewTodo(e.target.value);
    // console.log(e.target.value)
  }

  const saveInfo = () => {
    fetch(`http://localhost:8080/todos`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body : JSON.stringify({
        value:newTodo,
        isCompleted : false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos([...todos,data]);
        setNewTodo("")
      });
  }
  
 


  useEffect(() => {
    // Fetch API
    // fetch("http://localhost:8080/todos")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setTodos(data)
    //   });
    

    // Axios
    axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`).then((res) => {
      setTodos(res.data);
      // console.log(res);
      setTotalCount(Number(res.headers["x-total-count"]));
      console.log(res.data);
    })
  }, [page,limit]);

  return (
    <div className={styles.display} >
      <h1>Todo App</h1>
      <input placeholder='Add Task..' className={styles.inputBar} value={newTodo} onChange={handleChange}/>
      <button onClick={saveInfo} className={styles.addBtn}>Save</button>
      <div className={styles.taskBox}>
        {todos.map(todo => (
          <div key={todo.id} className={styles.task}>
            {todo.value}
            {/* <button onClick={editInfo}>Edit</button>
            <button onClick={deleteInfo}>X</button> */}
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
      <button 
      className={styles.addBtn}
      disabled={page <= 1}
      onClick={()=> {setPage(page-1);}}> - </button>
      <select className={styles.limitInput} onChange={(e) => setLimit(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="35">35</option>
        <option value="40">40</option>
      </select>
      <button 
      className={styles.addBtn}
      disabled={totalCount < page * limit}
      onClick={()=> setPage(page+1)}> + </button>
      
      <h2>Page No: {page}</h2>
      </div>
      
    </div>
  );
}

export default Todos;
