// Q5: Display a modal preview. Propagation is stopped inside the modal.
const imageGallery = document.getElementById("imageGallery");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");
const modalContent = imageModal.querySelector(".modal-content");

imageGallery.addEventListener("click", (event) => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  modalImage.src = clickedImage.src.replace("/300/200", "/1000/700");
  modalImage.alt = clickedImage.alt;
  modalCaption.textContent = clickedImage.alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
});

function hideImageModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

imageModal.addEventListener("click", hideImageModal);
modalContent.addEventListener("click", (event) => event.stopPropagation());
closeModal.addEventListener("click", hideImageModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.classList.contains("open")) hideImageModal();
});
