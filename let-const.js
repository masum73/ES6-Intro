//let: let it to reassign
// const: do not allow it to reassign 

let money = 25;
money = 35;
console.log(money);

const bird = 'A bird';
//bird = 'A blue bird';
const message = bird + 'pot pot';
console.log(message);
console.log(bird);

const numbers = [12,89,65,45];
//numbers = [21,32435,243,]
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Mofiz',
    address: 'Pongpur'
}
// student = {name: 'Masum'}

student.name = 'Masum'

console.log(student);

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
}
console.log(number);

  