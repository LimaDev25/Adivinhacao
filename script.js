// Número secreto (1 a 100)
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const btnGuess = document.getElementById("btnGuess");

function checkGuess() {
  const guess = parseInt(guessInput.value, 10);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageEl.textContent = "Digite um número válido entre 1 e 100.";
    messageEl.style.color = "#ffeb3b";
    return;
  }

  attempts++;
  attemptsEl.textContent = `Tentativas: ${attempts}`;

  if (guess === secretNumber) {
    messageEl.textContent = `🎉 Acertou! Era ${secretNumber}.`;
    messageEl.style.color = "#00ff9d";
    btnGuess.disabled = true;
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    messageEl.textContent = "Número muito baixo. Tente um maior.";
    messageEl.style.color = "#ffb300";
  } else {
    messageEl.textContent = "Número muito alto. Tente um menor.";
    messageEl.style.color = "#ff5722";
  }

  guessInput.value = "";
  guessInput.focus();
}

// Evento de clique
btnGuess.addEventListener("click", checkGuess);

// Animação de entrada
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  sections.forEach((sec, index) => {
    setTimeout(() => {
      sec.classList.add("show");
    }, 200 * index);
  });
});
