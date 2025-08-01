const relatorioDeTipos = document.getElementById("relatorioDeTipos");
const tbApartamentos = document.getElementById("tbApartamentos");
const tbCasas = document.getElementById("tbCasas");
const tbLojas = document.getElementById("tbLojas");
const tbTerrenos = document.getElementById("tbTerrenos");
const tbDuplex = document.getElementById("tbDuplex");
const tbSitios = document.getElementById("tbSitios");
const divApartamentos = document.getElementById("divApartamentos");
const divCasas = document.getElementById("divCasas");
const divLojas = document.getElementById("divLojas");
const divTerrenos = document.getElementById("divTerrenos");
const divDuplex = document.getElementById("divDuplex");
const divSitios = document.getElementById("divSitios");

// RELATÓRIO QUE SEPARA OS IMÓVEIS EM TABELAS SEPARADAS DEPENDENDO DO TIPO CADASTRADO
relatorioDeTipos.addEventListener("submit", gerarRelatorioTipo);
function gerarRelatorioTipo(event) {
    //Evita o recarregamento da página
    event.preventDefault();

    // Limpando as tabelas
    tbApartamentos.innerHTML = "";
    tbCasas.innerHTML = "";
    tbLojas.innerHTML = "";
    tbTerrenos.innerHTML = "";
    tbDuplex.innerHTML = "";
    tbSitios.innerHTML = "";
    divMaiorArea.innerHTML = "";

    var setTipos = new Set(vetTipo);
    var vetTiposDiferentes = Array.from(setTipos);

    // Traz um relatório de todos os apartamentos disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "APARTAMENTO") {

            // Cria um título para a tabela dos Apartamentos
            let titulo = document.createElement("h1");
            titulo.innerHTML = "APARTAMENTOS";

            let tabela = tbApartamentos;
            divApartamentos.innerHTML = "";
            divApartamentos.appendChild(titulo);
            divApartamentos.appendChild(tabela);

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
            tbApartamentos.append(thead);

            // Criando o tbody
            let tbody = document.createElement("tbody");

            for (let indTipo = 0; indTipo < vetTipo.length; indTipo++) {
                if (vetTipo[indTipo].toUpperCase() === "APARTAMENTO") {

                    // Criando o body da tabela de Apartamentos
                    let trow = document.createElement("tr");
                    let tdTipo = document.createElement("td");
                    let tdAreaC = document.createElement("td");
                    let tdAreaTotal = document.createElement("td");
                    let tdLogradouro = document.createElement("td");
                    let tdBairro = document.createElement("td");
                    let tdCidade = document.createElement("td");
                    tdTipo.innerHTML = vetTipo[indTipo] || "Desconhecido";
                    tdAreaC.innerHTML = vetAreaC[indTipo] ? vetAreaC[indTipo] + " m²" : "Não calculado";
                    tdAreaTotal.innerHTML = vetAreaT[indTipo] ? vetAreaT[indTipo] + " m²" : "Não calculado";
                    tdLogradouro.innerHTML = vetLogradouro[indTipo] || "Desconhecido";
                    tdBairro.innerHTML = vetBairro[indTipo] || "Desconhecido";
                    tdCidade.innerHTML = vetCidade[indTipo] || "Desconhecido";
                    trow.append(tdTipo);
                    trow.append(tdAreaC);
                    trow.append(tdAreaTotal);
                    trow.append(tdLogradouro);
                    trow.append(tdBairro);
                    trow.append(tdCidade);
                    tbody.append(trow);
                }

            }
            tbApartamentos.append(tbody);
        }

    }

    // Traz um relatório de todas as casas disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "CASA") {

            // Cria um título para a tabela das Casas
            let titulo = document.createElement("h1");
            titulo.innerHTML = "CASAS";

            let tabela = tbCasas;
            divCasas.innerHTML = "";
            divCasas.appendChild(titulo);
            divCasas.appendChild(tabela);

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
            tbCasas.append(thead);

            // Criando o tbody
            let tbody = document.createElement("tbody");

            for (let indTipo = 0; indTipo < vetTipo.length; indTipo++) {
                if (vetTipo[indTipo].toUpperCase() === "CASA") {

                    // Criando o body da tabela de Casas
                    let trow = document.createElement("tr");
                    let tdTipo = document.createElement("td");
                    let tdAreaC = document.createElement("td");
                    let tdAreaTotal = document.createElement("td");
                    let tdLogradouro = document.createElement("td");
                    let tdBairro = document.createElement("td");
                    let tdCidade = document.createElement("td");
                    tdTipo.innerHTML = vetTipo[indTipo] || "Desconhecido";
                    tdAreaC.innerHTML = vetAreaC[indTipo] ? vetAreaC[indTipo] + " m²" : "Não calculado";
                    tdAreaTotal.innerHTML = vetAreaT[indTipo] ? vetAreaT[indTipo] + " m²" : "Não calculado";
                    tdLogradouro.innerHTML = vetLogradouro[indTipo] || "Desconhecido";
                    tdBairro.innerHTML = vetBairro[indTipo] || "Desconhecido";
                    tdCidade.innerHTML = vetCidade[indTipo] || "Desconhecido";
                    trow.append(tdTipo);
                    trow.append(tdAreaC);
                    trow.append(tdAreaTotal);
                    trow.append(tdLogradouro);
                    trow.append(tdBairro);
                    trow.append(tdCidade);
                    tbody.append(trow);
                }

            }
            tbCasas.append(tbody);
        }

    }

    // Traz um relatório de todas as lojas disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "LOJA") {

            // Cria um título para a tabela das lojas
            let titulo = document.createElement("h1");
            titulo.innerHTML = "LOJAS";

            let tabela = tbLojas;
            divLojas.innerHTML = "";
            divLojas.appendChild(titulo);
            divLojas.appendChild(tabela);

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
            tbLojas.append(thead);

            // Criando o tbody
            let tbody = document.createElement("tbody");

            for (let indTipo = 0; indTipo < vetTipo.length; indTipo++) {
                if (vetTipo[indTipo].toUpperCase() === "LOJA") {

                    // Criando o body da tabela de Lojas
                    let trow = document.createElement("tr");
                    let tdTipo = document.createElement("td");
                    let tdAreaC = document.createElement("td");
                    let tdAreaTotal = document.createElement("td");
                    let tdLogradouro = document.createElement("td");
                    let tdBairro = document.createElement("td");
                    let tdCidade = document.createElement("td");
                    tdTipo.innerHTML = vetTipo[indTipo] || "Desconhecido";
                    tdAreaC.innerHTML = vetAreaC[indTipo] ? vetAreaC[indTipo] + " m²" : "Não calculado";
                    tdAreaTotal.innerHTML = vetAreaT[indTipo] ? vetAreaT[indTipo] + " m²" : "Não calculado";
                    tdLogradouro.innerHTML = vetLogradouro[indTipo] || "Desconhecido";
                    tdBairro.innerHTML = vetBairro[indTipo] || "Desconhecido";
                    tdCidade.innerHTML = vetCidade[indTipo] || "Desconhecido";
                    trow.append(tdTipo);
                    trow.append(tdAreaC);
                    trow.append(tdAreaTotal);
                    trow.append(tdLogradouro);
                    trow.append(tdBairro);
                    trow.append(tdCidade);
                    tbody.append(trow);
                }

            }
            tbLojas.append(tbody);
        }

    }

    // Traz um relatório de todos os Terrenos disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "TERRENO") {

            // Cria um título para a tabela dos Terrenos
            let titulo = document.createElement("h1");
            titulo.innerHTML = "TERRENOS";

            let tabela = tbTerrenos;
            divTerrenos.innerHTML = "";
            divTerrenos.appendChild(titulo);
            divTerrenos.appendChild(tabela);

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
            tbTerrenos.append(thead);

            // Criando o tbody
            let tbody = document.createElement("tbody");

            for (let indTipo = 0; indTipo < vetTipo.length; indTipo++) {
                if (vetTipo[indTipo].toUpperCase() === "TERRENO") {

                    // Criando o body da tabela de Terrenos
                    let trow = document.createElement("tr");
                    let tdTipo = document.createElement("td");
                    let tdAreaC = document.createElement("td");
                    let tdAreaTotal = document.createElement("td");
                    let tdLogradouro = document.createElement("td");
                    let tdBairro = document.createElement("td");
                    let tdCidade = document.createElement("td");
                    tdTipo.innerHTML = vetTipo[indTipo] || "Desconhecido";
                    tdAreaC.innerHTML = vetAreaC[indTipo] ? vetAreaC[indTipo] + " m²" : "Não calculado";
                    tdAreaTotal.innerHTML = vetAreaT[indTipo] ? vetAreaT[indTipo] + " m²" : "Não calculado";
                    tdLogradouro.innerHTML = vetLogradouro[indTipo] || "Desconhecido";
                    tdBairro.innerHTML = vetBairro[indTipo] || "Desconhecido";
                    tdCidade.innerHTML = vetCidade[indTipo] || "Desconhecido";
                    trow.append(tdTipo);
                    trow.append(tdAreaC);
                    trow.append(tdAreaTotal);
                    trow.append(tdLogradouro);
                    trow.append(tdBairro);
                    trow.append(tdCidade);
                    tbody.append(trow);
                }

            }
            tbTerrenos.append(tbody);
        }

    }

    // Traz um relatório de todos os Duplex disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "DUPLEX") {

            // Cria um título para a tabela das duplex
            let titulo = document.createElement("h1");
            titulo.innerHTML = "DUPLEX";

            let tabela = tbDuplex;
            divDuplex.innerHTML = "";
            divDuplex.appendChild(titulo);
            divDuplex.appendChild(tabela);

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
            tbDuplex.append(thead);

            // Criando o tbody
            let tbody = document.createElement("tbody");

            for (let indTipo = 0; indTipo < vetTipo.length; indTipo++) {
                if (vetTipo[indTipo].toUpperCase() === "DUPLEX") {

                    // Criando o body da tabela de Duplex
                    let trow = document.createElement("tr");
                    let tdTipo = document.createElement("td");
                    let tdAreaC = document.createElement("td");
                    let tdAreaTotal = document.createElement("td");
                    let tdLogradouro = document.createElement("td");
                    let tdBairro = document.createElement("td");
                    let tdCidade = document.createElement("td");
                    tdTipo.innerHTML = vetTipo[indTipo] || "Desconhecido";
                    tdAreaC.innerHTML = vetAreaC[indTipo] ? vetAreaC[indTipo] + " m²" : "Não calculado";
                    tdAreaTotal.innerHTML = vetAreaT[indTipo] ? vetAreaT[indTipo] + " m²" : "Não calculado";
                    tdLogradouro.innerHTML = vetLogradouro[indTipo] || "Desconhecido";
                    tdBairro.innerHTML = vetBairro[indTipo] || "Desconhecido";
                    tdCidade.innerHTML = vetCidade[indTipo] || "Desconhecido";
                    trow.append(tdTipo);
                    trow.append(tdAreaC);
                    trow.append(tdAreaTotal);
                    trow.append(tdLogradouro);
                    trow.append(tdBairro);
                    trow.append(tdCidade);
                    tbody.append(trow);
                }

            }
            tbDuplex.append(tbody);
        }

    }

    // Traz um relatório de todos os sítios disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "SÍTIO") {

            // Cria um título para a tabela dos sítios
            let titulo = document.createElement("h1");
            titulo.innerHTML = "SÍTIOS";

            let tabela = tbSitios;
            divSitios.innerHTML = "";
            divSitios.appendChild(titulo);
            divSitios.appendChild(tabela);

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
            tbSitios.append(thead);

            // Criando o tbody
            let tbody = document.createElement("tbody");

            for (let indTipo = 0; indTipo < vetTipo.length; indTipo++) {
                if (vetTipo[indTipo].toUpperCase() === "SÍTIO") {

                    // Criando o body da tabela de Sítios
                    let trow = document.createElement("tr");
                    let tdTipo = document.createElement("td");
                    let tdAreaC = document.createElement("td");
                    let tdAreaTotal = document.createElement("td");
                    let tdLogradouro = document.createElement("td");
                    let tdBairro = document.createElement("td");
                    let tdCidade = document.createElement("td");
                    tdTipo.innerHTML = vetTipo[indTipo] || "Desconhecido";
                    tdAreaC.innerHTML = vetAreaC[indTipo] ? vetAreaC[indTipo] + " m²" : "Não calculado";
                    tdAreaTotal.innerHTML = vetAreaT[indTipo] ? vetAreaT[indTipo] + " m²" : "Não calculado";
                    tdLogradouro.innerHTML = vetLogradouro[indTipo] || "Desconhecido";
                    tdBairro.innerHTML = vetBairro[indTipo] || "Desconhecido";
                    tdCidade.innerHTML = vetCidade[indTipo] || "Desconhecido";
                    trow.append(tdTipo);
                    trow.append(tdAreaC);
                    trow.append(tdAreaTotal);
                    trow.append(tdLogradouro);
                    trow.append(tdBairro);
                    trow.append(tdCidade);
                    tbody.append(trow);
                }

            }
            tbSitios.append(tbody);
        }

    }
}

