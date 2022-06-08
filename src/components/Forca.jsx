import "./style.css";
import { useContextPerguntas } from "../mock";
import { useState, useEffect } from "react";
import Carrasco from "../assets/img/carrasco.png"

export const Forca = () => {
  const [inputValue, setInputValue] = "";

  const perguntas = useContextPerguntas();

  const randomPerguntas =
    perguntas[Math.floor(Math.random() * perguntas.length)];

  const nomeDaPergunta = randomPerguntas.palavra;

  const countCharacters = nomeDaPergunta.length;

  const specialCharacter = " _ ";

  const handlePress = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (
    <div className="container">
      <h2>Jogo da Forca</h2>
      <p>Essa palavra possui o total de {countCharacters} caracteres.</p>
      <p>Digite uma palavra no campo abaixo.</p>
      <input
        type="text"
        value={inputValue}
        onKeyPress={(e) => handlePress(e)}
      />
      <div className="containerForca">
        <div>
          {randomPerguntas ? (
            <span className="specialCharacter">
              {specialCharacter.repeat(countCharacters)}
            </span>
          ) : null}
        </div>
        <div>
            <img src={Carrasco} alt="Imagem da Forca" />
        </div>
      </div>
    </div>
  );
};
