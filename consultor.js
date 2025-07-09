const tbSaida = document.getElementById("tbSaida");

document.addEventListener("DOMContentLoaded", listarImoveis);
function listarImoveis() {
    //Limpando a tabela antes de rodar o código
    tbSaida.innerHTML = "";

    //criando thead da tabela
    let thead = document.createElement("thead");
    let trow = document.createElement("tr");
    let thTipo = document.createElement("th");
    let thAreaC = document.createElement("th");
    let thAreaTotal = document.createElement("th");
    let thEndereco = document.createElement("th");
    let thBairro = document.createElement("th");
    let thCidade = document.createElement("th");
    thTipo.innerHTML = "Tipo";
    thAreaC.innerHTML = "Área<br>Construída";
    thAreaTotal.innerHTML = "Área Total";
    thEndereco.innerHTML = "Endereço";
    thBairro.innerHTML = "Bairro";
    thCidade.innerHTML = "Cidade"
    trow.append(thTipo);
    trow.append(thAreaC);
    trow.append(thAreaTotal);
    trow.append(thEndereco);
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
        let tdEndereco = document.createElement("td");
        let tdBairro = document.createElement("td");
        let tdCidade = document.createElement("td");
        tdTipo.innerHTML = vetTipo[indice] || "Desconhecido";
        tdAreaC.innerHTML = vetAreaC[indice] ? vetAreaC[indice] + " m²" : "Não calculado";
        tdAreaTotal.innerHTML = vetAreaT[indice] ? vetAreaT[indice] + " m²" : "Não calculado";
        tdEndereco.innerHTML = vetLogradouro[indice] || "Desconhecido";
        tdBairro.innerHTML = vetBairro[indice] || "Desconhecido";
        tdCidade.innerHTML = vetCidade[indice] || "Desconhecido";
        trow.append(tdTipo);
        trow.append(tdAreaC);
        trow.append(tdAreaTotal);
        trow.append(tdEndereco);
        trow.append(tdBairro);
        trow.append(tdCidade);
        tbody.append(trow);
    }
    tbSaida.append(tbody);
}
