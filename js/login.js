// ===== FUNCIONALIDADE DO LOGIN =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar reload

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação básica dos campos
    if (!nome || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // @micakelzs aqui a gente vai colocar um login pronto ja esse login possivelmente sera do admin
   
 
    // Mas por enquanto a gente só simula o login:   
    const user = {
      nome: nome,
      avatar: gerarAvatar(nome), // gera iniciais do nome
      logado: true
    };

    // Salva a sessão no LocalStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redireciona pra Home
    window.location.href = "index.html";
  });
});

// ===== GERA AVATAR COM INICIAIS =====
function gerarAvatar(nome) {
  const partes = nome.split(" ");
  let iniciais = partes[0][0];
  if (partes.length > 1) {
    iniciais += partes[1][0];
  }
  return iniciais.toUpperCase();
}
