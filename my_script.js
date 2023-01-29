// Прислать решение "форума": на странице есть поле ввода
// заголовка, имени и тела сообщения. Кнопка "сохранить"
// должна приписывать к треду сообщений ваши

const save = () => {
	var title = document.getElementById('text').value;
    var user_name = document.getElementById('name').value;
    var comment = document.getElementById('user_comments').value; 
	document.getElementById('user_text').innerHTML = '<b>Тема:</b>'+ '<br>' + title + 
    '<br>' + '<br>' +'<b>Имя:</b>'+'<br>'+ user_name + 
    '<br>'+ '<br>' +'<b>Коментарий:</b>'+ '<br>' + comment;
}