const { manutencao } = require("./manutecao");

function excluirTodosServiços(){
    try {
      manutencao.length = 0
    } catch (error) {
        console.error("Erro ao excluir todos os serviços")
}}

module.exports = { excluirTodosServiços };