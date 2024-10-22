const { manutencao } = require("./manutecao");

function criarManutencao(id, descricao, localizacao, dataManutencao, tecnico, custo, status) {
    const novoServico = { id, descricao, localizacao, dataManutencao, tecnico, custo, status };
    try {
        manutencao.push(novoServico);
    } catch (error) {
    console.error("Erro ao tenta um novo serviço", error.message);
    }
}

module.exports = { criarManutencao };