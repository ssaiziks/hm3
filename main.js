//1
function compare(num1, num2) {

  if(num1 < num2) {

      console.log('первое меньше чем второе число');

  }else if(num2 < num1) {

      console.log('второе число меньше чем первое число');

 }else console.log('оба числа равны');

}

console.log(compare(6,1));



//2
function degree (num, degree) {

  return num**degree;

}

console.log(degree(2,3));



//3
var arr = [1,2,3,4,5];

function arraySum(array){

  var sum = 0;

  for(var i = 0; i < array.length; i++){

     sum += array[i];

  }

 console.log(sum);

}

arraySum(arr);

//допы
let user1 = {

 phoneNumber: '+996502059609',

 sms: 'str',

  sendTransfer: function(phoneNum, str)  {

     console.log(phoneNum, str);

 }

};

console.log(user1.sendTransfer('+996502059609', 'Hello'));




let user2 = {

 name: "Aizirek",

  age: 14,

  accountNumber: '+996502059609',

  balance: 1000,

 sendTransfer: (accountNum, sum) => {

     console.log('Номер счета', accountNum, 'Остаток баланса', user2.balance - sum);

 }

};

console.log(user2.sendTransfer('+996502059609', 800));