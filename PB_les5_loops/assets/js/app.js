// // //opdracht 1:
let i = 1;

while (i <= 40){
    if(i % 4 == 0){
        console.log(`${i} is deelbaar door 4`)
    }
    else {
        console.log(`${i} niet deelbaar door 4`)
    }
    i++;
}

//opdracht 2:
console.log(0);
console.log(1);
var a;
var fib = [];

fib [0] = 0;
fib [1] = 1;

for (a = 2; a <= 10; a++){
    fib[a] = fib[a - 2] + fib[a - 1];
    console.log(fib[a]);
}


//opdracht 3:
var numbers = [2, 4, 8, 9, 12, 13]  
var sum = 0;
for (var b = 0; b < numbers.length; b++) {
    sum += numbers[b];
}   
console.log(sum);