import React from "react";

export default function Random(props) {
    const {minimo, maximo} = props
    let random = parseInt((Math.random() * (maximo - minimo)) + minimo)
    return(
    <div>
        <h2>{random}</h2>
    </div>
    )
}