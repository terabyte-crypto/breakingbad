import React from 'react'
import { Link } from "react-router-dom";

export const Characterization = (props) => {
    
    return (
        <div>
            <Link className="btn btn-success " to= {"/"+props.charid} >View</Link>
        </div>
    )
}