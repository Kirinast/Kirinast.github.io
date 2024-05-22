
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username === "админ" && password === "A12345") || (username === "пользователь" && password === "A1cccc")) {
        alert("Вы вошли");
    } 
    else {
        document.getElementById("message").innerText = "неверный логин или пароль!";
    }
// Перенаправляем пользователя на указанную страницу
window.location.href = "file:///C:/Users/PC/Desktop/бб/polzovatel.html?";
}
