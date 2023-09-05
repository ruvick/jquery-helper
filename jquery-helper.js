// Начало работы

// jQuery
// 1) Подключить библиотеку
// 2) Проверить ее готовность
$(document).ready(fuction() {
	//Здесь пишем код
})

// Получаем элементы на странице
$('div') // Получаем все селекторы по тегу
$('#div') // Получаем один селектор по id
$('.block') // Получаем все селекторы по классу


// Работа  с классами
// Добавляем класс className для всех элементов с классом .block
$('.block').addClass('className');
// Удаляем класс className у всех элементов с классом .block
$('.block').removeClass('className');
// Удаляем/добавляем класс className для всех элементов с классом .block
$('.block').toggleClass('className');


// Обработчики событий 
// Вешаем обработчик события клик на все обьекты с классом .block
$('.block').click(fuction(e) {
	// Пишем реакцию на клик
});


// Закрытие по Esc 
$(document).keydown(function (e) {
	if (e.keyCode == 27) {
		//Здесь пишем код
		popup_close(); //Пример
		// window.close();
	}
});


// Анамировано показать блоки с классом .block
// Обращаемся к коллекции блоков. Пишем slideDown. Указываем скорость. Пишем функцию, внутри которой выполняем нужный код
$('.block').slideDown(2000, function () {
	// Код по завершению действия
	console.log('Текст показан!');
})


// При наведении скрывать-показывать блок
function hideMenu() {
	$('.headerCustomMenuDropdown').slideUp(600);
}
function showMenu() {
	$('.headerCustomMenuDropdown').slideDown(600);
}
$(".header-menu__item").on("mouseover", showMenu);
$(".headerCustom-main-part").on("mouseleave", hideMenu);


// Плавный скролл якорных ссылок
$(".menu__list").on("click", "a", function (event) {
	event.preventDefault();
	let id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({ scrollTop: top }, 1500);
});


// AJAX запрос
// Простеший ajax запрос
$.ajax({
	type: "method",
	url: "url",
	data: "data",
	dataType: "dataType",
	succes: fuction(response) {
	// Обрабатываем ответ
}
});


// Маска телефона
// Работает при подключенной библиотеке jquery.inputmask.bundle.js
var inputmask_phone = { "mask": "+9(999)999-99-99" };
jQuery("input[type=tel]").inputmask(inputmask_phone);


//Валидация телефона + Отправщик
jQuery(".form__btn").click(function (e) {

	e.preventDefault();
	let name = $(this).siblings('input[name=name]').val();
	let email = $(this).siblings('input[name=email]').val();
	let tel = $(this).siblings('input[name=tel]').val();

	if ((tel == "") || (tel.indexOf("_") > 0)) {
		$(this).siblings('input[name=tel]').css("background-color", "#ff91a4")
	} else {
		let jqXHR = jQuery.post(
			allAjax.ajaxurl,
			{
				action: 'send_work',
				nonce: allAjax.nonce,
				name: name,
				email: email,
				tel: tel,
				formsubject: jQuery(this).data("formname"),
			}
		);

		jqXHR.done(function (responce) {  //Всегда при удачной отправке переход для страницу благодарности
			document.location.href = 'http://...ru/stranicza-blagodarnosti/';
		});

		jqXHR.fail(function (responce) {
			alert("Произошла ошибка. Попробуйте позднее.");
		});
	}

});