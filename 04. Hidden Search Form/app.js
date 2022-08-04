const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// On 'click' toggle (add/remove) class 'active' to .search,
// put focus on input.
btn.addEventListener('click', () =>{
  search.classList.toggle('active');
  input.focus();
})