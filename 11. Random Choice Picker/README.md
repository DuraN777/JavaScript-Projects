# Random Choice Picker

## Functionality
Enter any number of choices you are indecisive about, separated by comma and hit enter.
Random choice will be highlighted for you.

## How it works
From HTML `<textarea>` and empty `<div class='tags'>` are selected.
To textarea eventListener is added to respond on keyup events.
The input user types in and separates by comma in textarea is filtered, trimed and maped such that it results in an array of elements.

For each of those elements a new tag `<span>` is created, given a class of 'tag' and innerText of corresponding element from the array. `<span>` tags are appended to empty `<div>` under `<textarea>`.

Every 100ms a random `<span>` tag is highlighted 30 times, during a 100ms x 30 period. At the end of the interval a single `<span>` is highlighted, presenting to the user a final random choice.

