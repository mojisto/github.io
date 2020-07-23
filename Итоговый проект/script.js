let phrases = [
  { text: '«Император демонстративно ушёл с премьеры оперы Глинки»' },
  { text: '«Прокофьев придумал особый вид шахмат»' },
  { text: '«Скрябин - создатель светомузыки»' },
  { text: '«Чайковского удостоили звания доктора музыки без защиты»' },
  { text: '«Римский-Корсаков умер из-за своей оперы»' },
  { text: '«Композитор Бородин основал Русское химическое общество»' },
  { text: '«Руки Сергея Рахманинова оценили в миллион долларов»' },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text);
});