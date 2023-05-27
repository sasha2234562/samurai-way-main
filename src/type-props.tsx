
import React from "react";

type New ={
    text : string,
    num : number
}

export function  NewProps(props : New) {
    return (
        <div>
            {props.text} {props.num}
        </div>
    )
}

type Messange = {
    message : string
}

const  ByeMessange : React.FC<Messange> = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}
export  default  ByeMessange;