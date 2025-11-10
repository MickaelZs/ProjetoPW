document.addEventListener("DOMContentLoaded", () => {
  const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));
  const userData = JSON.parse(localStorage.getItem("user"));
  const logado = userData && userData.logado;

  // ===== VERIFICA LOGIN =====
  if (!logado) {
    alert("Você precisa estar logado para visualizar os produtos.");
    window.location.href = "login.html";
    return;
  }

  // ===== ELEMENTOS DA TELA =====
  const img = document.getElementById("produto-img");
  const nome = document.getElementById("produto-nome");
  const descricao = document.getElementById("produto-descricao");
  const preco = document.getElementById("produto-preco");
  const btnCarrinho = document.getElementById("btn-carrinho");
  const btnComprar = document.getElementById("btn-comprar");

  // ===== PREENCHE OS DADOS DO PRODUTO =====
  if (produto) {
    img.src = produto.imagem;
    img.alt = produto.nome;
    nome.textContent = produto.nome;
    descricao.textContent = produto.descricao;
    preco.textContent = produto.preco.toFixed(2).replace(".", ",");
  } else {
    nome.textContent = "Produto não encontrado.";
    descricao.textContent = "Volte para a página de produtos.";
  }

  // ===== FUNÇÃO: ADICIONAR AO CARRINHO =====
  btnCarrinho.addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find((item) => item.nome === produto.nome);

    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      carrinho.push({
        ...produto,
        quantidade: 1,
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
      const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
      cartCountEl.textContent = totalItens;
    }
  });

  // ===== FUNÇÃO: COMPRAR AGORA =====
  btnComprar.addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Garante que o produto está no carrinho
    const produtoExistente = carrinho.find((item) => item.nome === produto.nome);

    if (!produtoExistente) {
      carrinho.push({ ...produto, quantidade: 1 });
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    window.location.href = "carrinho.html";
  });

});
