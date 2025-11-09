document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const logado = userData && userData.logado;

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
});

 // Impede que o usuario veja o botao de sair na tela de login e cadastro
 const currentPage = window.location.pathname;
if (currentPage.includes("login.html") || currentPage.includes("cadastro.html")) {
  const logoutBtn = document.querySelector(".logout");
  if (logoutBtn) logoutBtn.style.display = "none";
}
