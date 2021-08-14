import React from 'react'

export const Header = () => {
    let headerstyle = {
        margin:"10px",
        padding: "5px",
        backgroundColor:"red",
        color:"white",
        fontweight: "bold",
        align: "center",
        display: "flex",
        justifyContent: "center" 
    }
    return (
        <div className="hello" style={headerstyle}>
            <h2>Breaking Bad</h2>
        </div>
    )
}
