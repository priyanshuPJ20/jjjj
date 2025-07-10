const elements = [
  { number: 1, symbol: "H", name: "Hydrogen", weight: "1.008", category: "nonmetal", description: "Most abundant element in the universe." },
  { number: 2, symbol: "He", name: "Helium", weight: "4.0026", category: "noblegas", description: "Used in balloons and as a coolant." },
  { number: 3, symbol: "Li", name: "Lithium", weight: "6.94", category: "metal", description: "Used in rechargeable batteries." },
  { number: 5, symbol: "B", name: "Boron", weight: "10.81", category: "metalloid", description: "Found in glass and detergents." },
  // ➝ Add more elements here
];

const table = document.getElementById("periodicTable");
const modal = document.getElementById("elementModal");
const closeModal = document.getElementById("closeModal");

// Render Elements
function renderTable(data) {
  table.innerHTML = '';
  data.forEach(el => {
    const div = document.createElement("div");
    div.className = `element ${el.category}`;
    div.innerHTML = `
      <div class="number">${el.number}</div>
      <div class="symbol">${el.symbol}</div>
    `;
    div.onclick = () => showDetails(el);
    table.appendChild(div);
  });
}

function showDetails(el) {
  document.getElementById("elementName").textContent = el.name;
  document.getElementById("elementSymbol").textContent = el.symbol;
  document.getElementById("elementNumber").textContent = el.number;
  document.getElementById("elementWeight").textContent = el.weight;
  document.getElementById("elementCategory").textContent = el.category;
  document.getElementById("elementDescription").textContent = el.description;
  modal.style.display = "block";
}

closeModal.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Search functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = elements.filter(el =>
    el.name.toLowerCase().includes(value) || el.symbol.toLowerCase().includes(value)
  );
  renderTable(filtered);
});

// Initialize table
renderTable(elements);
