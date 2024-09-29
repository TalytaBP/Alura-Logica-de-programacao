alert ("Boas vindas ao jogo do número secreto")
let numeroSecreto = 3;
let chute = prompt("Escolha um número entre 1 e 10");

//Se o chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Isso ai! Você acertou o número secreto ${numeroSecreto}`);
} else {
    alert ("Você errou!");
}