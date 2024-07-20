const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfPeople;
let ages = [];
let ageIndex = 0;

rl.question('人数[人] : ', (answer) => {
    numberOfPeople = parseInt(answer);
    askAge();
});

function askAge() {
    if (ageIndex < numberOfPeople) {
        rl.question(`${ageIndex + 1}番目の人の年齢[歳] : `, (answer) => {
            ages.push(parseInt(answer));
            ageIndex++;
            askAge();
        });
    } else {
        rl.close();
        calculateAverage();
    }
}

function calculateAverage() {
    const sum = ages.reduce((a, b) => a + b, 0);
    const average = sum / numberOfPeople;
    console.log(`平均年齢[歳] : ${average}`);
}
