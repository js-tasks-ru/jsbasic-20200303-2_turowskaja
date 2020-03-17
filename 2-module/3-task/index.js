//let calculator = {
//   read: function (num1, num2) {
//     this.a = num1;
//     this.b = num2;
//   },
//   sum: function () {
//     return this.a + this.b;
//   },
//   mul: function () {
//     return this.a * this.b;
//   }
// };

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
// window.calculator = calculator; // делает ваш калькулятор доступным глобально

function sumInput(){
  let sum = [];

  while(true){
    let userNumber = +prompt('Введите число', '');

    if (typeof userNumber == "number" ) {
      sum.push(userNumber);
    } else{
      break
    }
  }
  let numbers = 0;
  for (let items of sum){
    numbers += items;
  }
  return numbers;
}
alert(sumInput());
