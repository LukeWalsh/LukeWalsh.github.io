alert('ready?');

// Clear the DOM
document.removeChild(document.documentElement);

// Render in page
document.body.appendChild(
  document
    .createElement('div')
    .appendChild(document.createTextNode("Boom"))
  );