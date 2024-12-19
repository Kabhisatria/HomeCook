const recipes = [
  {
    name: "Telur Balado",
    image: "image/telur balado.jpg",
    link: "telurbalado.html",
    mainIngredient: "telur"
  },
  {
    name: "Nasi Goreng",
    image: "image/nasi goreng rempah.jpg",
    link: "nasigorengrempah.html",
    mainIngredient: "nasi"
  },
  {
    name: "Mie Nyemek",
    image: "image/mie nyemek.jpg",
    link: "mienyemek.html",
    mainIngredient: "mie"
  },
  {
    name: "Ayam Smackdown",
    image: "image/ayam geprek.jpg",
    link: "ayamgeprek.html",
    mainIngredient: "ayam"
  },
  {
    name: "Telur Sarden",
    image: "image/telur sarden.jpg",
    link: "telursarden.html",
    mainIngredient: "telur"
  },
  {
    name: "Nasi Liwet",
    image: "image/nasi liwet.jpg",
    link: "nasiliwet.html",
    mainIngredient: "nasi"
  },
  {
    name: "Mie gacorr",
    image: "image/mie sosis mercon.jpg",
    link: "miesosismercon.html",
    mainIngredient: "mie"
  },
  {
    name: "Ayam merah",
    image: "image/ayam saus.jpg",
    link: "ayamsaus.html",
    mainIngredient: "ayam"
  }
];

const container = document.getElementById("recipe-container");
const filterButton = document.getElementById("filter-button");
const ingredientFilter = document.getElementById("ingredient-filter");

// Fungsi untuk menampilkan resep
function displayRecipes(recipesToDisplay) {
  container.innerHTML = ""; // Kosongkan kontainer sebelum menampilkan resep baru

  if (recipesToDisplay.length === 0) {
    container.innerHTML = "<p>Tidak ada resep dengan bahan pokok ini.</p>";
  } else {
    recipesToDisplay.forEach(recipe => {
      const recipeItem = `
        <div class="recipe-item">
          <a href="${recipe.link}">
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" width="300" alt="${recipe.name}">
          </a>
        </div><br>
      `;
      container.innerHTML += recipeItem;
    });
  }
}

// Event listener untuk filter
filterButton.addEventListener("click", function () {
  const selectedIngredient = ingredientFilter.value;

  // Filter resep berdasarkan bahan pokok
  const filteredRecipes = selectedIngredient === "all"
    ? recipes // Tampilkan semua resep jika memilih "Semua"
    : recipes.filter(recipe => recipe.mainIngredient === selectedIngredient);

  // Tampilkan hasil filter
  displayRecipes(filteredRecipes);
});

// Tampilkan semua resep saat halaman pertama kali dimuat
displayRecipes(recipes);
