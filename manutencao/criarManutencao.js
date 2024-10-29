const { manutencao } = require("./manutecao");
const validator = require("validator");

function criarManutencao(id, descricao, localizacao, dataManutencao, tecnico, custo, status) {
    const novoServico = { id, descricao, localizacao, dataManutencao, tecnico, custo, status };
    try {
        if(!validator.isDate(dataManutencao, {format: "DD/MM/YYYY"})){
            console.error("Você deve por uma data válida!")
        }
     if(validator.isEmpty(id) || validator.isEmpty(descricao) || validator.isEmpty(localizacao) ||
      validator.isEmpty(dataManutencao) ||validator.isEmpty(tecnico) || validator.isEmpty(custo) || 
      validator.isEmpty(status) ){
        console.error("Todos os campos devem serem preenchidos")
             return
     }
        manutencao.push(novoServico);
    } catch (error) {
    console.error("Erro ao tenta um novo serviço", error.message);
    }
}

module.exports = { criarManutencao };