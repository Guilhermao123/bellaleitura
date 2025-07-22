document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eval-form");
  const msg = document.getElementById("pontos-msg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let pontos = parseInt(localStorage.getItem("pontos")) || 0;
      pontos += 10;
      localStorage.setItem("pontos", pontos);
      msg.textContent = `✅ Avaliação enviada! Você ganhou 10 pontos. Total: ${pontos}`;
      form.reset();
    });
  }
});
