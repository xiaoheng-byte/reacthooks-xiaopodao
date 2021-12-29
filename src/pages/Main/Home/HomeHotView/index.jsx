import React from "react"
import "./style.less"
const HomeHotView = (props) =>{
    return(
        <div className = "hotproduct">
            <h4>{props.title}</h4>
            <div className="hot-container">
                <ul className="clear-fix">
                    {
                        props.data.map((ele,index)=>{
                            return(
                                <li key={index}>
                                    <a href={ele.link}>
                                        <img src={ele.img} style = {{width:69.5, height:69.5}} alt=""/>
                                        <span>{ele.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default HomeHotView