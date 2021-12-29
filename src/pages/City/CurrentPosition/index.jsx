import React from "react"
import "./style.less"

const CurrentPosition = (props) =>{
    return(
        <div className="current-city">
            <h2>当前位置: {props.city}</h2>
        </div>
    )
}

export default CurrentPosition