https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/arrow-functions-basics#perepishite-s-ispolzovaniem-funktsii-strelki

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );