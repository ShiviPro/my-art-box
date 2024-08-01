const products = [
  {
    id: 1,
    name: "Premium Canvas",
    rating: 4.5,
    price: 1500,
    category: "Canvas",
    colors: ["White", "Black"],
    discount: 10,
    material: "Cotton",
    brand: "ArtMaster",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 2,
    name: "Acrylic Paint Set",
    rating: 4.8,
    price: 1200,
    category: "Paints",
    colors: ["Multicolor"],
    discount: 15,
    material: "Acrylic",
    brand: "ColorSplash",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 3,
    name: "Graphite Pencil Set",
    rating: 4.7,
    price: 500,
    category: "Drawing Tools",
    colors: ["Gray"],
    discount: 5,
    material: "Graphite",
    brand: "SketchPro",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 4,
    name: "Poster Colors",
    rating: 4.3,
    price: 700,
    category: "Paints",
    colors: ["Multicolor"],
    discount: 20,
    material: "Water-based",
    brand: "ColorSplash",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 5,
    name: "Watercolor Paper",
    rating: 4.6,
    price: 300,
    category: "Paper",
    colors: ["White"],
    discount: 0,
    material: "Cotton",
    brand: "PaperMagic",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 6,
    name: "Oil Paint Set",
    rating: 4.9,
    price: 2000,
    category: "Paints",
    colors: ["Multicolor"],
    discount: 10,
    material: "Oil",
    brand: "ArtMaster",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 7,
    name: "Charcoal Drawing Set",
    rating: 4.4,
    price: 800,
    category: "Drawing Tools",
    colors: ["Black"],
    discount: 5,
    material: "Charcoal",
    brand: "SketchPro",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 8,
    name: "Artist's Easel",
    rating: 4.8,
    price: 2500,
    category: "Accessories",
    colors: ["Brown"],
    discount: 15,
    material: "Wood",
    brand: "EaselKing",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 9,
    name: "Palette Knives Set",
    rating: 4.2,
    price: 600,
    category: "Tools",
    colors: ["Silver"],
    discount: 0,
    material: "Steel",
    brand: "ToolBox",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 10,
    name: "Pencil Eraser",
    rating: 4.7,
    price: 50,
    category: "Accessories",
    colors: ["White"],
    discount: 0,
    material: "Rubber",
    brand: "SketchPro",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 11,
    name: "Artist's Smock",
    rating: 4.3,
    price: 1200,
    category: "Clothing",
    colors: ["Black", "White"],
    discount: 10,
    material: "Cotton",
    brand: "ToolBox",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 12,
    name: "Abstract Painting by John Doe",
    rating: 4.9,
    price: 5000,
    category: "Paintings",
    colors: ["Multicolor"],
    discount: 20,
    material: "Oil",
    brand: "John Doe",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 13,
    name: "Landscape Painting by Jane Smith",
    rating: 4.8,
    price: 6000,
    category: "Paintings",
    colors: ["Multicolor"],
    discount: 15,
    material: "Acrylic",
    brand: "Jane Smith",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 14,
    name: "Watercolor Brush Set",
    rating: 4.5,
    price: 900,
    category: "Brushes",
    colors: ["Brown"],
    discount: 5,
    material: "Synthetic",
    brand: "PaperMagic",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 15,
    name: "Oil Painting Brush Set",
    rating: 4.6,
    price: 1000,
    category: "Brushes",
    colors: ["Brown"],
    discount: 10,
    material: "Natural",
    brand: "ColorSplash",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 16,
    name: "Portable Art Kit",
    rating: 4.7,
    price: 3000,
    category: "Kits",
    colors: ["Black"],
    discount: 15,
    material: "Various",
    brand: "ArtMaster",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 17,
    name: "Ceramic Palette",
    rating: 4.4,
    price: 400,
    category: "Accessories",
    colors: ["White"],
    discount: 0,
    material: "Ceramic",
    brand: "ToolBox",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 18,
    name: "Acrylic Pouring Kit",
    rating: 4.8,
    price: 2200,
    category: "Kits",
    colors: ["Multicolor"],
    discount: 20,
    material: "Various",
    brand: "ColorSplash",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 19,
    name: "Ink Drawing Set",
    rating: 4.6,
    price: 1500,
    category: "Drawing Tools",
    colors: ["Black"],
    discount: 10,
    material: "Ink",
    brand: "SketchPro",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
  {
    id: 20,
    name: "Realistic Portrait by Sarah Lee",
    rating: 4.9,
    price: 7000,
    category: "Paintings",
    colors: ["Multicolor"],
    discount: 25,
    material: "Oil",
    brand: "Sarah Lee",
    images: [
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
      "/assets/images/placeholder-mini.jpg",
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");
  const ratingValueDiv = document.getElementById("rating-value");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      // Reset all stars
      stars.forEach((s) => s.classList.remove("selected"));

      // Add 'selected' class to the clicked star and previous stars
      star.classList.add("selected");
      const previousSiblings = getPreviousSiblings(star);
      previousSiblings.forEach((s) => s.classList.add("selected"));

      // Get the rating value
      const ratingValue = star.getAttribute("data-value");
      ratingValueDiv.textContent = `Rating: ${ratingValue}`;
    });

    star.addEventListener("mouseover", () => {
      stars.forEach((s) => s.classList.remove("hover"));
      star.classList.add("hover");
      const previousSiblings = getPreviousSiblings(star);
      previousSiblings.forEach((s) => s.classList.add("hover"));
    });

    star.addEventListener("mouseout", () => {
      stars.forEach((s) => s.classList.remove("hover"));
    });
  });

  function getPreviousSiblings(elem) {
    let siblings = [];
    while ((elem = elem.previousElementSibling)) {
      siblings.push(elem);
    }
    return siblings;
  }

  const priceSlider = document.getElementById("price-range");
  const maxPriceSpan = document.getElementById("max-price");

  // Update the price values display
  function updatePriceValues() {
    const maxPrice = priceSlider.value;
    maxPriceSpan.textContent = "₹" + maxPrice;
  }

  // Add event listener to the slider
  priceSlider.addEventListener("input", updatePriceValues);

  // Initialize the price values display
  updatePriceValues();

  let productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";

  products.forEach((product) => {
    let productElement = getProductNode(product);
    productGrid.appendChild(productElement);
  });

  function getProductNode(product) {
    let productNode = document.createElement("div");
    productNode.classList.add("product-item");

    productNode.innerHTML = `
    <img class="product-image" src="${product.images[0]}" alt="${product.name}" />
    <h3>
      <md-text-button>
      <a href="/product-details.html">${product.name}</a>
      </md-text-button>
    </h3>
    <p>₹${product.price}</p>
    <md-filled-button class="buy-now-btn">
      Buy Now
    </md-filled-button>
    <md-outlined-button class="add-to-cart-btn">
      Add to Cart
    </md-outlined-button>
  `;
    return productNode;
  }

  const allProducts = productGrid.innerHTML;
});

