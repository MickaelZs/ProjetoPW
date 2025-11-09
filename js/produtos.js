document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const logado = userData && userData.logado;

  // Pega todos os botões "Ver detalhes"
  const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

  botoesDetalhes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      // Dados simulados de produtos (pode vir de um JSON futuramente)
      const produtos = [
        {
          nome: "Tinta Acrílica Premium",
          descricao: "Alta durabilidade e acabamento perfeito.",
          preco: 89.9,
          imagem: "assets/produtos/tinta1.jpg"
        },
        {
          nome: "Tinta Fosca Interior",
          descricao: "Ideal para ambientes internos com acabamento suave.",
          preco: 75.5,
          imagem: "assets/produtos/tinta2.jpg"
        },
        {
          nome: "Tinta Brilhante Exterior",
          descricao: "Resistência máxima ao sol e chuva.",
          preco: 95.0,
          imagem: "assets/produtos/tinta3.jpg"
        },
        {
          nome: "Tinta Especial Texturizada",
          descricao: "Textura diferenciada para paredes modernas.",
          preco: 110.0,
          imagem: "assets/produtos/tinta4.jpg"
        }
      ];

      // Verifica se o usuário está logado
      if (!logado) {
        alert("Você precisa estar logado para ver os detalhes do produto.");
        window.location.href = "login.html";
        return;
      }

      // Salva o produto clicado no localStorage
      const produtoSelecionado = produtos[index];
      localStorage.setItem("produtoSelecionado", JSON.stringify(produtoSelecionado));

      // Redireciona pra tela de produto
      window.location.href = "produto.html";
    });
  });
});
