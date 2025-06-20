const sheetURL = "https://script.google.com/macros/s/AKfycbxZVk7hRvAs0UKYJhIUbyThNLVSjmnLrT0_RXYeZFlDrIs0QgwmqB8qB1aoi6M8azoq4A/exec";

async function fetchProperties() {
  try {
    const response = await fetch(sheetURL);
    const data = await response.json();
    displayProperties(data);
  } catch (error) {
    document.getElementById("properties").innerHTML = "<p>Error loading properties. Please try again later.</p>";
  }
}

function displayProperties(properties) {
  const container = document.getElementById("properties");
  container.innerHTML = "";

  properties.forEach(prop => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${prop["Property title"] || "No Title"}</h3>
      <p><strong>Location:</strong> ${prop["City"] || "undefined"}</p>
      <p><strong>Rent:</strong> ₹${prop["Rent"] || "undefined"}</p>
      <p><strong>Size:</strong> ${prop["BHK/No of rooms"] || "undefined"}</p>
      <p><strong>Type:</strong> ${prop["Furnishing"] || "undefined"}</p>
      <p><strong>Contact:</strong> ${prop["Agent name"] || "undefined"}</p>
    `;
    container.appendChild(card);
  });
}

window.onload = fetchProperties;
