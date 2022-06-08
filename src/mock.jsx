import { createContext, useContext } from "react";

const dicasEPalavras = [
    {
        palavra: "Amendoim",
        dica: "É de comer e é salgadinho."
    },
    {
        palavra: "Banheiro",
        dica: "Um local que pode conter bactérias."
    },
    {
        palavra: "Caatinga",
        dica: "Um tipo de vegetação regional."
    },
    {
        palavra: "Cachorro",
        dica: "Dizem que é o melhor amigo do homem."
    },
    {
        palavra: "Campeonato",
        dica: "Times de futebol disputam por um."
    },
    {
        palavra: "Capricórnio",
        dica: "Um símbolo do zodíaco."
    },
    {
        palavra: "Catapora",
        dica: "Uma doença que causa marcas na pele."
    },
    {
        palavra: "Corrupção",
        dica: "Uma prática muito comum entre políticos."
    },
    {
        palavra: "Relampejar",
        dica: "Fenômeno que ocasionalmente ocorre em dias chuvosos."
    },
    {
        palavra: "Nadadeira",
        dica: "Um membro de animais marinhos."
    },
    {
        palavra: "Combustão",
        dica: "Ação que ocorre no motor de um veículo."
    },
    {
        palavra: "Amazônia",
        dica: "É chamada de pulmão do mundo."
    },
    {
        palavra: "Tom e Jerry",
        dica: "Um desenho animado sobre dois animais."
    },
    {
        palavra: "Calopsita",
        dica: "Uma ave muito barulhenta."
    },
    {
        palavra: "Candelabro",
        dica: "Objeto para apoiar um objeto com chamas."
    },
    {
        palavra: "Quartzo",
        dica: "Uma pedra semi-preciosa."
    },
    {
        palavra: "Duplex",
        dica: "Apartamento com mais de um andar."
    },
    {
        palavra: "Cripta",
        dica: "Local onde se guarda relíquia e tesouros."
    },
    {
        palavra: "Blitz",
        dica: "Ação realizada por agentes de trânsito."
    },
    {
        palavra: "Azulejo",
        dica: "Item de obra colocado em chão e paredes."
    },
    {
        palavra: "Xícara",
        dica: "Recipiente onde se bebe chá."
    },
    {
        palavra: "Trilogia",
        dica: "Nome dado a sequência de filmes."
    },
    {
        palavra: "Serenata",
        dica: "Ato de tocar para a amada."
    },
    {
        palavra: "Pulmão",
        dica: "Orgão humano responsável pela respiração."
    },
    {
        palavra: "Pneumonia",
        dica: "Doença que atinge o pulmão."
    },
    {
        palavra: "Pedreiro",
        dica: "Responsável pela construção civil."
    },
    {
        palavra: "Paçoca",
        dica: "Feito de farinha de amendoim."
    },
    {
        palavra: "Oração",
        dica: "Ato de agradecer ao pai maior."
    },
    {
        palavra: "Moeda",
        dica: "O dinheiro quando não é em nota é em..."
    },
    {
        palavra: "Menta",
        dica: "Ingrediente utilizado pela indústria farmaceutica."
    },
    {
        palavra: "Manjericão",
        dica: "Uma erva para temparar massas."
    },
    {
        palavra: "História",
        dica: "Uma matéria ensinada na escola."
    },
    {
        palavra: "Galáxia",
        dica: "Nela habita os planetas."
    },
    {
        palavra: "Força",
        dica: "Utilizado para levantar objetos."
    },
    {
        palavra: "Esparadrapo",
        dica: "Utilizado em feridas e machucados."
    },    {
        palavra: "Empenhado",
        dica: "Quem quer fazer as coisas com vontade."
    },
    {
        palavra: "Crepúsculo",
        dica: "Possui um personagem que brilha no sol."
    },
    {
        palavra: "Titanic",
        dica: "Um filme que ganhou 11 oscars."
    },
    {
        palavra: "Refrigerador",
        dica: "Eletrodoméstico grande e pesado."
    },
    {
        palavra: "Meditação",
        dica: "Ato de relaxar seu corpo e mente."
    },
]

export const contextPerguntas = createContext(dicasEPalavras);

export const useContextPerguntas = () => {
    return useContext(contextPerguntas);
}

