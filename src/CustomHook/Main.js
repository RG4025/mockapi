import { useState } from "react";
import React from "react";
import Custom from "./Custom";
import LookCustom from "./LookCustom";

function Main() {
  const [value, setValue] = Custom('name','');

  console.log(value);   
  LookCustom(value);
  return (
    <div className="container col-6 mx-auto">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default Main;
