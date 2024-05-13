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

  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  var passwordConfirm = document.getElementById('password2').value;
  var checkbox = document.getElementById('confirm').checked;
  var gender = document.getElementById('gender').value;

  // Проверка заполнения всех обязательных полей
  if (!name || !password || !passwordConfirm) {
    event.preventDefault();
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
    event.preventDefault();
    alert('Пожалуйста, подтвердите согласие с условиями.');
    return false;
  }

  event.preventDefault();

 // Показываем всплывающее сообщение об успешной отправке
 var div = document.createElement('div');
 div.className = "alert";
 div.innerHTML = 'Данные успешно отправлены!';
 myForm.append(div);

 // Устанавливаем таймер для скрытия всплывающего сообщения через 3 секунды
 setTimeout(function() {
 div.remove();
 }, 3000);

// Отображаем данные на странице
var result = document.getElementById('result');
result.innerHTML = '<h3>Отправленные данные:</h3>' + '<p>Имя пользователя: ' + name + '</p>' +
'<p>Пароль: ' + password + '</p>' + '<p>Пол: ' + gender + '</p>';
});

