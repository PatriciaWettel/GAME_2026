// ===== ESTRELLAS =====
let stars = parseInt(localStorage.getItem("stars")) || 0;
document.getElementById("stars").textContent = stars;

function addStars(amount) {
  stars += amount;
  localStorage.setItem("stars", stars);
  document.getElementById("stars").textContent = stars;
}

// ===== NIVEL 1 – SOPA DE LETRAS =====
const words = ["CAT", "DOG", "SUN"];
const letters = ["C","A","T","D","O","G","S","U","N","R","E","D"];
const wordSearch = document.getElementById("wordSearch");

let currentWord = "";
let foundWords = [];

function resetSelection() {
  currentWord = "";
  document.querySelectorAll(".letter").forEach(l => l.classList.remove("selected"));
}

letters.forEach(letter => {
  const div = document.createElement("div");
  div.textContent = letter;
  div.className = "letter";

  div.addEventListener("click", () => {
    div.classList.add("selected");
    currentWord += letter;

    if (words.includes(currentWord) && !foundWords.includes(currentWord)) {
      foundWords.push(currentWord);
      alert(`🎉 ¡Muy bien! Encontraste: ${currentWord}`);
      addStars(20);
      resetSelection();

      if (foundWords.length === words.length) {
        alert("⭐ ¡Nivel 1 completado!");
        addStars(30);
      }
    }

    if (currentWord.length > 5) resetSelection();
  });

  wordSearch.appendChild(div);
});

// ===== NIVEL 2 =====
function checkLevel2() {
  const value = document.getElementById("crosswordInput").value.trim().toUpperCase();
  const msg = document.getElementById("msgLevel2");

  if (value === "DOG") {
    msg.textContent = "✅ ¡Correcto!";
    addStars(30);
  } else {
    msg.textContent = "❌ Intenta otra vez";
  }
}

// ===== NIVEL 3 =====
function checkLevel3() {
  const value = document.getElementById("sentenceInput").value.trim().toUpperCase();
  const msg = document.getElementById("msgLevel3");

  if (value === "I LIKE APPLES") {
    msg.textContent = "✅ ¡Excelente!";
    addStars(30);
  } else {
    msg.textContent = "❌ Revisa el orden";
  }
}

// ===== NIVEL 4 =====
function checkLevel4(correct) {
  const msg = document.getElementById("msgLevel4");

  if (correct) {
    msg.textContent = "✅ ¡Muy bien!";
    addStars(20);
  } else {
    msg.textContent = "❌ Respuesta incorrecta";
  }
}

// ===== NIVEL 5 =====
function checkLevel5() {
  const value = document.getElementById("finalInput").value.toUpperCase();
  const msg = document.getElementById("msgLevel5");

  if (value.includes("DOG")) {
    msg.textContent = "🏆 ¡Felicitaciones! Completaste el juego";
    addStars(50);
  } else {
    msg.textContent = "❌ La oración debe contener DOG";
  }
}
