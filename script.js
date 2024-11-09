//This scripts will handle the counter effect on the cart section of the page

const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const countDisplay = document.querySelector('.count');

let count = 0;

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {  // Ensure the count doesn't go below 0
    count--;
  }
  updateCount();
});

increaseBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

function updateCount() {
  countDisplay.textContent = count;
}
console.log(decreaseBtn, increaseBtn, countDisplay);

 // JavaScript for changing main product image
 const thumbnails = document.querySelectorAll('.image-gallery img');
 const mainImage = document.querySelector('.product1');

 thumbnails.forEach((thumbnail) => {
     thumbnail.addEventListener('click', () => {
         mainImage.src = thumbnail.src.replace('-thumbnail', '');
     });
 });

 // Display elements in the cart session
 const carte = document.querySelector(".cart");
 carte.addEventListener('click', cart1);
 function cart1(){
   let text = document.getElementById("myCart")
   text.innerHTML =`   
      <h3 class="headCart">Cart</h3>
      <div class="Cart-Result">Your cart is empty 
      </div>
`;
  text.style.display="flex";
 };

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

function showImage(index) {
  // Wrap around if index is out of bounds
  if (index < 0) {
    currentImageIndex = images.length - 1;
  } else if (index >= images.length) {
    currentImageIndex = 0;
  } else {
    currentImageIndex = index;
  }
  productImage.src = images[currentImageIndex];
}

// Event listeners for next and previous buttons
nextButton.addEventListener("click", () => showImage(currentImageIndex + 1));
prevButton.addEventListener("click", () => showImage(currentImageIndex - 1));
