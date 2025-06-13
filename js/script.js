document.addEventListener("DOMContentLoaded", () => {
  const inner = document.getElementById("carrosselInner");
  const images = inner.querySelectorAll("img");
  const imageWidth = 300; // Largura fixa de cada imagem (ajuste conforme necessário)
  let index = 0;

  function slide() {
    index++;
    inner.style.transition = "transform 0.6s ease";
    inner.style.transform = `translateX(-${index * imageWidth}px)`;

    // Quando chega nos clones (fim), reinicia no original suavemente
    if (index >= images.length - 4) { // -4 porque são os clones
      setTimeout(() => {
        inner.style.transition = "none";
        index = 0;
        inner.style.transform = "translateX(0)";
      }, 600); // Tempo da transição
    }
  }

  setInterval(slide, 3000); // Troca a cada 3s
});