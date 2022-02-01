https://plnkr.co/edit/TjrMvn0S9gZufot4?preview
https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth

function camelize(str) {
    return str
      .split('-')
      .map(
        
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }