import './App.css';
import { Navbar}from "./components/index"
import { useLocation } from "react-router-dom";

import React, {Suspense} from 'react'
import Animatedroutes from './constants/Animatedroutes';

/*app */
function App() {
  const location = useLocation().pathname;
  const newClass = location.split("/src/components/")[1];
  console.log(newClass)
  return (
<div className={"main " + newClass}>


<Suspense fallback={<div className='loading'><h1>Loading...</h1></div>}>
  <Navbar   />
<Animatedroutes />
</Suspense>


</div>
  );
}

export default App;
