// Brazilian Portuguese first names and last names for realistic name generation
const firstNames = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", "Lucas", "Mariana", "Nilton", "Otávio", "Paula", "Quintino", "Rafaela", "Sandro", "Tatiana", "Valter"];
const lastNames = ["Silva", "Santos", "Oliveira", "Pereira", "Lima", "Costa", "Alves", "Gomes", "Martins", "Rocha", "Dias", "Fernandes", "Barbosa", "Ribeiro", "Moreira", "Cardoso", "Melo", "Nogueira", "Freitas", "Teixeira"];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate a realistic full Brazilian name
function generateRandomBrazilianName() {
  const firstName = getRandomItem(firstNames);
  const lastName1 = getRandomItem(lastNames);
  let lastName2 = getRandomItem(lastNames);

  // Avoid repeating last name
  while (lastName2 === lastName1) {
    lastName2 = getRandomItem(lastNames);
  }

  return `${firstName} ${lastName1} ${lastName2}`;
}

// Generate a random winning amount: between 5,000 and 50,000 BRL rounded
function generateRandomAmount() {
  return Math.floor(Math.random() * (50000 - 5000 + 1)) + 5000;
}

const ticker = document.getElementById('bigWinsTicker');

// Show a generated big win message in ticker
function showRandomWin() {
  ticker.innerHTML = '';
  const playerName = generateRandomBrazilianName();
  const amount = generateRandomAmount();
  const msg = document.createElement('div');
  msg.className = 'win-message show';
  msg.textContent = `${playerName} ganhou R$ ${amount.toLocaleString('pt-BR')} apostando!`;
  ticker.appendChild(msg);
}

// Cycle every 5 seconds with a new random big win
showRandomWin();
setInterval(showRandomWin, 5000);

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const betCards = document.querySelectorAll('.bet-card');

function performSearch() {
  const term = searchInput.value.toLowerCase().trim();
  if (!term) {
    betCards.forEach(card => card.style.display = '');
    return;
  }
  betCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? '' : 'none';
  });
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', event => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
