//Задание 3
  function sum(a) { //Функция которая принимает как аргумент а и возвращет функцию
    return function(b) { //Возвращаемая функция
        return a + b;
    };
}

console.log( sum(5)(7)); //первая цифра - идет в аргумент функции, вторая - принимается как аргумент возвращаемой функции
