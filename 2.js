//Задание 2

function PrimeNumbers(a){
  let result = 'Не определено';
  if (a ===1 ) {
     result = 'Простое число';
  } else {
    for (let i = 2; i < a - 1; i++){
      if (a%i === 0){
        result = 'Не простое число';
        i = a - 1;
        }  else {
           result = 'Простое число';
          }
      }
    }   
      return result;     
    };
  let b = PrimeNumbers(7);
  console.log(b);