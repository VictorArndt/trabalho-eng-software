import prompt from "prompt-sync";
import { exibirMenu, lerOpcao, OpcaoMenu } from "./utils/menu";

declare const require: { main: unknown };
declare const module: unknown;

const teclado = prompt();

const perifericosEntrada: OpcaoMenu[] = [
    { chave: 1, rotulo: "Mouse" },
    { chave: 2, rotulo: "Teclado" },
    { chave: 3, rotulo: "Webcam" },
    { chave: 4, rotulo: "Scanner" },
];

export function escolherPerifericoEntrada(): void {
    exibirMenu("ESCOLHA UM PERIFÉRICO DE ENTRADA", perifericosEntrada);
    const escolhido = lerOpcao(teclado, "Escolha um periférico de entrada: ", perifericosEntrada);

    if (escolhido) {
        console.log(`Você escolheu ${escolhido.rotulo}!`);
    } else {
        console.log("Opção inválida!");
    }
}

// Permite rodar este arquivo isoladamente (npm run entrada)
// além de ser importado pelo menu principal (src/index.ts)
if (require.main === module) {
    escolherPerifericoEntrada();
}
