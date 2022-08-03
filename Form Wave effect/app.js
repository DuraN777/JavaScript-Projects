const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
  // take each label and set its innerHtml to..innerText, 
  // SPLIT it into an array, which puts each letter as an item in an array.
  // MAP it to turn it into array of letters with a span arround it.
  // JOIN to turn it back into a string.

  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('');
})

// for transition delay we dinamycaly add 'style="transition-delay:${idx * 50}ms"',
// each letter will get a different inline transition delay, based on its index * 50 ms.