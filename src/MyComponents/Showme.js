import React from 'react'
//import { Link } from "react-router-dom";

export const Showme = (props) => {
    //console.log(props.chara);
    //let result = Object.values({props.chara}).filter(chunk => chunk.id === {props.charid});
    //console.log(result);
    console.log(props.chara);
    console.log(1);
    console.log(props.chari);
    return (
        props.chara.map((arr) => {
        if(arr.char_id === props.chari)
        {
            (<div className="back">
                <h4>{arr.name}</h4>    
            </div>)
        }
        else
        {
            <div>
            error
            </div>
        }
        console.log(arr.name);
        }) 
    )
}
