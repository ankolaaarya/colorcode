const element = document.getElementById('myElement');

// Define a mapping of words to colors
const colorMap = {
  red: 'red','green','Blue'
  blue: '#0000FF',
  green: '#00FF00'
};

// Function to change the color of the element based on a word
function setColor(word) {
  // Check if the word exists in the color map
  if (colorMap.hasOwnProperty(word)) {
    // Set the color of the element
    element.style.color = colorMap[word];
  } else {
    // Default color if the word is not found in the color map
    element.style.color = '#000000'; // Black color
  }
}

// Call the setColor function with a word to change the color
setColor('red');
//In this example, we have an element with an ID of "myElement" that we want to modify. We define a colorMap object that maps words to their corresponding colors. The setColor function takes a word as an argument and checks if it exists in the colorMap. If the word is found, it sets the color of the element to the corresponding color. If the word is not found, it sets a default color.

You can call the setColor function with different words to dynamically change the color of the element based on the word you provide. //






