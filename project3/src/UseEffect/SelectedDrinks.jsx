import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function SelectedDrinks() {
    const [tableData,setTableData] = useState({})
    useEffect(()=>{
        fetch(`https://reacttest3-d33d5-default-rtdb.firebaseio.com/myData.json`)
        .then((res)=> res.json())
        .then((data)=>setTableData(data))
        .catch((err)=>console.log(err))
    },[])
    // console.log(tableData)
  return (
    <>
      <table className='table'>
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Drink Id</th>
                <th>Drink Name</th>
                <th>Drink Instruction</th>
                <th>Drink Image</th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(tableData).map((item,index)=> {
                console.log(item)
                let {id,DrinkName,DrinkINstruction,DrinkImage} = tableData[item]
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{id}</td>
                        <td>{DrinkName}</td>
                        <td>{DrinkINstruction}</td>
                        <td><img width="100px" src={DrinkImage} alt="" / ></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </>
  )
}

export default SelectedDrinks
