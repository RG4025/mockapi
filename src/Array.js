import React, { useEffect } from "react";
import { useState } from "react";

function Array() {

    const [arr, SetArr] = useState('');

    function handleSubmit(e){
        e.preventDefault();
            console.log(arr);
            let array = Array.form(...arr);
            console.log(array);
    }

    for(var i = 0; i<=5; i++){
      useEffect(()=>{
        console.log('hii');
      })
    }


  return (
    <div className="container">
      <h4 className="mx-auto pu-4">this is the array sort method!</h4>

      <div className="">
        <form action="#" onClick={handleSubmit}>
            <input type="text" onChange={(e)=> SetArr(e.target.value)} required/>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Array;
