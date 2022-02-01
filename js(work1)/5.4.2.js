https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/array#operatsii-s-massivami

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");