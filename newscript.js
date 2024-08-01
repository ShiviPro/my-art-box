const products = [
    { name: "Acrylic Colour", price: 30.00, image: "img/craft.jpg" },
    { name: "Black Pencil", price: 18.00, image: "img/black.webp" },
    { name: "Canvas Board", price: 11.00, image: "img/canva.jpg" },
    { name: "PAINT BRUSH", price: 29.00, oldPrice: 39.00, image: "img/img2.jpg" },
    { name: "Red Colour Pencil", price: 30.00, image: "img/redcolor.webp" },
    { name: "God paintings", price: 18.00, image: "img/painting3.jpg" },
    { name: "Wall Painting", price: 11.00, image: "img/painting.jpg" },
    { name: "Poster Color", price: 29.00, oldPrice: 39.00, image: "img/postercolour1.jpg" },
    { name: "Acrylic Colour", price: 30.00, image: "img/craft.jpg" },
    { name: "Black Pencil", price: 18.00, image: "img/black.webp" },
    { name: "Canvas Board", price: 11.00, image: "img/canva.jpg" },
    { name: "PAINT BRUSH", price: 29.00, oldPrice: 39.00, image: "img/img2.jpg" },
    { name: "Red Colour Pencil", price: 30.00, image: "img/redcolor.webp" },
    { name: "God paintings", price: 18.00, image: "img/painting3.jpg" },
    { name: "Wall Painting", price: 11.00, image: "img/painting.jpg" },
    { name: "Poster Color", price: 29.00, oldPrice: 39.00, image: "img/postercolour1.jpg" },
    // Add more products here
];

let currentPage = 0;
const productsPerPage = 4;

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    const start = currentPage * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = products.slice(start, end);

    pageProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <div class="product-title">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}
                    ${product.oldPrice ? `<span class="discounted-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-rating">★★★★★</div>
                <button class="add-button">ADD</button>
            </div>
        `;
        grid.appendChild(productElement);
    });
}

function nextPage() {
    if ((currentPage + 1) * productsPerPage < products.length) {
        currentPage++;
        renderProducts();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        renderProducts();
    }
}

function updateCountdown() {
    const now = new Date();
    const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 182, 8, 48, 48);
    const diff = endDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = `${days}<br>DAY`;
    document.getElementById('hours').innerHTML = `${hours}<br>HRS`;
    document.getElementById('minutes').innerHTML = `${minutes}<br>MIN`;
    document.getElementById('seconds').innerHTML = `${seconds}<br>SEC`;
}

document.getElementById('nextButton').addEventListener('click', nextPage);
document.getElementById('prevButton').addEventListener('click', prevPage);

renderProducts();
setInterval(updateCountdown, 1000);


document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('add-button')) {
        const productName = e.target.closest('.product-card').querySelector('.product-title').textContent;
        alert(`Added ${productName} to cart!`);
    }
});






const wasteProductsData = [
    { id: 1, name: "Fevicryl Acrylic Colour", price: 30.00, image: "img/craft.jpg", category: "Paint" },
    { id: 2, name: "Black Pencil", price: 11.00, image: "img/black.webp", category: "Pencil" },
    { id: 3, name: "Red Colour Pencil", price: 21.00, image: "img/redcolor.webp", category: "Pencil" },
    { id: 4, name: "Rousrie Canvas Board", price: 30.00, image: "img/canva.jpg", category: "Canva" },
    { id: 5, name: "Fevicryl Acrylic Black Colour", price: 18.00, image: "img/craft1.jpg", category: "Paint" },
    { id: 6, name: "Camel Poster Color", price: 11.00, image: "img/postercolour1.jpg", category: "Paint" },
    { id: 7, name: "Sheaffer 100 9370 Glossy", price: 21.00, image: "img/pikaso_texttoimage_single-pen-with-different-colour.jpeg", category: "Pencil" },
    { id: 8, name: "Livin'luxe paintings", price: 30.00, image: "img/painting3.jpg", category: "Craft" },
    { id: 9, name: "Peacock Wall Painting", price: 18.00, image: "img/painting.jpg", category: "Art" },
    { id: 10, name: "Paint Brush Watercolor", price: 11.00, image: "img/brush.jpg", category: "Paint" },
    { id: 11, name: "Fevicryl Acrylic Colour", price: 21.00, image: "img/craft4.jpg", category: "Paint" },
    { id: 12, name: "Sheaffer Gold Pen", price: 30.00, image: "img/gold pencil.webp", category: "Pencil" },
    { id: 13, name: "GRANOTONE Acrylic Colour", price: 18.00, image: "img/posterblack.jpg", category: "Paint" },
    { id: 11, name: "Paint Art Brush", price: 21.00, image: "img/brushimg2.jpg", category: "Paint" },
    { id: 12, name: "Paintings For Wall Decoration ", price: 30.00, image: "img/painting5.jpg", category: "craft"},
    { id: 13, name: "Primed Canvas Board", price: 18.00, image: "img/canva3.jpg", category: "Canva" },
];

