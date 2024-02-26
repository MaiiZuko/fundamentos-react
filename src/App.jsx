import React from "react";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import App from './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import input from "./components/formulario/input";
import Contador from "./components/contador/Contador";

//no lugar de export default function App(){
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="Componente Controlado(input)" color="#6004a7">
                <input></input>
            </Card>
            <Card titulo="Comunicação Indireta" color="#BBAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="Comunicação Direta" color="#9321C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="Renderização Condicional" color="#982395">
                <ParOuImpar numero={20}/>
                <UsuarioInfo usuario={{nome: 'Ana'}}/>
                <UsuarioInfo usuario={{}}/>
            </Card>
            <Card titulo="Produtos" color="#00C8L9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="Repetição" color="#00C8RA">
                <ListaAlunos></ListaAlunos>
            </Card>

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