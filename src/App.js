import React, {useState, useEffect} from "react";
import './App.css';
     // Calling useEffect every time
function App() {
  //const [count,setCount] = useState(0);

//useEffect(()=>{
  //console.log("useEffect is called")
//})


 
   //function handleButtonClick(){
    //setCount(count+1);
   //}
   //return(
    //<div>
     // <p> Count : {count}</p>
      //<button onClick={handleButtonClick}> Increment count</button>
    //</div>

    
   const[name,setName] = useState("Vanshu");
   const[count,setCount] = useState(0);

   useEffect(()=>{
    console.log(`Count is $ {count}`);
   } , [count])

   useEffect(()=>{
    console.log(`Name is $ {name}`);
   } , [name])
   
   const handleButtonClick = () => {
    setCount(count+1);
   }


   return(
    <div>
      <p> Count : {count}</p>
      <button onClick={handleButtonClick}> Increment count</button>
       
      <p> Name : {name}</p>
      <input onChange={(e)=>setName(e.target.value)}></input>
    </div>


    // 3.When props are passed
    function App(){
    const[great,setGreat] = useState("");

    useEffect(()=>{
      if(name)
      setGreat(`Hello $(name)!`);
    } , [name]);






    }
   
    function Test(){
      return(
      <div>
        <Test name="Vanshika"/>
        </div>
      )
    
   



   }
  

export default App;
   
