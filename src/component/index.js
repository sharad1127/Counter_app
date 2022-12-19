import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deccreaseValue, increaseValue, resetValue } from './redux/action-creator'
// import { INCREMENT } from './redux/action-types'

function Index() {
    const dispatch=useDispatch()
    const value=useSelector(state=>state.count)
    
    // const inc=()=>{
    //     setCount(count+1)
    // }
    // const dec=()=>{
    //     setCount(count-1)
    // }
    // const res=()=>{
    //     setCount(0)
    // }
    
  return (
     <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",

     }}>
        <h1>COUNTER APP</h1>
        <button style={{
            backgroundColor: "grey",
            color: "white",
            padding: "15px 50px"
        }} onClick={()=>dispatch(increaseValue())}>Increment</button>
      

        <button style={{
            backgroundColor: "grey",
            color: "white",
            padding: "15px 50px"
        }} onClick={()=>dispatch(deccreaseValue())}>Decrement</button>
      

        <button style={{
            backgroundColor: "grey",
            color: "white",
            padding: "15px 50px"
        }}onClick={()=>{dispatch(resetValue())}}>Reset</button>
       <p><h3>{value}</h3></p>
    </div>
  )
}

export default Index