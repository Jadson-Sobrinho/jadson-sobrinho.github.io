const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach(container => {
  const carousel = container.querySelector(".carousel");
  const items = container.querySelectorAll(".carousel-item");
  const prevButton = container.querySelector(".prev-button");
  const nextButton = container.querySelector(".next-button");
  let currentIndex = 0;

  function showSlide(index) {
    const totalItems = items.length;

    if (index >= totalItems) currentIndex = 0;
    if (index < 0) currentIndex = totalItems - 1;

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  // Exibe o primeiro slide ao carregar
  showSlide(currentIndex);
});
