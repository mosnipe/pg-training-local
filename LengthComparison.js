const readline = require('readline'); 

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

console.log("**** 長さ比べ ****");

rl.question('1つめの長さ[m]:', (answer) => { 
    const firstLength = parseInt(answer);
    rl.question('2つめの長さ[m]:', (answer) => { 
        const secondLength = parseInt(answer);
            if(firstLength > secondLength ) {
                const Longer = String(firstLength);
                const Shorter = String(secondLength);
            }
            else if (secondLength > firstLength) {
                const Longer = String(secondLength);
                const Shorter = String(firstLength);
            }
            else if (firstLength === secondLength) {
                const Longer = String("2つの長さは同じです。");
                const Shorter = String("2つの長さは同じです。");
            }
            else{
                const Longer = String("正しい値が入力されなかったようです。");
                const Shorter = String("正しい値が入力されなかったようです。");
            }
            console.log(Longer);
            console.log(Shorter);
            rl.close(); 
    }); 
    rl.close(); 
}); 


