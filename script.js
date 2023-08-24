const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];

  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];

const container = document.querySelector('tbody');
const avgPrice = document.querySelector('.avgPrice')
let avg = 0;

function randomFreelancer(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const occupationIdx = Math.floor(Math.random()*occupations.length);
    const priceIdx = Math.floor(Math.random()*100);
    const freelancer = {
        name: names[nameIdx],
        occupation: occupations[occupationIdx],
        price: priceIdx
    };
  return freelancer;
}

const freelancers = [
  randomFreelancer(),
  randomFreelancer()
];

function render(){
    const html = freelancers.map(function(flncer){
        avg += flncer.price
        return `<tr><td> ${flncer.name}</td> <td> ${flncer.occupation}</td> <td> $${flncer.price}</td></tr>`;
    });
    avg /= freelancers.length + 1
    avgPrice.innerHTML = `The average starting price is ${Math.round(avg)}`
    container.innerHTML = html.join('');
}

render();
    let interval = setInterval(function(){
    const newFreelancer = randomFreelancer();
    freelancers.push(newFreelancer);
    render();

    if(freelancers.length + 1 > 5){
        clearInterval(interval)
    }
}, 1000);