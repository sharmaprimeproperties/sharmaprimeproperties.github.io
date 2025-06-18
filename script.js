fetch("property-data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = ""; // Clear 'Loading...' text

    data.forEach(property => {
      const div = document.createElement("div");
      div.className = "property";

      div.innerHTML = `
        <img src="${property.image}" alt="${property.title}" />
        <h2>${property.title}</h2>
        <p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Price:</strong> ${property.price}</p>
      `;

      propertyList.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById("property-list").innerHTML = "Failed to load properties.";
    console.error("Fetch error:", error);
  });
