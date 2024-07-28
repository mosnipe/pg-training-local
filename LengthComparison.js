const readline = require('readline'); 

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

console.log("**** 長さ比べ ****");

rl.question('1つめの長さ[m]:', (answer1) => { 
    const firstLength = parseFloat(answer1);
    rl.question('2つめの長さ[m]:', (answer2) => { 
        const secondLength = parseFloat(answer2);
        let Longer, Shorter;

        if (isNaN(firstLength) || isNaN(secondLength)) {
            Longer = "正しい値が入力されなかったようです。";
            Shorter = "正しい値が入力されなかったようです。";
        } else if (firstLength > secondLength) {
            Longer = String(firstLength);
            Shorter = String(secondLength);
        } else if (secondLength > firstLength) {
            Longer = String(secondLength);
            Shorter = String(firstLength);
        } else {
            Longer = "2つの長さは同じです。";
            Shorter = "2つの長さは同じです。";
        }

        console.log(`${Longer}[m]`);
        console.log(`${Shorter}[m]`);
        rl.close(); 
    }); 
});
