import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Aleatorio'

//no lugar de export default function App(){
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno" aluno="pedro" nota={9.3} />
        <Random />
        <Primeiro></Primeiro>
    </div>