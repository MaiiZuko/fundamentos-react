import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import App from './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"; 

//no lugar de export default function App(){
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Paulo" />
                    <FamiliaMembro nome="Castro" />
                </Familia>
            </Card>
            <Card titulo="Desafio Aleatório" color="#090">
                <Random minimo={10} maximo={70} />
            </Card>
            <Card titulo="Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno" aluno="pedro" nota={9.3} />
            </Card>
            <Card titulo="Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>