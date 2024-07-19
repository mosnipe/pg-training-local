const readline = require('readline'); 

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

console.log("**** 漢数字変換(1桁のみ) ****");

rl.question('数: ', (answer) => { 
    const num = parseInt(answer);

    if(num === 0) {
        console.log("零"); 
    }
    else if(num === 1) {
        console.log("一");
    }
    else if(num === 2) {
        console.log("二");
    }
    else if(num === 3) {
        console.log("三");
    }
    else if(num === 4) {
        console.log("四");
    }
    else if(num === 5) {
        console.log("五");
    }
    else if(num === 6) {
        console.log("六");
    }
    else if(num === 7) {
        console.log("七");
    }
    else if(num === 8) {
        console.log("八");
    }
    else if(num === 9) {
        console.log("九");
    }
    else {
        console.log(`${answer}は、一桁の数ではないので変換できません`);
    }
    rl.close(); 
}); 
