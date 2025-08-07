document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Wireless Headphones", image: "images/sample-product.jpg", price: "$59.99" },
    { id: 2, name: "Smart Watch", image: "images/sample-product.jpg", price: "$89.99" },
    { id: 3, name: "Bluetooth Speaker", image: "images/sample-product.jpg", price: "$39.99" },
    { id: 4, name: "Gaming Mouse", image: "images/sample-product.jpg", price: "$29.99" },
    { id: 5, name: "Fitness Tracker", image: "images/sample-product.jpg", price: "$49.99" }
  ];

  const productGrid = document.getElementById("productGrid");

  function renderProducts(items) {
    productGrid.innerHTML = "";
    items.forEach(product => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      `;
      productGrid.appendChild(card);
    });
  }

  renderProducts(products);

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
  });
});
