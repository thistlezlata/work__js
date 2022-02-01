https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/object#proverka-na-pustotu

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }