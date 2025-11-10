document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const logado = userData && userData.logado;


 function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  cartCountEl.textContent = totalItens;
  atualizarContadorCarrinho();
}


  // Se o usuário não estiver logado:
  if (!logado) {
    // Seleciona todos os elementos clicáveis
    const clicaveis = document.querySelectorAll(
      "a, button, .product-card, .categoria-card, .novidade-card, .hero, .cta-btn"
    );

    clicaveis.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "login.html";
      });
    });
  }

  atualizarContadorCarrinho();
});

 // Impede que o usuario veja o botao de sair na tela de login e cadastro
 const currentPage = window.location.pathname;
if (currentPage.includes("login.html") || currentPage.includes("cadastro.html")) {
  const logoutBtn = document.querySelector(".logout");
  if (logoutBtn) logoutBtn.style.display = "none";
}
