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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.display = "flex";
  document.getElementById("closebtn").style.display = "flex";
  document.querySelector("main").style.opacity = "0.3";
  document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
    