// ===== FUNCIONALIDADE DO LOGIN =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação
    if (!nome || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Pega todos os usuários cadastrados
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Procura se existe
    const usuarioEncontrado = listaUsuarios.find(
      (u) => u.nome === nome && u.senha === senha
    );

    // Se não achar → mensagem amigável
    if (!usuarioEncontrado) {
      alert("Nenhum usuário encontrado com essas informações. Por favor, cadastre-se.");
      document.getElementById("nome").value="";
      document.getElementById("senha").value="";
      return;
    }
  
    // Se achou → cria a sessão
    const userSession = {
      nome: usuarioEncontrado.nome,
      avatar: gerarAvatar(usuarioEncontrado.nome),
      logado: true
    };

    localStorage.setItem("user", JSON.stringify(userSession));

    // Redireciona para HOME
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
