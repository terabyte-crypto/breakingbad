import React from 'react'

export const Showme = (props) => {
    //console.log(props.chara);
    return (
        <>
        {props.isVisible && 
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
        }   
        </>
    )
}
