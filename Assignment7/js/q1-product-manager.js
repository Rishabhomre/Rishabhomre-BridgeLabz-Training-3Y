// Q1: Add, edit and delete products using event delegation on the parent <ul>.
const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");

let currentlyEditingItem = null;
let currentlyEditingInput = null;

function saveEditedProduct() {
  if (!currentlyEditingItem || !currentlyEditingInput) return;

  const productName = currentlyEditingInput.value.trim();
  if (productName) {
    currentlyEditingItem.querySelector(".product-name").textContent = productName;
  }

  currentlyEditingItem.classList.remove("is-editing");
  currentlyEditingInput.remove();
  currentlyEditingItem.querySelector(".product-name").hidden = false;
  currentlyEditingItem = null;
  currentlyEditingInput = null;
}

function addProduct(productName) {
  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "edit-product";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-product";
  deleteButton.textContent = "Delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
}

productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) {
    productInput.focus();
    return;
  }
  addProduct(productName);
  productInput.value = "";
  productInput.focus();
});

// One listener handles all Edit and Delete button clicks.
productList.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button");
  if (!clickedButton) return;

  const listItem = clickedButton.closest("li");
  if (!listItem) return;

  if (clickedButton.classList.contains("delete-product")) {
    if (currentlyEditingItem === listItem) saveEditedProduct();
    listItem.remove();
    return;
  }

  if (clickedButton.classList.contains("edit-product")) {
    if (currentlyEditingItem && currentlyEditingItem !== listItem) saveEditedProduct();
    if (currentlyEditingItem === listItem) {
      saveEditedProduct();
      return;
    }

    const nameSpan = listItem.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = nameSpan.textContent;
    editInput.setAttribute("aria-label", "Edit product name");
    nameSpan.hidden = true;
    nameSpan.after(editInput);
    currentlyEditingItem = listItem;
    currentlyEditingInput = editInput;
    editInput.focus();
    editInput.select();

    editInput.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.key === "Enter") saveEditedProduct();
      if (keyEvent.key === "Escape") {
        editInput.value = nameSpan.textContent;
        saveEditedProduct();
      }
    });
    editInput.addEventListener("blur", saveEditedProduct, { once: true });
  }
});

// Clicking outside the item being edited automatically saves the change.
document.addEventListener("click", (event) => {
  if (currentlyEditingItem && !currentlyEditingItem.contains(event.target)) {
    saveEditedProduct();
  }
});
