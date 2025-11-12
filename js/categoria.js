document.addEventListener("DOMContentLoaded", () => {
  const categoriaSelecionada = localStorage.getItem("categoriaSelecionada");
  const tituloCategoria = document.getElementById("titulo-categoria");
  const listaProdutos = document.getElementById("lista-produtos");

  // Exibe o nome da categoria
  tituloCategoria.textContent = categoriaSelecionada;

  // Produtos simulados
  const produtos = [
    {
      nome: "Tinta Acrílica Premium",
      descricao: "Alta durabilidade e acabamento perfeito.",
      preco: 89.9,
      categoria: "Tintas para Interior",
      imagem: "assets/produtos/tinta1.jpg"
    },
    {
      nome: "Tinta Fosca Interior",
      descricao: "Ideal para ambientes internos com acabamento suave.",
      preco: 75.5,
      categoria: "Tintas para Exterior",
      imagem: "assets/produtos/tinta2.jpg"
    },
    {
      nome: "Tinta Brilhante Exterior",
      descricao: "Resistência máxima ao sol e chuva.",
      preco: 95.0,
      categoria: "Tintas Especiais",
      imagem: "assets/produtos/tinta3.jpg"
    },
    {
      nome: "Tinta Especial Texturizada",
      descricao: "Textura diferenciada para paredes modernas.",
      preco: 110.0,
      categoria: "Acessórios de Pintura",
      imagem: "assets/produtos/tinta4.jpg"
    }
  ];

  // Filtra os produtos da categoria
  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === categoriaSelecionada
  );

  // Renderiza os produtos
  if (produtosFiltrados.length === 0) {
    listaProdutos.innerHTML = `<p>Nenhum produto encontrado nesta categoria.</p>`;
  } else {
    listaProdutos.innerHTML = produtosFiltrados
      .map(
        (p) => `
        <div class="produto-card">
          <img src="${p.imagem}" alt="${p.nome}">
          <h3>${p.nome}</h3>
          <p>${p.descricao}</p>
          <span>R$ ${p.preco.toFixed(2)}</span>
        </div>
      `
      )
      .join("");
  }
});
