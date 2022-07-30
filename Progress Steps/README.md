# Mock-up of a progress bar, using JavaScript

Made with HTML, CSS and JS.

## Functionality
  Functionality is added with JavaScript, by removing and adding a classes when elements are clicked.

## Code breakdown
  ### HTML 
    Div with class="progress-container" containins one Div with class="progress" id="progress", and four <div class="circle"> n </div>.
    Buttons are outside of the 'progress-container' div. They are used to go forward or back with the progress.
  
  ### CSS
    Progress div is used to style the progress bar with blue color depicting the progress.
    Background color is used to make the effect.
    Pseudo selector ::before of 'progress-container' div is used to show unfilled grey bar.
    Divs with class of 'circle' are also styled to show progress, grey for not there yet and blue for done.

  ### JS
    Using two buttons Previous and Next manage the progress on progress bar.
    When Next btn is clicked color the next circle by adding the apropriate class 'active', and the bar following that circle by filling the progress bar with apropriate width.
    When Previous btn is clicked go back with progress and remove active class.
    Disable btn Previous if the progress is on first step, and disable btn Next if progress is on its last step.