const wasteProductsGrid = document.querySelector('.waste-products-grid');
const wasteCategoryButtons = document.querySelectorAll('.waste-category-btn');
const wastePrevButton = document.querySelector('.waste-prev');
const wasteNextButton = document.querySelector('.waste-next');

let wasteCurrentPage = 1;
const wasteProductsPerPage = 8;

function wasteRenderProducts(products) {
    wasteProductsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('waste-product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="waste-product-image">
            <h3 class="waste-product-title">${product.name}</h3>
            <p class="waste-product-price">$${product.price.toFixed(2)}</p>
            <a href="your-other-file.html"><button class="waste-add-to-cart">View Now</button></a>
        `;
        wasteProductsGrid.appendChild(productCard);
    });
}

function wasteFilterProducts(category) {
    if (category === 'all') {
        return wasteProductsData;
    }
    return wasteProductsData.filter(product => product.category === category);
}

function wasteShowPage(page, products) {
    const startIndex = (page - 1) * wasteProductsPerPage;
    const endIndex = startIndex + wasteProductsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);
    wasteRenderProducts(pageProducts);
}

function wasteUpdatePagination(products) {
    const totalPages = Math.ceil(products.length / wasteProductsPerPage);
    wastePrevButton.disabled = wasteCurrentPage === 1;
    wasteNextButton.disabled = wasteCurrentPage === totalPages;
}

wasteCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        wasteCategoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        const filteredProducts = wasteFilterProducts(category);
        wasteCurrentPage = 1;
        wasteShowPage(wasteCurrentPage, filteredProducts);
        wasteUpdatePagination(filteredProducts);
    });
});

wastePrevButton.addEventListener('click', () => {
    if (wasteCurrentPage > 1) {
        wasteCurrentPage--;
        const activeCategory = document.querySelector('.waste-category-btn.active').dataset.category;
        const filteredProducts = wasteFilterProducts(activeCategory);
        wasteShowPage(wasteCurrentPage, filteredProducts);
        wasteUpdatePagination(filteredProducts);
    }
});

wasteNextButton.addEventListener('click', () => {
    const activeCategory = document.querySelector('.waste-category-btn.active').dataset.category;
    const filteredProducts = wasteFilterProducts(activeCategory);
    const totalPages = Math.ceil(filteredProducts.length / wasteProductsPerPage);
    if (wasteCurrentPage < totalPages) {
        wasteCurrentPage++;
        wasteShowPage(wasteCurrentPage, filteredProducts);
        wasteUpdatePagination(filteredProducts);
    }
});

// Initial render for waste products
wasteShowPage(wasteCurrentPage, wasteProductsData);
wasteUpdatePagination(wasteProductsData);





document.addEventListener('DOMContentLoaded', function() {
    const quotesSection = document.querySelector('.quotes');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          quotesSection.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });  // Trigger when 10% of the section is visible
  
    observer.observe(quotesSection);
  });