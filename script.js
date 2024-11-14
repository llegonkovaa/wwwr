// Функция для открытия формы обратной связи
function openFeedbackForm(productName) {
    document.getElementById('product-name').value = productName; // Устанавливаем название товара
    document.getElementById('feedback-form').style.display = 'flex'; // Показываем форму
}

// Функция для закрытия формы обратной связи
function closeFeedbackForm() {
    document.getElementById('feedback-form').style.display = 'none'; // Скрываем форму
}

// Обработка отправки формы
document.getElementById('form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения полей
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Переменная для отслеживания ошибок
    let errors = [];

    // Проверка на пустые поля
    if (name === "") {
        errors.push("Имя не может быть пустым.");
    }
    if (email === "") {
        errors.push("Email не может быть пустым.");
    } else if (!validateEmail(email)) {
        errors.push("Введите корректный Email.");
    }
    if (message === "") {
        errors.push("Сообщение не может быть пустым.");
    }

    // Если есть ошибки, выводим их
    if (errors.length > 0) {
        alert(errors.join("\n")); // Выводим все ошибки в виде списка
    } else {
        // Здесь можно добавить код для отправки данных на сервер
        // Эмуляция отправки данных
        alert('Спасибо за вашу обратную связь!'); // Сообщение об успешной отправке
        closeFeedbackForm(); // Закрываем форму
    }
});

// Функция для валидации Email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки Email
    return re.test(String(email).toLowerCase());
}