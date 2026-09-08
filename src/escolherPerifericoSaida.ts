import prompt from "prompt-sync";
import { exibirMenu, lerOpcao, OpcaoMenu } from "./utils/menu";

const teclado = prompt();

const perifericosSaida: OpcaoMenu[] = [
    { chave: 1, rotulo: "Monitor" },
    { chave: 2, rotulo: "Impressora" },
    { chave: 3, rotulo: "Caixa de Som" },
    { chave: 4, rotulo: "Fone de Ouvido" },
];

export function escolherPerifericoSaida(): void {
    exibirMenu("ESCOLHA UM PERIFÉRICO DE SAÍDA", perifericosSaida);
    const escolhido = lerOpcao(teclado, "Escolha um periférico de saída: ", perifericosSaida);

    if (escolhido) {
        console.log(`Você escolheu ${escolhido.rotulo}!`);
    } else {
        console.log("Opção inválida!");
    }
}

declare const require: any;
declare const module: any;

// Permite rodar este arquivo isoladamente (npm run saida)
// além de ser importado pelo menu principal (src/index.ts)
if (typeof require !== "undefined" && require.main === module) {
    escolherPerifericoSaida();
}
