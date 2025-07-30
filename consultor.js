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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// Função para adicionar os dados de um imóvel ao final de todos os vetores, e criando uma nova tabela de saída com os novos dados adicionados//
const inTipo = document.getElementById("inTipo");
const inAreaC = document.getElementById("inAreaC");
const inAreaT = document.getElementById("inAreaT");
const inLogradouro = document.getElementById("inLogradouro");
const inBairro = document.getElementById("inBairro");
const inCidade = document.getElementById("inCidade");
const formAdicionarImovel = document.getElementById("formAdicionarImovel");

formAdicionarImovel.addEventListener("submit", adicionarImovel);
function adicionarImovel(event) {
    //Evita o recarregamento da página
    event.preventDefault();
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

    // Limpa os inputs do formulário após adicionar
    formAdicionarImovel.reset();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------//

//Função para buscar imóveis conforme o tipo e a cidade, e criando uma nova tabela com os imóveis respectivos//
const inTipo1 = document.getElementById("inTipo1");
const inCidade1 = document.getElementById("inCidade1");
const formBuscaImoveis = document.getElementById("formBuscaImoveis");

formBuscaImoveis.addEventListener("submit", buscarImoveis);
function buscarImoveis(event) {
    //Evita o recarregamento da página
    event.preventDefault();
    //Limpando a tabela
    tbSaida.innerHTML = "";

    var tipoPesq = (inTipo1.value).trim().toUpperCase();
    var cidadePesq = (inCidade1.value).trim().toUpperCase();
    var tipoAtual = "";
    var cidadeAtual = "";
    var imovelCorrespondente = false;

    // Criando o thead da tabela
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

    // Criando o tbody da tabela
    let tbody = document.createElement("tbody");

    for (let indice = 0; indice < vetTipo.length; indice++) {
        tipoAtual = vetTipo[indice].toUpperCase();
        cidadeAtual = vetCidade[indice].toUpperCase();

        if (tipoAtual.includes(tipoPesq) && cidadeAtual.includes(cidadePesq)) {
            imovelCorrespondente = true;

            // Criando o restante da tabela com os imóveis com os tipos e a cidade digitada //
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
    }

    // Mostra uma mensagem dizendo que nenhum imóvel foi encontrado
    if (imovelCorrespondente == true) {
        tbSaida.append(tbody);
    } else {
        tbSaida.innerHTML = "";
        let h2 = document.createElement("h2");
        h2.innerHTML = "Nenhum imóvel correspondente foi encontrado.";
        tbSaida.appendChild(h2);
    }
    // Limpa os inputs do formulário após o click no botão
    formBuscaImoveis.reset();
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------//

// Função para filtrar imóveis com base no tipo ou área construída ou cidade onde se localiza //
const formFiltroImoveis = document.getElementById("formFiltroImoveis");
const inTipo2 = document.getElementById("inTipo2");
const inCidade2 = document.getElementById("inCidade2");
const inAreaMin = document.getElementById("inAreaMin");
const inAreaMax = document.getElementById("inAreaMax");

formFiltroImoveis.addEventListener("submit", filtrarImoveis);
function filtrarImoveis(event) {
    //Evita o recarregamento da página
    event.preventDefault();
    //Limpando a tabela
    tbSaida.innerHTML = "";

    var tipoPesq = (inTipo2.value).trim().toUpperCase();
    var cidadePesq = (inCidade2.value).trim().toUpperCase();
    var tipoAtual = "";
    var cidadeAtual = "";
    var imovelCorrespondente = false;

    // Criando o thead da tabela
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

    // Criando o tbody da tabela
    let tbody = document.createElement("tbody");

    for (let indice = 0; indice < vetTipo.length; indice++) {
        tipoAtual = vetTipo[indice].toUpperCase();
        cidadeAtual = vetCidade[indice].toUpperCase();
        let areaAtual = vetAreaC[indice];

        let tipoOK = tipoAtual.includes(tipoPesq) || tipoPesq === "";
        let cidadeOK = cidadeAtual.includes(cidadePesq) || cidadePesq === "";

        let areaValida = areaAtual > 0;
        let areaMinOK = inAreaMin.value.trim() === "" || (areaValida &&areaAtual) >= Number(inAreaMin.value.trim());
        let areaMaxOK = inAreaMax.value.trim() === "" || (areaAtual && areaAtual) <= Number(inAreaMax.value.trim());

        if (tipoOK && cidadeOK && areaMinOK && areaMaxOK) {
            imovelCorrespondente = true;

            // Criando o restante da tabela com os imóveis com os tipos e a cidade digitada //
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
    }

    // Mostra uma mensagem dizendo que nenhum imóvel foi encontrado
    if (imovelCorrespondente == true) {
        tbSaida.append(tbody);
    } else {
        tbSaida.innerHTML = "";
        let h2 = document.createElement("h2");
        h2.innerHTML = "Nenhum imóvel correspondente foi encontrado.";
        tbSaida.appendChild(h2);
    }
    // Limpa os inputs do formulário após o click no botão
    formFiltroImoveis.reset();
}