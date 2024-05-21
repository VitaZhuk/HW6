// Обработка события клика на иконку глаза, для переключения видимости пароля
const togglePassword=document.querySelector('#togglePassword');
const password=document.querySelector('#password');

togglePassword.addEventListener('click', function (elem) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye');
});


// Обращение к форме и отправка формы, в случае ее валидности
const myForm = document.forms['form'];
myForm.addEventListener('submit', function(event){
  event.preventDefault();

  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var passwordConfirm = document.getElementById('password2').value;
  var checkbox = document.getElementById('confirm').checked;
  var gender = document.getElementById('gender').value;

  // Проверка заполнения всех обязательных полей
  if (!name || !password || !passwordConfirm) {
    alert('Пожалуйста, заполните все обязательные поля.');
    return false;
  }
  console.log(name, password);

  // Проверка совпадения пароля и подтверждения
  if (password !== passwordConfirm) {
    alert('Пароли не совпадают.');
    return false;
  }

  // Проверка отметки чекбокса
  if (!checkbox) {
    alert('Пожалуйста, подтвердите согласие с условиями.');
    return false;
  }

 // Показываем всплывающее сообщение об успешной отправке
 var div = document.createElement('div');
 div.className = "alert";
 div.innerHTML = 'Данные успешно отправлены!';
 myForm.append(div);

 // Устанавливаем таймер для скрытия всплывающего сообщения через 3 секунды
 setTimeout(function() {
 div.remove();
 }, 3000);

// Отображаем данные на странице (к предыдущему ДЗ)
// var result = document.getElementById('result');
// result.innerHTML = '<h3>Отправленные данные:</h3>' + '<p>Имя пользователя: ' + name + '</p>' +
// '<p>Пароль: ' + password + '</p>' + '<p>Пол: ' + gender + '</p>';




// Сохранение данных пользователя в localStorage(пробный вариант был)
// const user = {
//   name: document.getElementById('name').value,
//   password: document.getElementById('password').value,
//   gender: document.getElementById('gender').value
//  };
 
//  localStorage.setItem('user', JSON.stringify(user));



// Сохранение данных пользователя в localStorage (Шаг 1)
localStorage.setItem('user', JSON.stringify({ name, password, gender }));

// Отображение данных из localStorage
 window.onload = function() {
  const savedUser = localStorage.getItem('user');
  if (savedUser) {
     displayUser(JSON.parse(savedUser));
  }
 };

// Запуск и добавление счетчика обратного отсчета
startCountdown();
function startCountdown() {
  let seconds = 5;
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = seconds;
  const countdownInterval = setInterval(() => {
      seconds--;
      countdownElement.textContent = seconds;
      if (seconds <0) {
          clearInterval(countdownInterval);
          countdownElement.textContent = '';
          displayUser(JSON.parse(localStorage.getItem('user')));
      }
  },1000);
}

// Функция для отображение данных пользователя
function displayUser(user) {
  const result = document.getElementById('result');
  result.innerHTML = `
  <p>Имя пользователя: ${user.name}</p>
  <p>Пароль: ${user.password}</p>
  <p>Пол: ${user.gender}</p>`;
 }
});

