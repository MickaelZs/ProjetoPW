// ===== CADASTRO DE USUÁRIO =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value.trim();
    const confirmar = document.getElementById("confirmar").value.trim();
    const termos = document.getElementById("termos").checked;

    // ===== VALIDAÇÕES =====
    if (!nome || !email || !senha || !confirmar) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (!termos) {
      alert("Você precisa concordar com os Termos de Serviço!");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    // ===== VERIFICA SE USUÁRIO JÁ EXISTE =====
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const jaExiste = usuarios.some((user) => user.email === email);

    if (jaExiste) {
      alert("Já existe uma conta com esse e-mail!");
      return;
    }

    // ===== CRIA NOVO USUÁRIO =====
    const novoUsuario = {
      nome,
      email,
      senha,
      avatar: gerarAvatar(nome),
      logado: true
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("user", JSON.stringify(novoUsuario));

    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
  });
});

// ===== GERA AVATAR COM INICIAIS =====
function gerarAvatar(avatar) {
  const partes = avatar.split(" ");
  let iniciais = partes[0][0];
  if (partes.length > 1) {
    iniciais += partes[1][0];
  }
  return iniciais.toUpperCase();
}
