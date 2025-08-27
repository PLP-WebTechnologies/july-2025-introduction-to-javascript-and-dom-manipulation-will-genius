// =============================
// 🚀 Part 1: Basics
// =============================

document.getElementById("submitUserBtn").addEventListener("click", function () {
  let name = document.getElementById("userNameInput").value;
  let age = parseInt(document.getElementById("userAgeInput").value);

  if (!name || isNaN(age)) {
    alert("Please enter both name and age!");
    return;
  }

  if (age >= 18) {
    document.getElementById("welcomeMessage").textContent =
      "Hello " + name + "! 🎉 You are an adult.";
  } else {
    document.getElementById("welcomeMessage").textContent =
      "Hello " + name + "! 🎈 You are a minor.";
  }

  // Show shopping section
  document.getElementById("shopSection").style.display = "block";
});

// =============================
// ❤️ Part 2: Functions
// =============================

// Function 1: Calculate total price of selected items
function calculateTotal() {
  let checkboxes = document.querySelectorAll("#itemList input:checked");
  let total = 0;
  let itemsSelected = [];

  checkboxes.forEach(item => {
    total += parseInt(item.dataset.price);
    itemsSelected.push(item.value);
  });

  return { total, itemsSelected };
}

// Function 2: Toggle background color
function toggleBackground() {
  let body = document.body;
  if (body.style.backgroundColor === "lightyellow") {
    body.style.backgroundColor = "#f8f9fa";
  } else {
    body.style.backgroundColor = "lightyellow";
  }
}

// =============================
// 🔁 Part 3: Loops
// =============================

// For loop example (just logs the items)
console.log("Available items:");
let items = ["Milk", "Bread", "Eggs", "Cheese", "Apples"];
for (let i = 0; i < items.length; i++) {
  console.log((i + 1) + ". " + items[i]);
}

// While loop example (simple countdown)
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =============================
// 🌐 Part 4: DOM Interactions
// =============================

// 1. Calculate total when button clicked
document.getElementById("calculateBtn").addEventListener("click", function () {
  let result = calculateTotal();
  if (result.itemsSelected.length === 0) {
    document.getElementById("totalResult").textContent =
      "⚠️ Please select at least one item.";
  } else {
    document.getElementById("totalResult").textContent =
      "✅ You selected: " + result.itemsSelected.join(", ") +
      " | Total: $" + result.total;
  }
});

// 2. Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", toggleBackground);
let themeIndex = 0; // 0 = light, 1 = yellow, 2 = dark

function toggleBackground() {
  let body = document.body;

  if (themeIndex === 0) {
    body.style.backgroundColor = "lightyellow";
    body.classList.remove("dark-mode");
    themeIndex = 1;
  } else if (themeIndex === 1) {
    body.style.backgroundColor = ""; // reset
    body.classList.add("dark-mode");
    themeIndex = 2;
  } else {
    body.style.backgroundColor = "#f8f9fa";
    body.classList.remove("dark-mode");
    themeIndex = 0;
  }
}


// 3. Change welcome message
document.getElementById("changeTextBtn").addEventListener("click", function () {
  let newText = prompt("Enter the new welcome message:");
  if (newText) {
    document.getElementById("welcomeMessage").textContent = newText;
  }
});
