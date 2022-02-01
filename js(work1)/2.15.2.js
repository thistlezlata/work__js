https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/function-basics#perepishite-funktsiyu-ispolzuya-operator-ili

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }
  
  function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }