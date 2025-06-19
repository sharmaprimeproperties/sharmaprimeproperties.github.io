document.addEventListener("DOMContentLoaded", function () {
    const sheetURL = "https://script.google.com/macros/s/AKfycbxVUISwbAaUDdttTBrDCy-kSMheNA3iF3wpDz_KnaxI4aGg2Lct6ycoSRTDwDB-GLacXg/exec";

    const container = document.getElementById("properties-container");

    fetch(sheetURL)
        .then((response) => response.json())
        .then((data) => {
            container.innerHTML = ""; // Clear loading text

            if (!Array.isArray(data)) {
                container.innerHTML = "<p>No properties available.</p>";
                return;
            }

            data.forEach((property) => {
                const card = document.createElement("div");
                card.className = "property-card";

                // Property image
                const image = document.createElement("img");
                image.src = property["Upload Property Images (Optional)"] || "default.jpg";
                image.alt = "Property Image";
                image.className = "property-image";

                // Title
                const title = document.createElement("h3");
                title.textContent = property["Property Title (e.g., 2 BHK Flat in Noida)"] || "No title";

                // City
                const city = document.createElement("p");
                city.textContent = `City: ${property["City"] || "Unknown"}`;

                // Price
                const price = document.createElement("p");
                price.textContent = `Price: ₹${property["Expected Rent / Sale Price (INR)"] || "N/A"}`;

                // Description
                const extra = document.createElement("p");
                extra.textContent = property["Extra Description / Any Other Detail"] || "";

                // Append all
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(city);
                card.appendChild(price);
                card.appendChild(extra);

                container.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            container.innerHTML = "<p>Error loading properties. Please try again later.</p>";
        });
});
