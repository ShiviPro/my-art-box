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
    <p>Color: ${product.colors}</p>
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


let blackFilter = document.querySelector(".black")

blackFilter.addEventListener("change", ()=> {
  if(blackFilter.checked) {
    productGrid.innerHTML = ""
    products.forEach(product => {
      if(product.colors.includes("Black", 0) || product.colors.includes("Multicolor", 0)) {
        let productNode = getProductNode(product)
        productGrid.appendChild(productNode)
      }
    })
  } else {
    productGrid.innerHTML = allProducts
  }
})

let whiteFilter = document.querySelector(".white")

whiteFilter.addEventListener("change", ()=> {
  if(whiteFilter.checked) {
    productGrid.innerHTML = ""
    products.forEach(product => {
      if(product.colors.includes("White", 0) || product.colors.includes("Multicolor", 0)) {
        let productNode = getProductNode(product)
        productGrid.appendChild(productNode)
      }
    })
  } else {
    productGrid.innerHTML = allProducts
  }
})

let brownFilter = document.querySelector(".brown")

brownFilter.addEventListener("change", ()=> {
  if(brownFilter.checked) {
    productGrid.innerHTML = ""
    products.forEach(product => {
      if(product.colors.includes("Brown", 0) || product.colors.includes("Multicolor", 0)) {
        let productNode = getProductNode(product)
        productGrid.appendChild(productNode)
      }
    })
  } else {
    productGrid.innerHTML = allProducts
  }
})

});

// document.addEventListener("DOMContentLoaded", () => {
// const filters = {
//   price: document.getElementById("price-range"),
//   colors: document.querySelectorAll(".color"),
//   materials: document.querySelectorAll(".material"),
//   brands: document.querySelectorAll(".brand"),
//   rating: document.querySelectorAll(".star-rating .stars span"),
// };

// const applyFiltersButton = document.querySelector(".apply-filters-button");
// applyFiltersButton.addEventListener("click", applyFilters);

//   document.querySelector('.apply-filters-button').addEventListener('click', () => {
//     const filters = getSelectedFilters();
//     const filteredProducts = filterProducts(products, filters);
//     updateProductListings(filteredProducts);
// });

// function getSelectedFilters() {
//   const priceRange = document.querySelector('input[type="range"]').value;

//     const selectedColors = Array.from(document.querySelectorAll('.filter-color-group input:checked')).map(cb => cb.classList[0]);
//     const selectedMaterials = Array.from(document.querySelectorAll('.filter-group input.material:checked')).map(cb => cb.classList[0]);
//     const selectedBrands = Array.from(document.querySelectorAll('.filter-group input.brand:checked')).map(cb => cb.classList[0]);

//     const selectedRating = document.querySelector('.star-rating .selected') ? document.querySelector('.star-rating .selected').dataset.value : null;

//     return {
//       currPriceMax: priceRange,
//       colors: selectedColors,
//       materials: selectedMaterials,
//       brands: selectedBrands,
//       rating: selectedRating
//   };
// }

// function applyFilters() {
// const selectedFilters = {
//   currPriceMax: filters.price.value,
//   colors:
//     getCheckedValues(filters.colors).length > 0
//       ? getCheckedValues(filters.colors)
//       : ["Black", "White", "Brown", "Gray", "Silver", "Multicolor"],
//   materials:
//     getCheckedValues(filters.materials.length) > 0
//       ? getCheckedValues(filters.materials)
//       : [
//           "Cotton",
//           "Acrylic",
//           "Graphite",
//           "Water-based",
//           "Oil",
//           "Charcoal",
//           "Wood",
//           "Steel",
//           "Rubber",
//           "Synthetic",
//           "Natural",
//           "Various",
//           "Ceramic",
//           "Ink",
//         ],
//   brands:
//     getCheckedValues(filters.brands) > 0
//       ? getCheckedValues(filters.brands)
//       : [
//           "ArtMaster",
//           "ColorSplash",
//           "SketchPro",
//           "PaperMagic",
//           "EaselKing",
//           "ToolBox",
//           "John Doe",
//           "Jane Smith",
//           "Sarah Lee",
//         ],
//   rating:
//     getSelectedRating(filters.rating).length > 0
//       ? getSelectedRating(filters.rating)
//       : ["1"],
// };
// }

// function getCheckedValues(checkboxes) {
//   return Array.from(checkboxes)
//     .filter((checkbox) => checkbox.checked)
//     .map((checkbox) => checkbox.value);
// }

// function getSelectedRating(stars) {
//   return Array.from(stars)
//     .filter((star) => star.classList.contains("selected"))
//     .map((star) => star.dataset.value);
// }

// filters.rating.forEach((star) => {
//   star.addEventListener("click", () => {
//     filters.rating.forEach((s) => s.classList.remove("selected"));
//     star.classList.add("selected");
//   });
// });
// });

