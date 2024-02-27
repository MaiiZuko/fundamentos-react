import React, { useState } from "react";
import "./Mega.css";

export default props => {
    const [numerosOrdenados, setNumerosOrdenados] = useState([]);

    function gerarNumeros(qtde) {
        const numero = [];
        for (let i = 0; i < qtde; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            numero.push(numeroAleatorio);
        }
        const numerosOrdenados = numero.sort((a, b) => a - b);
        setNumerosOrdenados(numerosOrdenados);
    }

    return (
        <div className="Mega">
            <ul>
                {numerosOrdenados.map(numero => (
                    <li>{numero}</li>
                ))}
            </ul>
            <button onClick={() => gerarNumeros(7)}>Sortear 7 Números</button>
        </div>
    );
};
