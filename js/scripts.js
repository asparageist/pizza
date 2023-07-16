window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
  event.preventDefault();
  }
}

function pizza(size ,tops, cost) {
  this.size = size;
  this.tops = tops;
  this.cost = cost;
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
  const myCost = parseInt(mySize) + parseInt(myTops);
  const orderPizza = new pizza(mySize, myTops, myCost);
  display(orderPizza);
}

function display(orderPizza) {
  const insertPizza = document.getElementById("insert");
  insertPizza.innerHTML="";
  const showPizza = document.createElement("p");
  showPizza.textContent = `your size: $${orderPizza.size}, your toppings: $${orderPizza.tops}, your pizza costs: $${orderPizza.cost}. come and get it. it's ready.`;
  insertPizza.appendChild(document.createElement("br"));
  insertPizza.appendChild(showPizza);
}