const tbSaida = document.getElementById("tbSaida");

// Função para a listagem de todos os Imóveis disponíveis dentro vetor no instante em que a página é carregada//
document.addEventListener("DOMContentLoaded", listarImoveis);
function listarImoveis() {
    //Limpando a tabela
    tbSaida.innerHTML = "";

    //criando thead da tabela
    let thead = document.createElement("thead");
    let trow = document.createElement("tr");
    let thTipo = document.createElement("th");
    let thAreaC = document.createElement("th");
    let thAreaTotal = document.createElement("th");
    let thLogradouro = document.createElement("th");
    let thBairro = document.createElement("th");
    let thCidade = document.createElement("th");
    thTipo.innerHTML = "Tipo";
    thAreaC.innerHTML = "Área<br>Construída";
    thAreaTotal.innerHTML = "Área Total";
    thLogradouro.innerHTML = "Logradouro";
    thBairro.innerHTML = "Bairro";
    thCidade.innerHTML = "Cidade"
    trow.append(thTipo);
    trow.append(thAreaC);
    trow.append(thAreaTotal);
    trow.append(thLogradouro);
    trow.append(thBairro);
    trow.append(thCidade);
    thead.append(trow);
    tbSaida.append(thead);

    //criando o tbody da tabela
    let tbody = document.createElement("tbody");

    for (let indice = 0; indice < vetTipo.length; indice++) {
        let trow = document.createElement("tr");
        let tdTipo = document.createElement("td");
        let tdAreaC = document.createElement("td");
        let tdAreaTotal = document.createElement("td");
        let tdLogradouro = document.createElement("td");
        let tdBairro = document.createElement("td");
        let tdCidade = document.createElement("td");
        tdTipo.innerHTML = vetTipo[indice] || "Desconhecido";
        tdAreaC.innerHTML = vetAreaC[indice] ? vetAreaC[indice] + " m²" : "Não calculado";
        tdAreaTotal.innerHTML = vetAreaT[indice] ? vetAreaT[indice] + " m²" : "Não calculado";
        tdLogradouro.innerHTML = vetLogradouro[indice] || "Desconhecido";
        tdBairro.innerHTML = vetBairro[indice] || "Desconhecido";
        tdCidade.innerHTML = vetCidade[indice] || "Desconhecido";
        trow.append(tdTipo);
        trow.append(tdAreaC);
        trow.append(tdAreaTotal);
        trow.append(tdLogradouro);
        trow.append(tdBairro);
        trow.append(tdCidade);
        tbody.append(trow);
    }
    tbSaida.append(tbody);
}

// Função para adicionar os dados de um imóvel ao final de todos os vetores e criando uma nova tabela de saída com os novos dados adicionados//
const inTipo = document.getElementById("inTipo");
const inAreaC = document.getElementById("inAreaC");
const inAreaT = document.getElementById("inAreaT");
const inLogradouro = document.getElementById("inLogradouro");
const inBairro = document.getElementById("inBairro");
const inCidade = document.getElementById("inCidade");
const btAdicionar = document.getElementById("btAdicionar");

btAdicionar.addEventListener("click" , adicionarImovel);
function adicionarImovel(){
    //Limpando a tabela
    tbSaida.innerHTML = "";

    var tipo = (inTipo.value);
    var areaC = (inAreaC.value);
    var areaT = (inAreaT.value);
    var logradouro = (inLogradouro.value);
    var bairro = (inBairro.value);
    var cidade = (inCidade.value);

    vetTipo.push(tipo);
    vetAreaC.push(areaC);
    vetAreaT.push(areaT);
    vetLogradouro.push(logradouro);
    vetBairro.push(bairro);
    vetCidade.push(cidade);

    //Limpando a tabela
    tbSaida.innerHTML = "";

    //criando thead da tabela
    let thead = document.createElement("thead");
    let trow = document.createElement("tr");
    let thTipo = document.createElement("th");
    let thAreaC = document.createElement("th");
    let thAreaTotal = document.createElement("th");
    let thLogradouro = document.createElement("th");
    let thBairro = document.createElement("th");
    let thCidade = document.createElement("th");
    thTipo.innerHTML = "Tipo";
    thAreaC.innerHTML = "Área<br>Construída";
    thAreaTotal.innerHTML = "Área Total";
    thLogradouro.innerHTML = "Logradouro";
    thBairro.innerHTML = "Bairro";
    thCidade.innerHTML = "Cidade"
    trow.append(thTipo);
    trow.append(thAreaC);
    trow.append(thAreaTotal);
    trow.append(thLogradouro);
    trow.append(thBairro);
    trow.append(thCidade);
    thead.append(trow);
    tbSaida.append(thead);

    //criando o tbody da tabela
    let tbody = document.createElement("tbody");

    for (let indice = 0; indice < vetTipo.length; indice++) {
        let trow = document.createElement("tr");
        let tdTipo = document.createElement("td");
        let tdAreaC = document.createElement("td");
        let tdAreaTotal = document.createElement("td");
        let tdLogradouro = document.createElement("td");
        let tdBairro = document.createElement("td");
        let tdCidade = document.createElement("td");
        tdTipo.innerHTML = vetTipo[indice] || "Desconhecido";
        tdAreaC.innerHTML = vetAreaC[indice] ? vetAreaC[indice] + " m²" : "Não calculado";
        tdAreaTotal.innerHTML = vetAreaT[indice] ? vetAreaT[indice] + " m²" : "Não calculado";
        tdLogradouro.innerHTML = vetLogradouro[indice] || "Desconhecido";
        tdBairro.innerHTML = vetBairro[indice] || "Desconhecido";
        tdCidade.innerHTML = vetCidade[indice] || "Desconhecido";
        trow.append(tdTipo);
        trow.append(tdAreaC);
        trow.append(tdAreaTotal);
        trow.append(tdLogradouro);
        trow.append(tdBairro);
        trow.append(tdCidade);
        tbody.append(trow);
    }
    tbSaida.append(tbody);
}
