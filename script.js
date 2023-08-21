window.onload = () => {
    const grid = document.querySelector('.grid');
    const gridItem = document.querySelector('.grid-item');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 43,
        stagger: 30,
    });
}
// --------------------------------------------------------------------------------------------
const galleryImages = document.querySelectorAll('.grid-item');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const closePopup = document.querySelector('.close-popup');

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    const imageUrl = `./assets/${index + 1}.png`; 
    popupImage.src = imageUrl;
    popup.style.display = 'flex';
  });
});
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
// --------------------------------------------------------------------------------------------
const btnGridOpen = document.getElementById('btn-grid-open');
const gridItem = document.querySelectorAll('.grid-item');
const grid = document.querySelector('.grid');
const gridGradient = document.querySelector('.grid-gradient');
const btnGridClose = document.getElementById('btn-grid-close');

function openGrid() {
  gridItem.forEach(function (item) {
      item.classList.remove('hidden'); 
      grid.style.height = '3000px'; 
      gridGradient.remove(); 
      btnGridOpen.style.display = 'none'; 
      btnGridClose.classList.remove('hidden'); 
      const masonry = new Masonry(grid, {
          itemSelector: '.grid-item',
          gutter: 43,
          stagger: 30,
      });
    })
}
btnGridOpen.addEventListener('click', openGrid);


function closeGrid() {
  gridItem.forEach(function () {
    grid.style.height = '1400px'; 
    btnGridOpen.style.display = 'block'; 
    btnGridClose.style.display = 'none'; 
  })
  let gradient = document.createElement('div');
  gradient.className = 'grid-gradient'
  grid.appendChild(gradient);
}

btnGridClose.addEventListener('click', closeGrid);

// --------------------------------------------------------------------------------------------