document.addEventListener("DOMContentLoaded", () => {
  const filters = {
    price: document.getElementById("price-range"),
    colors: document.querySelectorAll(".color"),
    materials: document.querySelectorAll(".material"),
    brands: document.querySelectorAll(".brand"),
    rating: document.querySelectorAll(".star-rating .stars span"),
  };

  document.querySelector('.apply-filters-button').addEventListener('click', applyFilters)

  function applyFilters() {
    const selectedFilters = {
      currPriceMax: filters.price.value,
      colors:
        getCheckedValues(filters.colors).length > 0
          ? getCheckedValues(filters.colors)
          : ["Black", "White", "Brown", "Gray", "Silver", "Multicolor"],
      materials:
        getCheckedValues(filters.materials.length) > 0
          ? getCheckedValues(filters.materials)
          : [
              "Cotton",
              "Acrylic",
              "Graphite",
              "Water-based",
              "Oil",
              "Charcoal",
              "Wood",
              "Steel",
              "Rubber",
              "Synthetic",
              "Natural",
              "Various",
              "Ceramic",
              "Ink",
            ],
      brands:
        getCheckedValues(filters.brands) > 0
          ? getCheckedValues(filters.brands)
          : [
              "ArtMaster",
              "ColorSplash",
              "SketchPro",
              "PaperMagic",
              "EaselKing",
              "ToolBox",
              "John Doe",
              "Jane Smith",
              "Sarah Lee",
            ],
      rating:
        getSelectedRating(filters.rating).length > 0
          ? getSelectedRating(filters.rating)
          : ["1"],
    
      };
      filterProducts(products, selectedFilters)
  }


  function getCheckedValues(checkboxes) {
    return Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
  }

  function getSelectedRating(stars) {
    return Array.from(stars)
      .filter((star) => star.classList.contains("selected"))
      .map((star) => star.dataset.value);
  }

  filters.rating.forEach((star) => {
    star.addEventListener("click", () => {
      filters.rating.forEach((s) => s.classList.remove("selected"));
      star.classList.add("selected");
    });
  });

function filterProducts(products, filters) {
  let maxPrice = filters.currPriceMax;
  let chosenColors = filters.colors;
  let chosenMaterials = filters.materials;
  let chosenBrands = filters.brands;
  let minRating = filters.rating;

  let filteredProducts = [];
  let filteredProductIds = [];

  products.forEach((product) => {
    if (product.price <= maxPrice && product.rating >= minRating) {
      chosenColors.forEach((chosenColor) => {
        if (product.colors.includes(chosenColor, 0)) {
          chosenMaterials.forEach((chosenMaterial) => {
            if (product.material.includes(chosenMaterial, 0)) {
              chosenBrands.forEach((chosenBrand) => {
                if (product.brand.includes(chosenBrand, 0)) {
                  if (!filteredProductIds.includes(product.id, 0)) {
                    filteredProducts.push(product);
                    filteredProductIds.push(product.id);
                  }
                }
              });
            }
          });
        }
      });
    }
  });
}
});

function updateProductListings(filteredProducts) {
  console.log("Updating Product list with Filters");
  productGrid.innerHTML = ""; // Clear existing products

  filteredProducts.forEach((product) => {
    const productElement = getProductNode(product);
    productGrid.appendChild(productElement);
  });
}