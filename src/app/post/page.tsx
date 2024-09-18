"use client"
import Comp1 from '../components/comp1'
import {useEffect,useState} from 'react'
import "./post.css";
export default function Page() {

  const [items,setItems]=useState([""])
  const[value, setValue] = useState(""); 

  useEffect(()=>{
    fetchData()
   
  },[])

  const clearData=()=>{
    fetch("http://localhost:8081/deleteUsers")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              
              setItems([])
            });
  }

  const fetchData=()=>{
    fetch("http://localhost:8081/users")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              
              setItems([...json])
            });
  }
  //http://64.225.56.232:8081/users

  const postData=()=>{
      fetch("http://localhost:8081/users", { 
        method: "POST", 
        body: value, 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }) 
    .then(response => response.json()) 
    .then((json) => {
      console.log(json);
      
      setItems([...json])
    });
  }
  
    return <div id="myDiv">
      <input value={value} onChange={(e) => {setValue(e.target.value)}} />

      <button onClick={()=>postData()}>Click me</button> | <button onClick={()=>clearData()}>Clear Data</button>
      <ul id="myUL">
      {
        items.map(e=>{
          return  <li><a href="#">{e}</a></li>
        })
      }
      </ul>
    </div>
  }