const form = document.getElementById("form-agendamento");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  fetch("http://localhost:3000/agendar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, telefone, data, hora }),
  })
    .then((res) => res.json())
    .then((resposta) => {
      btn.value = resposta.mensagem;
      btn.classList.toggle("ativo");
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao agendar");
    });
});
