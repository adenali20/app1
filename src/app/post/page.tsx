"use client"
import Comp1 from '../components/comp1'
import {useEffect,useState} from 'react'
import "./post.css";
export default function Page() {

  const [items,setItems]=useState([""])
  const[value, setValue] = useState(""); 

  const url="http://159.203.107.86:30005"

  useEffect(()=>{
    fetchData()
   
  },[])

  const clearData=()=>{
    fetch(`${url}/api/users/deleteUsers`)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              
              setItems([])
            });
  }

  const fetchData=()=>{
    fetch(`${url}/api/users/`)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              
              setItems([...json])
            });
  }
  //http://64.225.56.232:8081/users

  const postData=()=>{
      fetch(`${url}/api/users/`, { 
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

      <button onClick={()=>postData()} style={{
        backgroundColor:"#87CEFA",opacity: 1
      }}>Add Data</button> | <button onClick={()=>clearData()} style={{
        backgroundColor:"#FFA07A"
      }}>Delete  Data</button>
      <ul id="myUL">
      {
        items.map(e=>{
          return  <li><a href="#">{e}</a></li>
        })
      }
      </ul>
    </div>
  }
