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
        justifyContent: "center", 
        borderRadius: "10px"
    }
    return (
        <div className="hello" style={headerstyle}>
            <h1>Breaking Bad</h1>
        </div>
    )
}
