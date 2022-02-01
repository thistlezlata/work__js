https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/number#vvod-chislovogo-znacheniya

function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);