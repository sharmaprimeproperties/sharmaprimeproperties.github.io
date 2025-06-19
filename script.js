document.addEventListener("DOMContentLoaded", function () {
  const sheetURL = "https://script.google.com/macros/s/AKfycbxVUISwbAaUDdttTBrDCy-kSMheNA3iF3wpDz_KnaxI4aGg2Lct6ycoSRTDwDB-GLacXg/exec";

  const container = document.getElementById("properties-container");

  fetch(sheetURL)
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = "";

      data.forEach((property) => {
        const card = document.createElement("div");
        card.className = "property-card";

        const title = document.createElement("h3");
        title.textContent = property["Property Title (e.g. 2 BHK Flat in Noida)"] || "No Title";

        const city = document.createElement("p");
        city.textContent = `City: ${property["City"] || "Not Provided"}`;

        const price = document.createElement("p");
        price.textContent = `Price: ₹${property["Expected Rent / Sale Price (INR)"] || "N/A"}`;

        const agent = document.createElement("p");
        agent.textContent = `Agent: ${property["Agent name"] || "N/A"}`;

        card.appendChild(title);
        card.appendChild(city);
        card.appendChild(price);
        card.appendChild(agent);

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      container.innerHTML = "<p>Error loading properties. Please try again later.</p>";
    });
});
