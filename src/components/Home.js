import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const h1Color = {
    color: 'firebrick'
  };
  return (
  <div>Home
  <h1 style = {h1Color}>Your {name} is a Web Developer from Your {city}</h1>
  </div>
  )
}

export default Home;
