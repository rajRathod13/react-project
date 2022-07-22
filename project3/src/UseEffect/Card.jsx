import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function Card() {
    const [cocktail,setCocktail] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        .then((res)=> res.json())
        .then((data)=>{
            // console.log(data)
            setCocktail(data.drinks)
            setLoading(false)
        })
        .catch((err)=> console.log(err))
        
    },[])
    // console.log(cocktail)
  return (
    <>
    {loading?<h1>Loading...</h1>:null}
      {cocktail.map((item)=>{
        let {idDrink,strDrink,strDrinkThumb} = item
        return(
            <div className="col-md-3 my-4 p-2" key={idDrink}>
                <div className="card">
                    <img src={strDrinkThumb} alt="" className='card-img' />
                    <div className="card-body">
                        <h2>Drink Id: {idDrink}</h2>
                        <h4>Drink Name:{strDrink}</h4>
                        <Link to={`/main/${idDrink}`}>Buy Me</Link>
                    </div>
                </div>
            </div>
        )
      })}
    </>
  )
}

export default Card
