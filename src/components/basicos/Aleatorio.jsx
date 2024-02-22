import React from "react";

export default function Random(props) {
    let minimo = 5
    let maximo = 10
    let random = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
    return(
    <div>
        <h2>{random}</h2>
    </div>
    )
}