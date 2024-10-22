const prompt = require("prompt-sync")();

const { criarManutencao } = require("./manutencao/criarManutencao")
const { lerManutencao } = require("./manutencao/lerManutencao")
const { atualizarManutencao } = require("./manutencao/atualizarManutencao")
const { deletarManutencao } = require("./manutencao/deletarManutencao")

criarManutencao("4001952", "Vaso entubido no almoxarifado", "Rua fulaninho, 32, tirol", "24/08/2024",
     "Sandoval", "120", "Em aberto" );

 criarManutencao("4001953", "Portão automatico está enperrando", "Rua fulaninho, 34, Parque dos coqueiros", "29/08/2024",
        "Valdemar", "150", "Em aberto" );

lerManutencao();    

atualizarManutencao("4001952", "Serviço concluido" );

lerManutencao();  

deletarManutencao("4001953");

lerManutencao();
