const carousels = document.querySelectorAll(".carousel-container, .certificate-carousel-container");

carousels.forEach(container => {
  const carousel = container.querySelector(".carousel");
  const items = container.querySelectorAll(".carousel-item");
  const prevButton = container.querySelector(".prev-button");
  const nextButton = container.querySelector(".next-button");
  const counter = container.querySelector(".image-counter");
  let currentIndex = 0;

  function showSlide(index) {
    const totalItems = items.length;

    // Ajusta o índice atual para o intervalo válido
    if (index >= totalItems) currentIndex = 0;
    if (index < 0) currentIndex = totalItems - 1;

    // Atualiza o deslocamento do carrossel
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    // Atualiza o contador de imagens
    counter.textContent = `${currentIndex + 1}/${totalItems}`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
  });

  // Exibe o primeiro slide e atualiza o contador ao carregar
  showSlide(currentIndex);
});


//about me
const container = document.getElementById("carousel-container-about-me");

if (container) {
  const carousel = document.getElementById("carousel-about-me");
  const items = carousel.querySelectorAll(".carousel-item-about-me");
  let currentIndex = 0;
  const slideInterval = 15000; // Tempo entre slides (em milissegundos)

  // Função para exibir o slide com base no índice
  function showSlide(index) {
    const totalItems = items.length;

    if (index >= totalItems) currentIndex = 0;
    if (index < 0) currentIndex = totalItems - 1;

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Função para iniciar a transição automática
  function startAutoSlide() {
    return setInterval(() => {
      currentIndex++;
      showSlide(currentIndex);
    }, slideInterval);
  }

  // Exibe o primeiro slide ao carregar
  showSlide(currentIndex);

  // Inicia o carrossel automático
  startAutoSlide();


}

