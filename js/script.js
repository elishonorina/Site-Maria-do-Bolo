const inner = document.getElementById("carrosselInner");
    const images = inner.querySelectorAll("img");
    const imageWidth = 300;
    const visibleCount = 4;
    const totalSlides = images.length - visibleCount; // exclui clones no cálculo do fim real
    let index = 0;

    setInterval(() => {
      index++;
      inner.style.transition = "transform 0.6s ease";
      inner.style.transform = `translateX(-${index * imageWidth}px)`;

      // Quando chegar no final das imagens reais, reposiciona para o início sem transição
      if (index === totalSlides) {
        setTimeout(() => {
          inner.style.transition = "none";
          index = 0;
          inner.style.transform = "translateX(0)";
        }, 600); // mesmo tempo da transição
      }
    }, 5000); // intervalo entre trocas (2s)