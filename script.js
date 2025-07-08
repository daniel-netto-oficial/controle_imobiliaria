const imoveis = [
  { tipo: "Casa", areaConstruida: 120, areaTotal: 200, logradouro: "Rua A", bairro: "Centro", cidade: "São Paulo", cep: "01000-000" },
  { tipo: "Apartamento", areaConstruida: 80, areaTotal: 90, logradouro: "Rua B", bairro: "Jardins", cidade: "São Paulo", cep: "01400-000" },
  { tipo: "Loja", areaConstruida: 100, areaTotal: 150, logradouro: "Av. Comercial", bairro: "Comércio", cidade: "Rio de Janeiro", cep: "20000-000" },
];

function listarImoveis(lista) {
  const container = document.getElementById("listaImoveis");
  container.innerHTML = "";
  lista.forEach((i, index) => {
    container.innerHTML += `<div class='imovel'>
      <strong>${i.tipo}</strong><br>
      Área construída: ${i.areaConstruida} m²<br>
      Área total: ${i.areaTotal} m²<br>
      Endereço: ${i.logradouro}, ${i.bairro}, ${i.cidade} - CEP: ${i.cep}<br>
    </div>`;
  });
}

function adicionarImovel() {
  const novo = {
    tipo: document.getElementById("tipo").value,
    areaConstruida: parseFloat(document.getElementById("areaConstruida").value),
    areaTotal: parseFloat(document.getElementById("areaTotal").value),
    logradouro: document.getElementById("logradouro").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    cep: document.getElementById("cep").value
  };
  imoveis.push(novo);
  listarImoveis(imoveis);
}

function aplicarFiltros() {
  const tipo = document.getElementById("filtroTipo").value.toLowerCase();
  const min = parseFloat(document.getElementById("areaMin").value) || 0;
  const max = parseFloat(document.getElementById("areaMax").value) || Infinity;
  const cidade = document.getElementById("filtroCidade").value.toLowerCase();

  const filtrados = imoveis.filter(i =>
    i.tipo.toLowerCase().includes(tipo) &&
    i.areaConstruida >= min &&
    i.areaConstruida <= max &&
    i.cidade.toLowerCase().includes(cidade)
  );
  listarImoveis(filtrados);
}

listarImoveis(imoveis);