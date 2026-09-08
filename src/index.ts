import prompt from "prompt-sync";
import { escolherPerifericoEntrada } from "./escolherPerifericoEntrada";
import { escolherPerifericoSaida } from "./escolherPerifericoSaida";

const teclado = prompt();

function main(): void {
    console.log("===== MENU PRINCIPAL =====");
    console.log("1 - Escolher Periférico de Entrada");
    console.log("2 - Escolher Periférico de Saída");
    console.log("0 - Sair");

    const opcao = Number(teclado("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            escolherPerifericoEntrada();
            break;
        case 2:
            escolherPerifericoSaida();
            break;
        case 0:
            console.log("Até mais!");
            break;
        default:
            console.log("Opção inválida!");
    }
}

main();
