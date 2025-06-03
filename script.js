
document.addEventListener('DOMContentLoaded', 
() => { 
    // Handle Search Functionality 
    const searchInput = 
document.querySelector('.search-input'); 
    const searchIcon = 
document.querySelector('.search-icon'); 
    const categorySelect = 
document.querySelector('.search-select'); 
 
    searchIcon.addEventListener('click', () => 
{ 
        const query = 
searchInput.value.trim(); 
        const category = categorySelect.value; 
         
        if (query) { 
            // Perform search logic 
            alert(`Searching for "${query}" in 
${category} category...`); 
            // Implement actual search logic 
// here (e.g., API call or navigation) 
        } else { 
            alert('Please enter a search 
term.'); 
        } 
    }); 
 
    // Handle Changing Delivery Location 
    const locationElement = 
document.querySelector('.add-second'); 
 
    locationElement.addEventListener('click', 
() => { 
        const newLocation = prompt('Enter your 
new delivery location:', 
locationElement.textContent); 
        if (newLocation && newLocation.trim() 
!== "") { 
            locationElement.textContent = 
newLocation; 
        } else { 
            alert('Location cannot be 
empty.'); 
        } 
    }); 
 
    // Handle Cart Interaction 
    let cartCount = 0; // Basic cart counter 
    const cartButton = 
document.querySelector('.nav-cart'); 
 
    cartButton.addEventListener('click', () => 
{ 
        if (cartCount > 0) { 
            alert(`You have ${cartCount} 
item(s) in your cart.`); 
        } else { 
            alert('Your cart is empty. Start 
adding items!'); 
        } 
    }); 
 
    // Handle "Add to Cart" button 
// functionality (you can integrate it later on 
// specific product pages) 
    const addToCartButtons = 
document.querySelectorAll('.shop-section .box 
.box-content p'); 
    addToCartButtons.forEach(button => { 
        button.addEventListener('click', () => 
{ 
            cartCount++; 
            alert('Item added to cart! Total 
items: ' + cartCount); 
            // Update cart counter logic if 
needed 
        }); 
    }); 
 
    // Handle "See More" Button Clicks in Shop 
Section 
    const seeMoreButtons = 
document.querySelectorAll('.box1 p'); 
    seeMoreButtons.forEach(button => { 
        button.addEventListener('click', 
(event) => { 
            const category = 
event.target.closest('.box
content').querySelector('h2').textContent; 
            alert(`Redirecting to the 
${category} category...`); 
            // Implement redirection logic 
here (e.g., window.location.href = "category
page-url") 
        }); 
    }); 
 
    // Handle "Back to Top" Button 
    const backToTopButton = 
document.querySelector('.foot-panel1'); 
    backToTopButton.addEventListener('click', 
() => { 
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        }); 
    }); 
     
    // Optional: Enhance the UI by dynamically 
// loading content or applying additional effects 
    const navElements = 
document.querySelectorAll('.border'); 
    navElements.forEach(element => { 
        element.addEventListener('mouseenter', 
() => { 
element.style.borderColor = 
'white'; 
}); 
element.addEventListener('mouseleave', 
() => { 
element.style.borderColor = 
'transparent'; 
}); 
}); 
}); 
