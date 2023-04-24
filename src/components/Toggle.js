import {React, useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);
//on and off
  return <button onClick={setToggle(!Toggle)}>{toggle ? "on" : "off" }
  {toggle}</button>;
}

export default Toggle;