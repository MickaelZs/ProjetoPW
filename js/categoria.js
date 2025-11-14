document.addEventListener("DOMContentLoaded", () => {
  const listaCategorias = document.getElementById("lista-categorias");


  // Dados simulados (poderiam vir de um JSON futuramente)
  const categorias = [
    {
      nome: "Tintas para Paredes",
      produtos: [
        { nome: "Suvinil Toque Fosco Completo", preco: 139.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/303/image/display/34/1.webp" },
        { nome: "Suvinil Toque Fosco", preco: 144.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/305/image/display/34/1.webp" },
        { nome: "Suvinil Rende & Cobre Muito", preco: 139.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/78/image/display/34/1.webp" },
        { nome: "Suvinil Toque Seda", preco: 142.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/311/image/display/34/1.webp" },

        { nome: "Cimento Queimado", preco: 129.90, imagem: "https://iraja.com.br/products/cimento-queimado/25KG.png" },
        { nome: "Esmalte Base Água", preco: 169.90, imagem: "https://iraja.com.br/products/esmalte-base-agua/3,6L.png" },
        { nome: "Tinta Acrílica Premium", preco: 149.90, imagem: "https://iraja.com.br/products/tinta-acrilica-premium/18L.png" },
        { nome: "Eucatex Acrílico Super Premium", preco: 179.90, imagem: "https://s3-sa-east-1.amazonaws.com/static.eucatex.aatb.com.br/Uploads/Produtos/Principal/8804-eucatex-acrilico-super-premium.jpg" },
        { nome: "Eucatex Acrílico Super Pró", preco: 144.90, imagem: "https://s3-sa-east-1.amazonaws.com/static.eucatex.aatb.com.br/Uploads/Produtos/Principal/3967-eucatex-acrilico-super-pro.jpg" },
      ]
    },
    {
      nome: "Tintas para Madeiras",
      produtos: [
        { nome: "Esmalte Suvinil Cor & Proteção Acetinado Base Solvente", preco: 199.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/40/image/display/34/1.webp" },
        { nome: "Esmalte Suvinil Cor & Proteção Brilhante Base Água", preco: 139.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/37/image/display/34/1.webp" },
        { nome: "Epóxi Base Água", preco: 149.90, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/06-SW-Epoxi-Base-Agua-ECO-36L.png" },
        { nome: "Complementos para Madeira Fundo Branco Fosco", preco: 199.90, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/complementos-para-madeira-fundo.png" },
        { nome: "Sparlack Cetol Stain Beleza Natural", preco: 139.90, imagem: "https://mkpcoral.vtexassets.com/arquivos/ids/586928-1600-auto" },
        { nome: "Cetol Clastic", preco: 139.90, imagem: "https://www.lojacoral.com.br/arquivos/descriptionProduct-10_sparlack-cetol-classic_html-02a.png" }
      ]
    },
    {
      nome: "Tintas para Metais",
      produtos: [
        { nome: "Coralit Secagem Rápida Acetinado Branco", preco: 139.90, imagem: "https://mkpcoral.vtexassets.com/arquivos/ids/451782/Coral-Coralit-Secagem-Rapida-Galao.png" },
        { nome: "Coralit Total Acetinado Branco", preco: 149.90, imagem: "https://mkpcoral.vtexassets.com/arquivos/ids/621737/Coral-Coralit-Total-Galao.png.png" },
        { nome: "Esmalte Suvinil Cor & Proteção Grafite Fosco", preco: 139.90, imagem: "https://digitalprdaddc4dsa.blob.core.windows.net/digital-products-img/products/42/image/display/34/1.webp" },
        { nome: "Super Galvite", preco: 149.90, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/super-galvite.png" },
        { nome: "Esmalte Sintético Tradicional Fosco", preco: 139.90, imagem: "https://sherwin.com.br/wp-content/uploads/sites/11/2022/06/esmalte-sintetico-tradicional.png" }
      ]
    },
    {
      nome: "Acessórios de Pintura",
      produtos: [
        { nome: "Espatula Celuloide para Cimento Queimado", preco: 99.90, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/155403-1600-auto" },
        { nome: "Garfo para pintura com rosca", preco: 59.90, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/158118-1600-auto" },
        { nome: "Caçamba de mão com imã", preco: 69.90, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/158122-1600-auto" },
        { nome: "Lixa telada 225mm", preco: 54.90, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/158164-1600-auto" },
        { nome: "Espatula de quina", preco: 69.90, imagem: "https://decorcolorstintas.vtexassets.com/arquivos/ids/158148-1600-auto" }
      ]
    }
  ];

  // Gera as seções de categoria dinamicamente
  listaCategorias.innerHTML = categorias.map(categoria => `
    <section class="categoria-bloco">
      <h2 .categoria-nome>${categoria.nome}</h2>
      <div class="produtos-grid">
        ${categoria.produtos.map(produto => `
          <div class="produto-card" data-produto='${JSON.stringify(produto)}'>
            <img src="${produto.imagem}" alt="${produto.nome}" >
            <h3>${produto.nome}</h3>
            <span>R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');

  // Clique em produto → salva e vai pra produto.html
  document.querySelectorAll(".produto-card").forEach(card => {
    card.addEventListener("click", () => {
      const produto = JSON.parse(card.dataset.produto);
      localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
      window.location.href = "produto.html";
    });
  });
});
