export interface OpcaoMenu {
    chave: number;
    rotulo: string;
}

/**
 * Exibe um menu numerado no console a partir de um título e uma lista de opções.
 */
export function exibirMenu(titulo: string, opcoes: OpcaoMenu[]): void {
    console.log(`===== ${titulo} =====`);
    for (const opcao of opcoes) {
        console.log(`${opcao.chave} - ${opcao.rotulo}`);
    }
}

/**
 * Lê a opção digitada pelo usuário e retorna o item correspondente da lista,
 * ou undefined caso a opção não exista.
 */
export function lerOpcao(
    teclado: (mensagem: string) => string,
    mensagem: string,
    opcoes: OpcaoMenu[]
): OpcaoMenu | undefined {
    const valor = Number(teclado(mensagem));
    return opcoes.find((opcao) => opcao.chave === valor);
}
