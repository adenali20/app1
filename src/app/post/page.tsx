"use client"
import Comp1 from '../components/comp1'
import {useEffect,useState} from 'react'
import "./post.css";
export default function Page() {

  const [items,setItems]=useState([""])

  useEffect(()=>{
   
  },[items])

  const fetchData=()=>{
    fetch("http://64.225.56.232:8081/users")
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              
              setItems([...json])
            });
  }
  
    return <div>
      <button onClick={()=>fetchData()}>Click me</button>
      <ul id="myUL">
      {
        items.map(e=>{
          return  <li><a href="#">{e}</a></li>
        })
      }
      </ul>
    </div>
  }