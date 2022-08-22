const tagsEl = document.querySelector('.tags');
const textarea = document.getElementById('textarea');

// Automaticaly focus textarea. This is a method.
textarea.focus();

textarea.addEventListener('keyup',(e) => {
  // pass in an event parameter.
  // e.target.value will be whatever user types in txtArea
  createTags(e.target.value)
})

// This function will take whatever we type in, separate elements by a coma,
// and make an array of elements out of it using SPLIT method.
function createTags(input) {
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  console.log(tags)

  tagsEl.innerHTML = "";
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

/* function createTags:
takes in an input ,
input.split(',') splits input into arrays based on ','.
.filter(tag => tag.trim() !== '') - filters array elements such that it doesnt show empty string as an array element.
.map(tag => tag.trim()) - trims whitespace in elements of the resulting array.

This function will take whatever user writes in textarea and return it as array elements dividing them by comma.
*/


// filter- high order array method that returns values based on a condition 