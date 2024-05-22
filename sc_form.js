// Функция для проверки пароля
function checkPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        alert("Пароли не совпадают");
        return false;
    }
    if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
        alert("Пароль должен содержать хотя бы одну заглавную букву и одну цифру");
        return false;
    }
    return true;
}

// Обработчик события отправки формы
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем отправку формы

    // Проверяем поля формы
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const patronymic = document.getElementById("patronymic").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const passportSeries = document.getElementById("passport-series").value;
    const passportNumber = document.getElementById("passport-number").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Проверяем пароль
    if (!checkPassword(password, confirmPassword)) {
        return; // Если пароль не прошел проверку, прерываем выполнение
    }

    // Проверяем остальные поля
    if (!/^[a-zа-яё\s]+$/i.test(name) || !/^[a-zа-яё\s]+$/i.test(surname) || !/^[a-zа-яё\s]+$/i.test(patronymic)) {
        alert("Имя, фамилия и отчество должны состоять только из букв и пробелов");
        return;
    }
    if (!/^\d{10,15}$/.test(phone)) {
        alert("Номер телефона должен состоять только из цифр и быть от 10 до 15 символов");
        return;
    }
    if (!/^\w+@\w+\.\w+$/.test(email)) {
        alert("Неверный формат электронной почты");
        return;
    }
    if (!/^\d{4}$/.test(passportSeries) || !/^\d{6}$/.test(passportNumber)) {
        alert("Неверный формат серии и номера паспорта");
        return;
    }

    // Если все поля прошли проверку, сохраняем данные аккаунта в localStorage
localStorage.setItem("username", name);
    // Если все поля прошли проверку, сохраняем данные аккаунта в localStorage
localStorage.setItem("username", name);
alert("Вы зарегестрированы!");
// Перенаправляем пользователя на указанную страницу
window.location.href = "file:///C:/Users/PC/Desktop/бб/polzovatel.html?";

});