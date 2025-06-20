document.addEventListener("DOMContentLoaded", function () {
  const sheetURL = "https://script.google.com/macros/s/AKfycbxQPI34nqh5UNMSSKSVmahj6WAuzOfBK0SzOSm_9D7VE8Mgpj9Ao9SBKBiQEHK_egEL5g/exec";

  const container = document.getElementById("properties-container");
  container.innerHTML = "<p>Loading properties...</p>";

  fetch(sheetURL)
    .then(response => response.json())
    .then(data => {
      container.innerHTML = "";

      data.forEach(property => {
        const card = document.createElement("div");
        card.className = "property-card";

        const image = document.createElement("img");
        image.src = property["Upload Property Images (Optional)"] || "default.jpg";
        image.alt = "Property Image";
        image.className = "property-image";

        const title = document.createElement("h3");
        title.textContent = property["Property Title"] || "No Title";

        const city = document.createElement("p");
        city.textContent = `City: ${property["City"] || "N/A"}`;

        const price = document.createElement("p");
        price.textContent = `Price: ₹${property["Expected Rent / Sale Price"] || "N/A"}`;

        const extra = document.createElement("p");
        extra.textContent = property["Extra Description"] || "";

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(city);
        card.appendChild(price);
        card.appendChild(extra);

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      container.innerHTML = "<p>Error loading properties. Please try again later.</p>";
    });
});
