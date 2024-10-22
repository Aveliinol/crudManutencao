const { manutencao } = require("./manutecao");

function lerManutencao() {
 try {
    console.table(manutencao);
 } catch (error) {
    console.error("Erro ao ler o serviço", error.message)
 }
}

module.exports = { lerManutencao };