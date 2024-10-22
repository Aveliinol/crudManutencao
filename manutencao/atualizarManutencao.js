const { manutencao } = require("./manutecao");

function atualizarManutencao(id, novoStatus) {
    try {
        const servico = manutencao.find(elementoDoArray =>
            elementoDoArray.id === id 
        )
      if (servico) {
        servico.status = novoStatus

    console.log("Atualização feita com sucesso!"); 
      }else {
        console.log("Serviço não encontrado");
      }   
    } catch (error) {
        console.error("Erro ao atualizar serviço")
    }
}

module.exports = { atualizarManutencao } 