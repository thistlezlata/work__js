https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/object#summa-svoystv-obekta

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum = sum + salaries[key];
  }
  
  alert(sum);