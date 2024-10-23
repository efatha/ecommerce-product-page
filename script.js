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
