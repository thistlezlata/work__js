https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/array#summa-vvedyonnyh-chisel

function sumInput() {

    let numbers = []; //Создаем массив
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );