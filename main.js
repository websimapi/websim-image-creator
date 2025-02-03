// main.js: JavaScript code to create an image element based on user input

let imageCounter = 0; // used to generate unique IDs

document.addEventListener('DOMContentLoaded', () => {
  const imgForm = document.getElementById('imgForm');
  const imgTextInput = document.getElementById('imgText');
  const imageContainer = document.getElementById('imageContainer');

  imgForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userText = imgTextInput.value.trim();
    if (userText === '') return;

    // Create a new image element
    const imgElement = document.createElement('img');
    imageCounter++; // increment counter for each new image
    imgElement.id = `image-${imageCounter}`;
    imgElement.src = userText;
    imgElement.alt = userText;

    // Append the image to the container
    imageContainer.appendChild(imgElement);

    // Optionally, clear the input after submission
    imgTextInput.value = '';
  });
});