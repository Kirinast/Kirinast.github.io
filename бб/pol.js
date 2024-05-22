  // Создание нового квадрата
function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.appendChild(square);
    const randomTilt = () => `${Math.random() * 50 - 10}deg`; // случайный поворот квадрата
    square.style.transform = `rotate(${randomTilt()})`;
  
  
    // Установка случайного начального положения на левой стороне экрана
    square.style.left = Math.random() * 50 + 'px'; // от 0 до 50px
  }
  
  // Создание нового квадрата каждые 2 секунды
//   setInterval(createSquare, 2000); 