import React from 'react'
import MyContext from "./MyContext";

function MyState(props) {
    const state = {
        name : "ALka rao",
        class: "9 D"
    }
    const myColor = "red"
  return (
    <MyContext.Provider value={{state, myColor}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
