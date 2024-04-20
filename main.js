function handleBuyClick(button) {
    // Get the parent div of the clicked button
    let itemContainer = button.parentNode.parentNode;

    // Get image source, description, and price of the selected item
    let imageSrc = itemContainer.querySelector('img').src;
    let description = itemContainer.querySelector('.description').textContent;
    let price = itemContainer.querySelector('.price').textContent.trim();

    // Create an object for the selected item
    let selectedItem = {
      image: imageSrc,
      description: description,
      price: price
    };

    // Retrieve existing items from localStorage or initialize as an empty array
    let selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

    // Add the selected item to the array
    selectedItems.push(selectedItem);

    // Save updated items back to localStorage
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

    // Optional: You can display a confirmation message
    console.log("Item added to cart:", selectedItem);
  }


  // Function to toggle the shopping bag modal
  function toggleShoppingBagModal() {
    let modal = document.getElementById("shoppingBagModal");
    if (modal.style.display === "block") {
      modal.style.display = "none";
    } else {
      openShoppingBagModal();
    }
  }

  // Function to open the shopping bag modal
  function openShoppingBagModal() {
    let modal = document.getElementById("shoppingBagModal");
    modal.style.display = "block";

    // Retrieve items from localStorage
    let selectedItems = JSON.parse(localStorage.getItem("selectedItems"));

    // Display the items in the modal
    let shoppingBagItems = document.getElementById("shoppingBagItems");
    shoppingBagItems.innerHTML = "";
    if (selectedItems && selectedItems.length > 0) {
      selectedItems.forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.innerHTML = `
          <div>
            <img src="${item.image}" alt="${item.description}">
            <p>${item.description}</p>
            <p>${item.price}</p>
          </div>
        `;
        shoppingBagItems.appendChild(itemElement);
      });
    } else {
      shoppingBagItems.innerHTML = "<p>Your shopping bag is empty.</p>";
    }
  }

    // Function to close the shopping bag modal
    function closeShoppingBagModal() {
      let modal = document.getElementById("shoppingBagModal");
      modal.style.display = "none";
    }

      // Load selected items from localStorage on page load (optional)
  window.onload = function() {
    // This line is optional, you can remove it if you don't want to automatically load the items
    closeShoppingBagModal();
  };

  // Function to redirect to the checkout page
 function redirectToCheckout() {
   window.location.href = "checkout.html";
 }
