var arr = []; 

function setName(){
    let input = document.getElementById('input-name').value;
    let thisName = document.getElementById('thisName');

    alert("Привет, " + input + " ! Теперь твое имя, в верхушке сайта." );
    thisName.innerHTML = "";
    thisName.innerHTML += '<h1 class="name-user">' + "Меня зовут, " + input + " !" + '</h1>';
}

function сomparisonString (){
    let string1 = document.getElementById("ans-1").value;
    let string2 = document.getElementById("ans-2").value;

    if (string1.length === string2.length){
        document.getElementById('compare-console').innerHTML = "";
        document.getElementById('compare-console').innerHTML += '<h1 class="name-user"> True </h1>';
    }
    else {
        document.getElementById('compare-console').innerHTML = "";
        document.getElementById('compare-console').innerHTML += '<h1 class="name-user"> False </h1>';
    }
}

function minAndMax (){
    num_value = document.getElementById("array-5-num").value;
    document.getElementById('number-console').innerHTML = "";
    arr.push(num_value);
    if (isNaN(num_value)){
        document.getElementById('number-console').innerHTML += '<h1 class="name-user"> Введенное значение не является числом. </h1>';
        arr.pop();
    }
    document.getElementById("array-5-num").value = "";
    if (arr.length === 5){
        let max = Number.parseInt(arr[0]);
        let min = Number.parseInt(arr[0]);
        for (let v of arr){
            v = Number.parseInt(v);
            if (v >= max) {
                max = v;
            }
            else if (v <= min){
                min = v;
            }
        }
        document.getElementById('number-console').innerHTML = "";
        document.getElementById('number-console').innerHTML += '<h1 class="name-user"> Max = ' + max + ", Min = " + min + ' </h1>';
        arr.length = 0;
    }
}

document.getElementById("array-5-num").onkeyup = function (e){
    if (e.keyCode === 13){
        minAndMax();   
    }
}

function areaOfTriangle(){
    let footing = Number.parseInt(document.getElementById("footing_triangle").value);
    let height = Number.parseInt(document.getElementById("height_triangle").value);
    let result = 0;

    result = 0.5*height*footing;
    console.log(result);
    document.getElementById('triangle-console').innerHTML = "";
    document.getElementById('triangle-console').innerHTML += '<h1 class="name-user"> ' + " = " + result + ' </h1>';
}

let user = {};
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty (obj){
    for (let key in obj){
        return false;
    }
    return true;
}

//alert(isEmpty(user));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
///alert(sum);

state_capitals = [
    {
        state: 'Maine',
        capital: 'Augusta'
    }
]

mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}];



function capital(capitals){
    let arr = [];
    let string;

    for (let key in capitals){
        if ("state" in capitals[key]){
        string = "The capital of " + capitals[key].state + " is " + capitals[key].capital;
        arr.push(string);
        }
        if ("country" in capitals[key]){
            string = "The capital of " + capitals[key].country + " is " + capitals[key].capital;
            arr.push(string);
        }
    }
    return arr;
}

//console.log(capital(mixed_capitals));

//console.log( typeof('1' + (+'2') ));

function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++){

    for (let j = 0; j < bracketsConfig.length; j++){
      if ((stack.length == 0 && str[i] == bracketsConfig[j][1])){
        return false;
      }

      if (str[i] == bracketsConfig[j][0]){
        stack.push(str[i]);
      }

      if (str[i] === bracketsConfig[j][1] && stack.length != 0){
        if (stack[stack.length - 1] == bracketsConfig[j][0]){
          stack.pop();
        }
        else{
          return false;
        }
      }
    }

  }

  if (stack.length != 0){
    return false;
  }
  return true;

}

console.log(check('()', [['(', ')']]));

