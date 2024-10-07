const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let leftBasketVal = 10;
let rightBasketVal = 0;
const rightBasket = document.querySelector(".rightBasket");
const leftBasket = document.querySelector(".leftBasket");

rightArrow.addEventListener("click", () => {
  if (rightBasketVal === 10) {
    alert("Basket 2 is full");
  } else {
    ++rightBasketVal;
    --leftBasketVal;
    rightBasket.innerHTML = rightBasketVal;
    leftBasket.innerHTML = leftBasketVal;
  }
});

leftArrow.addEventListener("click" , () => {
    if(leftBasketVal === 10){
        alert("Basket 1 is full")
    }
    else{
        ++leftBasketVal
        --rightBasketVal
        rightBasket.innerHTML = rightBasketVal;
    leftBasket.innerHTML = leftBasketVal;
    }
})