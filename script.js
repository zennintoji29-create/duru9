// Generate falling flowers
const flowers = document.querySelector('.flowers');
const flowerSymbols = ["🌸", "🌺", "🌹", "🌼"];

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.innerText = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (Math.random() * 5 + 5) + "s"; // 5–10s fall
  flowers.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 700);
