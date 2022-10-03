//Задание 5
const func = (x, n) => {

let result = x

for(let i=1; i<n; i++) {
result *= x;
}

return result

};

console.log(func(2,6));