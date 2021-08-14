import React from 'react'
import { Showme } from "./Showme";
import { useState } from 'react';


export const Characterization = (props) => {
    //console.log(props.chararr);
    const [isVisible, setisVisible] = useState(false);
    return (
        <div>
                <Showme isVisible={isVisible} chara={props.chararr} chari={props.chari} />
                <button type="submit" onClick={()=>{ setisVisible(true);console.log(isVisible)}}>View</button>
        </div>
    )
}
