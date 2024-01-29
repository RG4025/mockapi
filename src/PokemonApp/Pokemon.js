import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Pokemon() {

    let url = `https://pokeapi.co/api/v2/pokemon?limit=200`;

    const[pokemon, setPokemon] = useState([]);


    function getPokemon(){
        axios.get(url).then((res)=>{
            // console.log(res.data.results);
            setPokemon(res.data.results);
        }).catch((err)=>{
            console.log(err);
        })
    }

    getPokemon();
    // useEffect(()=>{


    // },[pokemon]);

  return (
    
    <>

        <h3>
            The pokemon app
        </h3>


        {
            pokemon.map((rg)=>{
                return(
                    <tr>
                        <td><p>{rg.name}</p></td>
                    </tr>
                    
                );
            })
        }
    
    </>
  )
}

export default Pokemon;