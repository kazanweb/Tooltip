$(document).ready(function() {

	/**
	 * описание тултипа:
	 * можем сделать один глобальный тултип, например window.tooltip = new Tooltip('tooltip'); , 'tooltip' - можем задать название класса тултипа, если вдруг придется сделать еще извращенный тултип.
	 * Использовать глобальный один объект и через него только выводить тултипы, если на странице есть тултипы, заданные через тег, то они
	 * <div data-tooltip data-offset="10" data-pos="right" data-event="click" data-text="Text"></div> живут отдельно своей жизнью и нас не касаются.
	 * Можно задать отдельные тултипы, загоняя их в переменные var tooltip1, tooltip2, ......, и у каждого будут свои методы и будут жить так же
	 * сами по себе
	 * Теперь сами методы
	 * var tooltip = new Tooltip('tooltip'); создали тултип
	 * tooltip.init(element, opts); инициализация, element - тег, по координатам которого выведем,
	 * opts опции:
	 *  {offset: 10, position: 'right', close: true} offset - смещение, относительно тега, position - с какой стороны выводим тег
	 *  close - true, кнопка закрытия есть, false - нет
	 *
	 * tooltip.html('text'); - текст, который надо вывести
	 * tooltip.show(); - принудительно показываем на странице тултип
	 * tooltip.update(); - обновляем координаты, если вдруг вставили новый текст
	 * tooltip.close(); - закрываем тултип
	 */

    var tooltip = new Tooltip('tooltip');

	tooltip
		.init(document.querySelector('[data-tooltip2]'), {
			modClass: 'tooltip_mod4',
			position: 'right',
			offset: 10,
			close: true
		})
		.html('Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem')
		.show();

    setTimeout(function () {

        tooltip
            .html('Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem')
            .updatePosition();

    }, 2000);

    setTimeout(function () {

        tooltip.close();

        setTimeout(function() {

        	tooltip.show();

        }, 2000);

    }, 4000);

});