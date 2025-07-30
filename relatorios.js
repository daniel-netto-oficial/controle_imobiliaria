const relatorioDeTipos = document.getElementById("relatorioDeTipos");
const tbApartamentos = document.getElementById("tbApartamentos");
const tbCasas = document.getElementById("tbCasas");
const tbLojas = document.getElementById("tbLojas");
const tbTerrenos = document.getElementById("tbTerrenos");
const tbDuplex = document.getElementById("tbDuplex");
const tbSitios = document.getElementById("tbSitios");

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

    var setTipos = new Set(vetTipo);
    var vetTiposDiferentes = Array.from(setTipos);

// Traz um relatório de todos os apartamentos disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "APARTAMENTO") {

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
            tbCasas.append(tbody);
        }

    }

// Traz um relatório de todas as lojas disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "LOJA") {

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
            tbLojas.append(tbody);
        }

    }

// Traz um relatório de todos os Terrenos disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "TERRENO") {

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
            tbTerrenos.append(tbody);
        }

    }

// Traz um relatório de todos os Duplex disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "DUPLEX") {

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
            tbDuplex.append(tbody);
        }

    }

// Traz um relatório de todos os sítios disponíveis, criando uma tabela individual
    for (let indTdifer = 0; indTdifer < vetTiposDiferentes.length; indTdifer++) {
        if (vetTiposDiferentes[indTdifer].toUpperCase() === "SÍTIO") {

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
            tbSitios.append(tbody);
        }

    }
}