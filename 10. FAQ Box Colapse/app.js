const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
  button.addEventListener('click', () =>{
    // instead of adding a class to seleceted elements, add to their parrent node.
    button.parentNode.classList.toggle('active');
  })
})