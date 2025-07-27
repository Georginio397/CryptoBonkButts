let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(".slide");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function copyContract() {
    const contractText = "Ca:Soon";
    navigator.clipboard.writeText(contractText).then(() => {
   
    });
  }
  
  // lightbox logic
document.querySelectorAll(".meme-gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
  
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  
  function createFallingItem() {
    const item = document.createElement('div');
    item.classList.add('falling-item');
  
    const size = Math.random() * 80 + 40; // random dimensiune
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
  
    item.style.left = `${Math.random() * 100}%`;
    item.style.animationDuration = `${Math.random() * 5 + 5}s`; // între 5 și 10s
    item.style.animationDelay = `${Math.random() * 3}s`;
  
    document.getElementById('falling-overlay').appendChild(item);
  
    // Eliminare după animație
    setTimeout(() => {
      item.remove();
    }, 12000);
  }
  
  // creează continuu elemente la intervale
  setInterval(createFallingItem, 600);
  
  
  

window.onload = () => {
  showSlide(currentIndex);
};
