let numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);

for( let i=0; i < numbers.length; i++){
    console.log(numbers[i]);
};
for(let i=0; i<numbers.length; i++){
   var number = numbers[2];
}
console.log(number);

numbers.splice(2,1);
console.log(numbers);

let numberss = numbers.filter(num => num>3);
console.log(numberss);

let so = numbers.map(function(number){
    return number*number;
})
console.log(so);