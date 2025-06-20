const scriptURL = "https://script.google.com/macros/s/AKfycbxZVk7hRvAs0UKYJhIUbyThNLVSjmnLrT0_RXYeZFlDrIs0QgwmqB8qB1aoi6M8azoq4A/exec";

async function fetchProperties() {
  try {
    const res = await fetch(scriptURL);
    const data = await res.json();

    const container = document.getElementById("property-list");
    container.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "property-card";
      card.innerHTML = `
        <h3>${item.PropertyName || "No Title"}</h3>
        <p><strong>Location:</strong> ${item.Location}</p>
        <p><strong>Rent:</strong> ₹${item.Rent}</p>
        <p><strong>Size:</strong> ${item.Size}</p>
        <p><strong>Type:</strong> ${item.Type}</p>
        <p><strong>Contact:</strong> ${item.Contact}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    document.getElementById("property-list").innerHTML = "Error loading properties. Please try again later.";
    console.error("Fetch error:", err);
  }
}

fetchProperties();
