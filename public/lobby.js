const socket = io('https://test-9p0r.onrender.com');    

document.getElementById('start-game-button').addEventListener("click", startGame);

function startGame(){
    console.log('Match started');
}

document.addEventListener('DOMContentLoaded', () => {
    const lobbyCode = new URLSearchParams(window.location.search).get('lobby');
    document.getElementById('lobby-code').textContent=`ID del Lobby: ${lobbyCode}`; 
    

})





/*




function scoreGuess(guess, actual) {
    ratio =
      Math.abs(Number.parseFloat(guess) - Number.parseFloat(actual)) /
      Number.parseFloat(actual);
    if (ratio >= 1) return 0;
    return ((1.0 - ratio) * 1000).toFixed(0);
  }
  
  const attempts = 5;
  
  let currentRound = 0;
  let totalScore = 0;
  let itemPrice = 0.0;
  let guess = 0.0;
  let score = 0;
  let rawInput = "";
  
  const scoreBoard = document.getElementById("score");
  const container = document.getElementById("container");
  
  function showNewItem() {
    fetch("https://test-9p0r.onrender.com/api/random-product")
      .then((response) => response.json())
      .then((product) => {
        itemPrice = product.precio;
        container.innerHTML = `
          <div class="row" id = "productContainer">
            <img src="${product.imagen}" alt="${product.nombre}" />
            <div class="name-price">
            <h2>${product.nombre}</h2>
            <input type="number" step="0.01" min="0" id="guessInput" style="text-align: right;"/>
            <button id="submit-btn">Confirmar</button>
            <div>
          </div>
        `;
        document.getElementById("submit-btn").addEventListener("click", () => {
          makeGuess();
          currentRound += 1;
          if (currentRound >= attempts) {
            showFinalScore();
            return;
          }
          showResult();
        });
        const inputField = document.getElementById("guessInput");
  
        // Handle keydown events
        inputField.addEventListener("keydown", (event) => {
          // Only allow digits (0-9) and the decimal point (.)
          if ((event.key >= "0" && event.key <= "9") || event.key === ".") {
            event.preventDefault();
            // Allow only one decimal point in the input
            if (event.key === "." && !rawInput.includes(".")) {
              rawInput += ".";
            } else if (event.key >= "0" && event.key <= "9") {
              rawInput += event.key;
            }
            updateFormattedValue();
          } else if (event.key === "Backspace") {
            event.preventDefault();
            rawInput = rawInput.slice(0, -1);
            updateFormattedValue();
          }
        });
  
        // Update the input field with formatted value
        function updateFormattedValue() {
          let num = parseFloat(rawInput) || 0;
          let formatted = (num / 100).toFixed(2); // force 2 decimal places
          inputField.value = formatted;
        }
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }
  
  function showResult() {
    container.innerHTML = `
          <p>Has adivinado:\t${Number.parseFloat(guess).toFixed(2)} €</p>
          <p>Precio real:\t${Number.parseFloat(itemPrice).toFixed(2)} €</p>
          <p>Has ganado ${score} puntos</p>
      `;
    setTimeout(() => showNewItem(), "5000");
  }
  
  function makeGuess() {
    guess = parseFloat(document.getElementById("guessInput").value);
    score = scoreGuess(guess, itemPrice);
    rawInput = "";
    totalScore = Number(totalScore) + Number(score);
    updateScore();
  }
  
  function updateScore() {
    scoreBoard.innerText = totalScore;
  }
  
  function showFinalScore() {
    container.innerHTML = `
        <h2>Fin del juego!</h2>
        <p>Tu puntaje: ${totalScore}</p>
        <button id="restartBtn">Jugar otra vez</button>
      `;
  
    document.getElementById("restartBtn").addEventListener("click", () => {
      // reset game state
      totalScore = 0;
      currentRound = 0;
      updateScore();
      showNewItem();
    });
  }
  
  
  */
  