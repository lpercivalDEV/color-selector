# Color Selector

### Tech Used:
HTML, CSS (grid), JavaScript.

### Instructions:
Click [here] () to see a live demo.
1. Clone repo
2. Open index.html in a browser
3. Have fun!

### Purpose:
This is a simple application to showcase DOM manipulation and basic styling.

Using HTML and CSS grid, I created an array of color swatches that users can select from. When a user hovers over a square (css :hover pseudo element), that square is highlighted to help give selection feedback. Once a user clicks on a square, the page will turn the color inside the selected square.

In the JavaScript file, an event listener waits for a click event to occur and then grabs the background color value from the square that was clicked. The changeColor function then sets  body.style.backgroundColor equal to that color value turning the page the same color as the selected square.

Simply refresh the page to return it to its default color setting.
