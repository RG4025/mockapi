import { light } from '@mui/material/styles/createPalette';
import React from 'react'

function IceCream() {


    const desserts = [
        {
          name: "Chocolate Cake",
          calories: 400,
          createdAt: "2022-09-01",
        },
        {
          name: "Ice Cream",
          calories: 200,
          createdAt: "2022-01-02",
        },
        {
          name: "Tiramisu",
          calories: 300,
          createdAt: "2021-10-03",
        },
        {
          name: "Cheesecake",
          calories: 600,
          createdAt: "2022-01-04",
        },
      ];


    //   console.log(desserts);

    //   const cal = desserts.map(()=>{

    //     return()
    //   })

    const sort = desserts.filter((des)=>{
       return des.calories < 500 ? `Name : ${des.name}, Calories : ${des.calories}` : '';
    })


    
   
    console.log(sort.sort(({calories:a}, {calories:b})=> a - b));

    function main(a,b){
        return a - b;
    }


    const newResult = desserts.filter((des)=>{
        return des.calories < 500;
    }).sort((a, b)=>{
        return a.calories - b.calories;
    }).map((des)=>{
        return (
            <li>
                {des.name} - {des.calories} cal;
            </li>
        )
    })



  return (
    <>
    <ul>

        {newResult}
    </ul>
    </>
  )
}

export default IceCream