// function filterProducts(products, filters) {
// Fetch and filter products based on the selected filters
// This is where you would typically make an API call to get the filtered products

// let filteredProducts = []
// let filteredProductIds = []

// products.forEach(product => {
//   if(product.price <= maxPrice && product.rating >= minRating) {
//     chosenColors.forEach(chosenColor => {
//       if(product.colors.includes(chosenColor, 0)) {
//         chosenMaterials.forEach(chosenMaterial => {
//           if(product.material.includes(chosenMaterial, 0)) {
//             chosenBrands.forEach(chosenBrand => {
//               if(product.brand.includes(chosenBrand, 0)) {
//                 if(!filteredProductIds.includes(product.id, 0)) {
//                   filteredProducts.push(product)
//                   filteredProductIds.push(product.id)
//                 }
//               }
//             })
//           }
//         })
//       }
//     })
//   }
// })

//   let maxPrice = filters.currPriceMax;
//   let chosenColors = filters.colors;
//   let chosenMaterials = filters.materials;
//   let chosenBrands = filters.brands;
//   let minRating = filters.rating;

//   return products.filter((product) => {
//     // Price range filter
//     if (product.price > maxPrice) return false;

//     // Color filter
//     if (
//       chosenColors.length &&
//       !chosenColors.some((color) => product.colors.includes(color))
//     )
//       return false;

//     // Material filter
//     if (
//       chosenMaterials.length &&
//       !chosenMaterials.includes(product.material.toLowerCase())
//     )
//       return false;

//     // Brand filter
//     if (
//       chosenBrands.length &&
//       !chosenBrands.includes(product.brand.toLowerCase())
//     )
//       return false;

//     // Rating filter
//     if (minRating && product.rating < minRating) return false;

//     return true;
//   });
// }

function updateProductListings(filteredProducts) {
  console.log("Updating Product list with Filters");
  productGrid.innerHTML = ""; // Clear existing products

  filteredProducts.forEach((product) => {
    const productElement = getProductNode(product);
    productGrid.appendChild(productElement);
  });
}

// function getSelectedFilters() {
//   const priceRange = document.querySelector('input[type="range"]').value;

//   const selectedColors = Array.from(
//     document.querySelectorAll(".filter-color-group input:checked")
//   ).map((cb) => cb.classList[0]);
//   const selectedMaterials = Array.from(
//     document.querySelectorAll(".filter-group input.material:checked")
//   ).map((cb) => cb.classList[0]);
//   const selectedBrands = Array.from(
//     document.querySelectorAll(".filter-group input.brand:checked")
//   ).map((cb) => cb.classList[0]);

//   const selectedRating = document.querySelector(".star-rating .stars .selected")
//     ? document.querySelector(".star-rating .stars .selected").dataset.value
//     : null;

//   return {
//     priceRange: priceRange,
//     colors: selectedColors,
//     materials: selectedMaterials,
//     brands: selectedBrands,
//     rating: selectedRating,
//   };
// }

// function filterProducts(products, filters) {
//   return products.filter((product) => {
//     // Price range filter
//     if (product.price > filters.priceRange) return false;

//     // Rating filter
//     console.log("Filter Rating:", filters.rating)
//     console.log("Product Rating:", product.rating)
//     if (filters.rating && product.rating < filters.rating) return false;

//     // Color filter
//     if (
//       filters.colors.length &&
//       !filters.colors.some((color) => product.colors.includes(color))
//     )
//       return false;

//     // Material filter
//     if (
//       filters.materials.length &&
//       !filters.materials.includes(product.material.toLowerCase())
//     )
//       return false;

//     // Brand filter
//     if (
//       filters.brands.length &&
//       !filters.brands.includes(product.brand.toLowerCase())
//     )
//       return false;

//     return true;
//   });
// }

// function displayProducts(products) {
//   const productGrid = document.querySelector('.product-grid');
//   productGrid.innerHTML = ''; // Clear existing products

//   products.forEach(product => {
//       const productElement = document.createElement('div');
//       productElement.className = 'product';

//       productElement.innerHTML = `
//           <img src="${product.image}" alt="${product.name}">
//           <h3>${product.name}</h3>
//           <p>Price: ₹${product.price}</p>
//           <button>Add to Cart</button>
//       `;

//       productGrid.appendChild(productElement);
//   });
// }

// Event listener for applying filters
// document
//   .querySelector(".apply-filters-button")
//   .addEventListener("click", () => {
//     const filters = getSelectedFilters();
//     const filteredProducts = filterProducts(products, filters);
//     // displayProducts(filteredProducts);
//     console.log("Filtered Products:", filteredProducts);
//     updateProductListings(filteredProducts);
//   });
