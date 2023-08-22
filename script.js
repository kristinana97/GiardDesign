window.addEventListener('load', () => {
  // const grid = document.querySelector('.grid');
  const btnGridClose = document.getElementById('btn-grid-close');
  
  btnGridClose.classList.add('hidden');
  createGradient();
  createPopUp();
  // const masonry = new Masonry(grid, {
  //     columnWidth: '.grid-sizer',
  //     itemSelector: '.grid-item',
  //     gutter: 43,
  //     stagger: 30,
  //     fitWidth: true,
  // });
});
// --------------------------------------------------------------------------------------------
const gridItem = document.querySelectorAll('.grid-item');
const btnGridOpen = document.getElementById('btn-grid-open');
let appendedElems = [];
// const btnGridClose = document.getElementById('btn-grid-close');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const closePopup = document.querySelector('.close-popup');

// --------------------------------------------------------------------------------------------

function createGradient() {
  const gradient = document.createElement('div');
  gradient.className = 'grid-gradient';
  grid.appendChild(gradient);
}

function removeGradient() {
  const gradient = document.querySelector('.grid-gradient');
  gradient.remove();
}
// --------------------------------------------------------------------------------------------

const grid = document.querySelector('.grid');
const masonry = new Masonry(grid, {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  gutter: 43,
  stagger: 30,
  fitWidth: true,
});

btnGridOpen.addEventListener( 'click', function() {
  removeGradient();
        btnGridOpen.classList.add('hidden'); 
      btnGridClose.classList.remove('hidden');

  // create new item elements
  let elems = [];
  let fragment = document.createDocumentFragment();
  for ( let i = 0; i < 10; i++ ) {
    let elem = getItemElement();
    fragment.appendChild( elem );
    elems.push( elem );
  }
  grid.appendChild( fragment );// append elements to container
  masonry.appended( elems );// add and lay out newly appended elements

  appendedElems = appendedElems.concat(elems);
});



function getItemElement() { // create <div class="grid-item"></div>
  let elem = document.createElement('div');
  elem.className = 'grid-item';
  let img = document.createElement('img');
  let imageSrc = './assets/' + getRandomNumber(1, 10) + '.png'; 
  img.src = imageSrc;
  elem.appendChild(img);
  return elem;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const btnGridClose = document.getElementById('btn-grid-close');

btnGridClose.addEventListener('click', function() {
  const elemsToRemove = appendedElems.splice(-10);
  for (const elem of elemsToRemove) {
    grid.removeChild(elem); // Remove each appended item from the grid
  }

  masonry.layout(); // Update the Masonry layout
  btnGridClose.classList.add('hidden');
  btnGridOpen.classList.remove('hidden');
});



// --------------------------------------------------------------------------------------------
function chowac() {
    gridItem.forEach(function () {
      grid.style.height = '1300px'; 
      btnGridClose.classList.add('hidden'); 
      btnGridOpen.classList.remove('hidden');
  })
  createGradient();
}
btnGridClose.addEventListener('click', chowac);

// --------------------------------------------------------------------------------------------
function createPopUp() {
  gridItem.forEach((image, index) => {
    image.addEventListener('click', () => {
      const imageUrl = `./assets/${index + 1}.png`; 
      popupImage.src = imageUrl;
      popupImage.style.width = '40%';
      popup.style.display = 'flex';
      removeGradient();
    });
  });
}

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  
});


// function rozwin() {
  // gridItem.forEach(function (item) {
  //     item.classList.remove('hidden'); 
  //     grid.style.height = '3000px';  
  //     btnGridOpen.classList.add('hidden'); 
  //     btnGridClose.classList.remove('hidden');
  //     const masonry = new Masonry(grid, {
  //         columnWidth: '.grid-sizer',
  //         itemSelector: '.grid-item',
  //         gutter: 43,
  //         stagger: 30,
  //     });
  //   })
    // removeGradient();
// }
// btnGridOpen.addEventListener('click', rozwin);
