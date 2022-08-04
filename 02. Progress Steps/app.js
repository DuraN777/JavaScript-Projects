const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Variable to follow state of butons clicked and active circles
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if(currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateDom();
})

prev.addEventListener('click', () => {
  currentActive--;

  if(currentActive < 1) {
    currentActive = 1;
  }
  updateDom();
})

function updateDom() {
  // compare number of next clicks and add active class if number is > circle[index]; else remove active class. 
  circles.forEach((circle, index) => {
    if( index < currentActive) {
      circle.classList.add('active');
    }
    else {
      circle.classList.remove('active');
    }
  })

  // Handle progress bar
  const actives = document.querySelectorAll('.active');
  // having 4 elements we have 3 bars to fill. 1/3, 2/3 and 3/3.
  // This time this math will work because we need aprox 33%, 66% and 100% width to show progress.
  progress.style.width =((actives.length -1) / (circles.length - 1)) * 100 + '%';

  // Manage disabled of buttons, disable prev when only 1 elements is active, disable next when all els are active.
  if(currentActive === 1) {
    prev.disabled = true;
  } 
  else if ( currentActive === circles.length) {
    next.disabled = true;
  }
  else {
    next.disabled = false;
    prev.disabled = false;
  }
}