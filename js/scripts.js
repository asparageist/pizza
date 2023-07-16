window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  }
}

function pizza(size ,tops) {
  this.size = size;
  this.tops = tops;
}

function myPizza() {
  const getSize = document.getElementById("size");
  const mySize = getSize.options[getSize.selectedIndex].value;
  const getTops = document.getElementsByName("topping");
  let myTops = "";
  for (var i = 0; i < getTops.length; i++) {
    if (getTops[i].checked) {
      myTops = getTops[i].value;
      break;
    }
  }
  const orderPizza = new pizza(mySize, myTops);
  console.log(orderPizza);
}