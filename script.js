function navigateToGame(game) {
  switch (game) {
    case "numeroSecreto":
      alert("Seja bem-vindo ao nosso jogo!");

      let numeroSecreto = 5;

      let chute;
      let tentativas = 0;

      while (chute != numeroSecreto) {
        chute = parseInt(prompt("Escolha um número entre 1 e 10"));
        tentativas++;

        if (chute == numeroSecreto) {
          alert(
            `Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`
          );
        } else if (chute > numeroSecreto) {
          alert(`O número secreto é menor que ${chute}. Tente novamente.`);
        } else {
          alert(`O número secreto é maior que ${chute}. Tente novamente.`);
        }
      }
      break;
    case "somaNumeros":
      alert("Bem-vindo ao Jogo da Soma!");

      let quantidade = prompt("Quantos números você quer digitar?");
      quantidade = Number(quantidade);

      if (
        quantidade <= 0 ||
        quantidade === null ||
        quantidade === "" ||
        typeof quantidade !== "number"
      ) {
        alert(
          "Quantidade inválida. Tente novamente com um número maior que zero."
        );
      } else {
        let soma = 0;

        for (let i = 1; i <= quantidade; i++) {
          let entrada = prompt(`Digite o ${i}º número:`);
          let numero = Number(entrada);

          if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
            alert("Valor inválido. Digite um número.");
            i--;
            continue;
          }

          soma += numero;
        }
        alert(
          `A soma calculada dos ${quantidade} números digitados é: ${soma.toFixed(
            2
          )}`
        );
      }
      break;
    case "mediaAritmetica":
      alert("Bem-vindo ao Jogo da Média!");

      let quantidade2 = prompt("Quantos números você quer digitar?");
      quantidade = Number(quantidade);

      if (
        quantidade2 <= 0 ||
        quantidade2 === null ||
        quantidade2 === "" ||
        typeof quantidade2 !== "number"
      ) {
        alert(
          "Quantidade inválida. Tente novamente com um número maior que zero."
        );
      } else {
        let soma = 0;

        for (let i = 1; i <= quantidade2; i++) {
          let entrada = prompt(`Digite o ${i}º número:`);
          let numero = Number(entrada);

          if (entrada.trim() === "" || entrada === null || isNaN(numero)) {
            alert("Valor inválido. Digite um número.");
            i--;
            continue;
          }

          soma += numero;
        }

        let media = soma / quantidade2;

        alert(
          `A média calculada entre os ${quantidade2} números digitados é: ${media.toFixed(
            2
          )}`
        );
      }
      break;
    default:
      alert("Exemplo não encontrado!");
  }
}
