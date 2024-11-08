// Sample product data (36 items)
const products = [
    "Samsung Galaxy S21", "iPhone 13 Pro", "Xiaomi Mi 11", "OnePlus 9",
    "Google Pixel 6", "Huawei P40", "Sony Xperia 5", "Motorola Edge",
    "Nokia G50", "OPPO Reno6", "Realme GT", "Vivo V21",
    "Asus ROG Phone 5", "Black Shark 4", "ZTE Axon 30", "TCL 20 Pro",
    "Samsung Galaxy A52", "iPhone SE", "Xiaomi Redmi Note 10", "OnePlus Nord",
    "Google Pixel 5a", "Huawei Mate 40", "Sony Xperia 10", "Motorola Moto G",
    "Nokia X20", "OPPO A54", "Realme 8", "Vivo Y12",
    "Asus Zenfone 8", "Blackview A80", "ZTE Blade A7", "TCL 10L",
    "Samsung Galaxy S20 FE", "iPhone 12", "Xiaomi Poco X3", "OnePlus 8T"
];

// Function to render products
function renderProducts(filter = "") {
    const productGrid = document.createElement("div");
    productGrid.classList.add("product-grid");

    const filteredProducts = products.filter(product => 
        product.toLowerCase().includes(filter.toLowerCase())
    );
    
    filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.src = "https://via.placeholder.com/150"; // Placeholder image
        productImage.alt = product;

        const productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.textContent = product;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productGrid.appendChild(productItem);
    });

    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(productGrid);
}

// Function to render home content
function renderHome() {
    const homeSection = document.createElement("div");
    homeSection.classList.add("contact-section");
    homeSection.innerHTML = `<h2>Ласкаво просимо до Rozetka!</h2><p>Ваш найкращий онлайн-магазин електроніки.</p>`;
    
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(homeSection);
}

// Function to render contact page
function renderContact() {
    const contactSection = document.createElement("div");
    contactSection.classList.add("contact-section");
    contactSection.innerHTML = `<h2>Контакти</h2><p>Зв'яжіться з нами: info@rozetka.com</p><p>Телефон: +380 123 456 789</p>`;

    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(contactSection);
}

// Navigation function
function navigate(page) {
    if (page === 'home') {
        renderHome();
    } else if (page === 'products') {
        renderProducts();
    } else if (page === 'contact') {
        renderContact();
    }
}

// Search function
function searchProduct() {
    const searchInput = document.getElementById("search-input").value;
    renderProducts(searchInput);
}

// Initial load
window.onload = () => {
    renderHome();
};
