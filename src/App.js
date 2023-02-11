import './App.css';
import { Navbar}from "./components/index"
import React from 'react'
import { useLocation } from "react-router-dom";
function App() {
  
  const location = useLocation().pathname;
  const newClass = location.split("/src/components/")[1];
  console.log(newClass)
  return (
<div className={"main " + newClass}>
<Navbar  />


</div>
  );
}

export default App;
