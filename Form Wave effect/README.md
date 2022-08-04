# Form Wave Animation

## Animating the two labels of inputs.
Labels are grabbed with JS and stored in a variable, content of labels are strings. With `forEach` method I iterate through labels , split the string into separate elements with `split`, assign the `<span></span>` and styling through it to each element and rejoin it into a string with `join`. For each element through `<span>` a transition-delay is added, and by using index value of each element the transition is adjusted to be later in time for each successive element by multiplying the index value with a fixed number of milliseconds.
