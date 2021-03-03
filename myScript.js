const onClick = document.querySelector(".button")

const cuisineOrder = ['Italian', 'Greek', 'Indian', 'Chinese', 'Thai', 'Fish and Chips'];

const drinksOrder = ['Tap Water. Something here needs to be healthy!', 'Pop. Coke? lemonade? You choose!', 'Beer baby!', 'Wine.. Obviously'];

const dessertsOrder = ['Definitely. Stupid question!', 'Not Today. You already put on 5 lbs with the first course!', 'Yeah get extra. The diet can start tomorrow!'];

// This returns a random value from the given array
let getRandomValue = (array) => {
    let value = Math.floor(Math.random() * (array.length));
    return array[value]
}

let yourOrder = () => {
    let cuisine = getRandomValue(cuisineOrder);
    let drinks = getRandomValue(drinksOrder);
    let desserts = getRandomValue(dessertsOrder);
    let cOrder = `The food gods think you should eat: <br><strong>${cuisine}</strong>.<br>`;
    let drOrder = `You should wash it all down with a nice glass of: <br><strong>${drinks}</strong>.<br>`;
    let deOrder = `Should you get dessert? <br><strong>${desserts}</strong>.`;
    document.getElementById('order').innerHTML = cOrder + "<br>" + drOrder + "<br> " + deOrder;
}
onClick.addEventListener("click", yourOrder);

/*
let yourOrder = []

for(let data in takeAway) {
  let dataIndex = generateRandomNumber(takeAway[data].length)

  switch(data) {
    case 'cuisine':
      yourOrder.push(`The food gods think you should eat "${takeAway[data][dataIndex]}".`)
      break
    case 'drinks':
      yourOrder.push(`You should wash it all down with a nice glass of "${takeAway[data][dataIndex]}".`)
      break
    case 'dessert':
      yourOrder.push(`Should you get dessert? "${takeAway[data][dataIndex]}".`)
      break
    default:
      yourOrder.push("The food gods must be out. I'd just toss a coin.")
  }
  }

function generateRandomNumber(num){
    return Math.floor(Math.random()*num)
  }

function completedOrder() {
const order = yourOrder.join('\n')
console.log(order)
}

completedOrder(yourOrder)

const onClick = document.querySelector(".btn")

onClick.addEventListener("click", completedOrder)

//this has changed
*/