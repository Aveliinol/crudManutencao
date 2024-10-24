const { manutencao } = require("./manutecao");
const validator = require("validator");

function atualizarManutencao(id, novoStatus) {
    try {
      if(validator.isEmpty(id) || validator.isEmpty(novoStatus)){
        console.error("Dados não atualizados porque todos os campos não foram preenchidos")
          return
      }
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