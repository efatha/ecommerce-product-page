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