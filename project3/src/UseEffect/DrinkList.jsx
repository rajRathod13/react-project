import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

function DrinkList() {
  const paramData = useParams();

  // console.log(paramData)
  const [myData, setMyData] = useState([]);
  // const [allData,setAllData] = useState([])
  useEffect(() => {
    if (paramData) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${paramData.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyData(data.drinks[0]);
        })
        .catch((err) => console.log(err));
    }
    // setAllData(myData)
  }, []);
  
  function handleClick() {
    fetch(`https://reacttest3-d33d5-default-rtdb.firebaseio.com/myData.json`, {
      method: "POST",
      body: JSON.stringify({
        id : myData.idDrink,
        DrinkName : myData.strDrink,
        DrinkINstruction : myData.strInstructions,
        DrinkImage : myData.strDrinkThumb
      }
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  function handleDelete(){
    if(paramData.id){
    fetch(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${paramData.id}`,{
      method : 'DELETE'
    })
    }
    <Navigate to="/selecteddrinks"/>
  }
  // console.log(myData);
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-4">
            <img src={myData.strDrinkThumb} className="w-100" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2> {myData.strDrink} </h2>
                <p>{myData.strInstructions}</p>
                <button className="btn btn-primary" onClick={handleClick}>
                  Add To List
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete from list
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrinkList;
