const sheetURL = "https://script.google.com/macros/s/PASTE_YOUR_SCRIPT_URL_HERE/exec";

fetch(sheetURL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("property-container");
    container.innerHTML = ""; // Remove 'Loading...' text

    data.forEach(property => {
      const box = document.createElement("div");
      box.className = "property-box";
      box.innerHTML = `
        <img src="${property.image}" alt="${property.title}" />
        <h3>${property.title}</h3>
        <p>${property.description}</p>
        <p><strong>Price:</strong> ₹${property.price}</p>
      `;
      container.appendChild(box);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    const container = document.getElementById("property-container");
    container.innerHTML = "Failed to load properties.";
  });
