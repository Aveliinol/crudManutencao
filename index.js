const prompt = require("prompt-sync")();

const { criarManutencao } = require("./manutencao/criarManutencao")
const { lerManutencao } = require("./manutencao/lerManutencao")
const { atualizarManutencao } = require("./manutencao/atualizarManutencao")
const { deletarManutencao } = require("./manutencao/deletarManutencao")
const {excluirTodosServiços} = require("./manutencao/excluirTodosServiços")

function exibirMenu() {
    console.log("===========================")
    console.log("1 - Criar serviço")
    console.log("2 - Editar serviço")
    console.log("3 - Excluir serviço")
    console.log("4 - Ler serviço")
    console.log("5 - Botão Vermelho")
    console.log("6 - Sair do sistema")
    console.log("===========================")
}
let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("Digite uma opção:"));
    let id
    switch (opcao) {
        case 1:
            id = prompt("Digite a id:");
            let descricao = prompt("Digite a descrição do serviço:");
            let localizacao = prompt("Digite a localização do serviço:");
            let dataManutencao = prompt("Digite a data do serviço:");
            let tecnico = prompt("Digite o nome do tecnico:");
            let custo = prompt("Digite o valor do serviço:");
            let status = prompt("Defina os status do serviço:");
            criarManutencao(id, descricao, localizacao, dataManutencao, tecnico, custo, status)
            break;
        case 2:
            id = prompt("Digite a matricula:")
            let novoStatus = prompt("Defina o novo Status do serviço:")
            atualizarManutencao(id, novoStatus)
            break;
        case 3:
            id = prompt("Digite o id:")
            deletarManutencao(id)
            break;
        case 4:
            console.log("Lendo os serviços...")
            lerManutencao()
            break;
        case 5:
            excluirTodosServiços()
            break;
        case 6:
            console.log("Saindo do sistema")    
            break;
        default:
            console.log("Opção inválida!")
            break;
    }
} while (opcao !== 6);
