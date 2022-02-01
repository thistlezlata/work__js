https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/function-basics#funktsiya-pow-x-n

function pow(x, n) {
    let sar = x;
  
    for (let i = 1; i < n; i++) {
      sar *= x;
    }
  
    return sar;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }