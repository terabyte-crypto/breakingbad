import React from 'react'
//import { useState } from 'react';
import { Showme } from './Showme';
import { Link } from "react-router-dom";

export const Characterization = (props) => {
    const onClick = () => {
        <Showme chara={props.chararr} chari= {props.charid} /> 
    }
    //console.log(props.chararr);
    //const [isVisible, setisVisible] = useState(false);
    return (
            <Link className="character" to= {"/:"+props.charid} onClick={onClick}>View</Link>
    )
}