// -----------------------------------------------------------------------------------------------------------------//
const relatorioDeArea = document.getElementById("relatorioDeArea");
const divMaiorArea = document.getElementById("divMaiorArea");
const tbMaiorArea = document.getElementById("tbMaiorArea");


//RELATÓRIO QUE TRAZ OS IMÓVEIS DE CADA TIPO COM MAIOR ÁREA CONSTRUÍDA
relatorioDeArea.addEventListener("submit", gerarRelatorioArea);
function gerarRelatorioArea(event) {
    // Evita o recarregamento da página
    event.preventDefault();

    // Limpando as divs e tabela de maior área
    divApartamentos.innerHTML = "";
    divCasas.innerHTML = "";
    divLojas.innerHTML = "";
    divTerrenos.innerHTML = "";
    divDuplex.innerHTML = "";
    divSitios.innerHTML = "";
    divMaiorArea.innerHTML = "";
    tbMaiorArea.innerHTML = "";

    var setTipos = new Set(vetTipo);
    var vetTiposDiferentes = Array.from(setTipos);

    // Cria o título da tabela do relatório
    let titulo = document.createElement("h1");
    titulo.innerHTML = "IMÓVEIS COM MAIOR ÁREA CONSTRUÍDA POR TIPO"
    divMaiorArea.appendChild(titulo);

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
    tbMaiorArea.append(thead);

    // Criando o tbody
    let tbody = document.createElement("tbody");

    for (let indice1 = 0; indice1 < vetTiposDiferentes.length; indice1++) {
        let tipoAtual = vetTiposDiferentes[indice1].toUpperCase();
        let maiorAreaEncontrada = -1; // Definimos o valor como -1 afim de verificações pois não existe imóvel com área construída menor que zero
        let indiceAreaMaior = -1; // Definimos também como -1 afim de verficações pois nenhum elemento do vetor assumirá indice -1

        for (let indice2 = 0; indice2 < vetTipo.length; indice2++) {
            if (vetTipo[indice2].toUpperCase() === tipoAtual && vetAreaC[indice2] > maiorAreaEncontrada) {
                maiorAreaEncontrada = vetAreaC[indice2];
                indiceAreaMaior = indice2;
            }
        }

        if (indiceAreaMaior !== -1) {
            // Criando o body da tabela de dos imóveis de cada tipo com maior área construída
            let trow = document.createElement("tr");
            let tdTipo = document.createElement("td");
            let tdAreaC = document.createElement("td");
            let tdAreaTotal = document.createElement("td");
            let tdLogradouro = document.createElement("td");
            let tdBairro = document.createElement("td");
            let tdCidade = document.createElement("td");
            tdTipo.innerHTML = vetTipo[indiceAreaMaior] || "Desconhecido";
            tdAreaC.innerHTML = vetAreaC[indiceAreaMaior] ? vetAreaC[indiceAreaMaior] + " m²" : "Não calculado";
            tdAreaTotal.innerHTML = vetAreaT[indiceAreaMaior] ? vetAreaT[indiceAreaMaior] + " m²" : "Não calculado";
            tdLogradouro.innerHTML = vetLogradouro[indiceAreaMaior] || "Desconhecido";
            tdBairro.innerHTML = vetBairro[indiceAreaMaior] || "Desconhecido";
            tdCidade.innerHTML = vetCidade[indiceAreaMaior] || "Desconhecido";
            trow.append(tdTipo);
            trow.append(tdAreaC);
            trow.append(tdAreaTotal);
            trow.append(tdLogradouro);
            trow.append(tdBairro);
            trow.append(tdCidade);
            tbody.append(trow);
        }
    }
    tbMaiorArea.appendChild(tbody);
    divMaiorArea.appendChild(tbMaiorArea);
}