// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run with Node.js 18+ (which includes the global fetch API), or in a browser.
// The optional HTML-card section runs only in a browser.

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    // fetch() does not reject automatically for HTTP errors such as 404.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("------------------------------");
    });

    // Optional bonus: create product cards when this script runs in a browser
    // and the HTML page contains an element with id="product-container".
    if (typeof document !== "undefined") {
      const container = document.getElementById("product-container");

      if (container) {
        products.forEach((product) => {
          const card = document.createElement("article");
          card.className = "product-card";

          const title = document.createElement("h3");
          title.textContent = product.title;

          const price = document.createElement("p");
          price.textContent = `$${product.price}`;

          const image = document.createElement("img");
          image.src = product.image;
          image.alt = product.title;
          image.width = 120;

          card.append(image, title, price);
          container.appendChild(card);
        });
      }
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.", error.message);
  }
}

fetchProducts();
