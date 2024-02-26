import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Filho 1" numero={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Carla" numero={22} nerd={false}></DiretaFilho>
        </div>
    )
}