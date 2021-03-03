const takeAway = {
  cuisine: ['Italian', 'Greek', 'Indian', 'Chinese', 'Thai', 'Fish and Chips'],
  drinks: ['Tap Water. Something here needs to be healthy!', 'Pop. Coke? lemonade? You choose!', 'Beer baby!', 'Wine.. Obviously'],
  dessert: ['Definitely. Stupid question!', 'Not Today. You already put on 5 lbs with the first course!', 'Yeah get extra. The diet can start tomorrow!']
}

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
