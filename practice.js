//problem 1 
/* 
const multi = function multiply(first,second,third){
    return first * second * third;
}
 */
const multiply = (first,second,third) => {
    return first * second * third;
}

const result = multiply(2,3,4);
console.log(result);

//problem 2 
const multiLine = `I am a web developer.
I love to code.
I love to eat biryani.
`;

console.log(multiLine);

//problem 3 
const add = (first, second = 0) => first + second;

const addResult = add(10);
console.log(addResult);