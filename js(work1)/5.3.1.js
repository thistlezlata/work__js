https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/string#sdelat-pervyy-simvol-zaglavnym

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("вася") );