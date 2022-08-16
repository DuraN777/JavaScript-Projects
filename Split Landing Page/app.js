const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// On hover add a class and on mouseleave remove a class, changing the elements width

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));