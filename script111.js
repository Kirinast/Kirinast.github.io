

var index = 0;
function moveSlide(step) {
  var slides = document.querySelectorAll('.slide');
  slides[index].classList.remove('active');
  index = (index + step + slides.length) % slides.length;
  slides[index].classList.add('active');
}
// Инициализация первого слайда при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  moveSlide(0);
});


// // Создание нового квадрата
// function createSquare() {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   document.body.appendChild(square);
//   const randomTilt = () => `${Math.random() * 50 - 10}deg`; // случайный поворот квадрата
//   square.style.transform = `rotate(${randomTilt()})`;


//   // Установка случайного начального положения на левой стороне экрана
//   square.style.left = Math.random() * 50 + 'px'; // от 0 до 50px
// }

// // Создание нового квадрата каждые 2 секунды
// //setInterval(createSquare, 2000);


document.addEventListener("DOMContentLoaded", function() {
  const squareContainer = document.getElementById('squareContainer');
  const startButton = document.getElementById('startButton');
  let squareCount = 0;
  const maxSquares = 10; // Максимальное количество квадратов на странице

  startButton.addEventListener('click', function() {
      setInterval(function() {
          if (squareCount < maxSquares) {
              const newSquare = document.createElement('div');
              newSquare.classList.add('square');
              const randomSize = Math.floor(Math.random() * 150) + 50;
              newSquare.style.width = `${randomSize}px`;
              newSquare.style.height = `${randomSize}px`;
              squareContainer.appendChild(newSquare);
              squareCount++;
          } else {
              const squares = document.querySelectorAll('.square');
              if (squares.length > 0) {
                  squareContainer.removeChild(squares[0]);
                  squareCount--;
              }
          }
      }, 2000); // Интервал создания/удаления квадратов каждые 2 секунды
  });
});