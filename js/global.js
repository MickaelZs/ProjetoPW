document.addEventListener("DOMContentLoaded", () => {
  const avatarDiv = document.getElementById("avatar");

  // Garante que o header e o avatar existem
  if (!avatarDiv) return;

  const userData = JSON.parse(localStorage.getItem("user"));

  // ===== USUÁRIO NÃO LOGADO =====
  if (!userData || !userData.logado) {
    // Mostra o bonequinho padrão
    avatarDiv.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="24" height="24"
           fill="none" stroke="#121712"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    `;
  }

  // ===== USUÁRIO LOGADO =====
  else {
    avatarDiv.textContent = userData.avatar || "??";
    avatarDiv.classList.add("avatar-logged");

    // Cria botão de logout
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Sair";
    logoutBtn.classList.add("logout");
    avatarDiv.insertAdjacentElement("afterend", logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.reload();
    });
  }
});
