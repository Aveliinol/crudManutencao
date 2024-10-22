const { manutencao } = require("./manutecao");

function deletarManutencao (id){
    try {
        const indice = manutencao.findIndex(elementoDoArray =>
         elementoDoArray.id === id );
     if (indice === -1 ){
        console.log("Serviço não encontrado");
     } else {
        manutencao.splice(indice, 1);
       console.log("Serviço deletado com sucesso"); 
     }
    } catch (error) {
        console.error("erro ao tenta deleta serviço", error.message);
    }
}

module.exports = { deletarManutencao };