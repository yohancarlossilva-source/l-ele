
// 📊 Dados simulados (você pode trocar por API depois)
const dados = {
  soja: 165.5,   // milhões de toneladas
  milho: 137.6,  // milhões de toneladas
  arroz: 12.5,
};

// 🧮 Atualiza os cards
document.getElementById("soja").innerText =
  dados.soja + " milhões de toneladas";

document.getElementById("milho").innerText =
  dados.milho + " milhões de toneladas";

const total = dados.soja + dados.milho + dados.arroz;
document.getElementById("total").innerText =
  total.toFixed(1) + " milhões de toneladas";

// 📊 Gráfico simples (sem biblioteca)
const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 250;

function barra(x, y, w, h, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, w, h);
}

// Fundo
ctx.fillStyle = "#0f172a";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Barras
barra(50, 250 - dados.soja, 80, dados.soja, "#22c55e");
barra(160, 250 - dados.milho, 80, dados.milho, "#facc15");
barra(270, 250 - dados.arroz * 5, 80, dados.arroz * 5, "#38bdf8");

// Labels
ctx.fillStyle = "white";
ctx.fillText("Soja", 65, 240);
ctx.fillText("Milho", 175, 240);
ctx.fillText("Arroz", 285, 240);
