//This scripts will handle the counter effect on the cart section of the page

const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const countDisplay = document.querySelector('.count');
const countDisplay1 = document.querySelector('.count1');


let count = 0;
let count1 = 0;

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {  // Ensure the count doesn't go below 0
    count--;
    count1--;
  }
  updateCount();
});

increaseBtn.addEventListener("click", () => {
  count++;
  count1++;

  updateCount();
});

function updateCount() {
  countDisplay.textContent = count;
  countDisplay1.textContent = count1;
}
console.log(decreaseBtn, increaseBtn, countDisplay);

const countAddToCart = document.querySelector('.addToCart');

//Hide and display the active count number in the header
countDisplay1.style.display="none";// This code hides the initial count element by html by when you click on add to cart, it will generate the current number on your counter
countAddToCart.addEventListener("click", ()=>{
countDisplay1.style.display="flex"; 
});
 // JavaScript for changing main product image
 const thumbnails = document.querySelectorAll('.image-gallery img');
 const mainImage = document.querySelector('.product1');

 thumbnails.forEach((thumbnail, index) => {
     thumbnail.addEventListener('click', () => {
         showImage(index);
     });
 });

 // Display elements in the cart session
 const carte = document.querySelector(".cart");
 carte.addEventListener('click', cart1);
 const product = document.getElementById("currentPrice").innerText;
 function cart1() {
   let text = document.getElementById("myCart");
   let count = parseInt(countDisplay.textContent) || 0; // Ensure count is a number
   var title = document.querySelector("h1").innerText;
   var result = product * count; 

   if (count > 0) {
     text.innerHTML = `   
        <h3 class="headCart">Cart</h3>
        <div class="Cart-Result"><img src="${mainImage.src}" class="img-in-cart">${title}<br>$${product} × ${count} $${result}
        <img src="images/icon-delete.svg" class="delete">
        </div>
        <button type="button" class="checkout">Checkout</button>
     `;
   } else {
     text.innerHTML = `
        <h3 class="headCart">Cart</h3>
        <div class="Cart-Result">Your cart is empty</div>
     `;
   }

   text.style.display = "flex"; // Ensure the display style is applied
 }
 
// Open the side navigation
function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const mainContent = document.querySelector("main");

  sidenav.style.width = "250px"; // Expand the menu smoothly
  sidenav.style.display = "flex";
  document.getElementById("closebtn").style.display = "flex";

  // Apply opacity and background shading with delay
  setTimeout(() => {
    mainContent.style.opacity = "0.3";
    document.body.style.backgroundColor = "rgba(0,0,0,0.9)";

    document.body.classList.add("shaded");
  }, 100); // Delay to allow menu transition first
}

// Close the side navigation
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.display = "none"; // Hide sidebar
  document.getElementById("closebtn").style.display = "none";  // Hide close button
  document.querySelector("main").style.opacity = "1";          // Reset main opacity
  document.body.style.backgroundColor = "";                    // Reset background color
}

// JavaScript for Carousel
let currentImageIndex = 0;
const images = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];
const productImage = document.querySelector(".product1");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
let isAnimating = false;

function showImage(index) {
  if (isAnimating) return;

  let newIndex = index;
  if (index < 0) newIndex = images.length - 1;
  if (index >= images.length) newIndex = 0;
  if (newIndex === currentImageIndex) return;

  isAnimating = true;

  productImage.style.transition = 'opacity 240ms ease, transform 240ms ease';
  productImage.style.opacity = '0.3';
  productImage.style.transform = 'scale(0.98)';

  const nextSrc = images[newIndex];
  const preload = new Image();
  preload.src = nextSrc;
  preload.onload = () => {
    setTimeout(() => {
      productImage.src = nextSrc;
      currentImageIndex = newIndex;
      requestAnimationFrame(() => {
        productImage.style.opacity = '1';
        productImage.style.transform = 'scale(1)';
      });
      setTimeout(() => {
        isAnimating = false;
      }, 240);
    }, 180);
  };
}

// Event listeners for next and previous buttons
nextButton.addEventListener("click", () => showImage(currentImageIndex + 1));
prevButton.addEventListener("click", () => showImage(currentImageIndex - 1));
