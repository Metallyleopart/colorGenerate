const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

const maxBox = 15;

const generatePalette = () => {
  container.innerHTML = '';
  for (let i = 0; i < maxBox; i++) {
    // generating random color
    let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomColor = `#${randomColor}`;

    const color = document.createElement('li');
    color.classList.add('color');
    color.innerHTML = `<div class="color-box" style="background: ${randomColor}"></div>
                           <span class="color-value">${randomColor}</span>`;
    color.addEventListener('click', () => copyColor(color, randomColor));
    container.appendChild(color);
  }
};

generatePalette();

const copyColor = (params, hexVal) => {
  const colorElement = params.querySelector('.color-value');
  // Copy hexa code
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = 'Copied';
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert('Failed copy color'));
};