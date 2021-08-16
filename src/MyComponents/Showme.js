import React from 'react'
import { useParams } from 'react-router-dom';

export const Showme = (props) => {

    console.log(props.quota);
    let{id}=useParams();
    console.log(id);
    return (
        <div className="disp">
            {props.chara.map((arr) => (
                (arr.char_id == id)?
        
                <div className="back d-flex">
                    <h2>Details</h2>
                    <hr/>
                    <h4>{arr.name}</h4>    
                    <h4>{arr.birthday}</h4>    
                    <h4>{arr.occupation+" "}</h4>    
                    <h4>{arr.status}</h4>    
                    <h4>{arr.nickname}</h4>    
                    <h4>{arr.apprearance}</h4>
                    <br/>
                    <h2>Quotes</h2>
                    <hr/>
                    <>
                    {props.quota.map((e) => (
                        (arr.name == e.author)?
                            <h4>{e.quote}<br/></h4>:""
                    ))}
                    </>    
                </div>:""
        ))}     
        </div>
    )
}
