<pre>
    &lt;div data-tooltip data-offset="10" data-pos="right" data-event="click" data-modclass="Модификатор класса" data-text="Text"&gt;&lt;/div&gt;
</pre>
<p>
    <b>По умолчанию:</b><br>
    modClass: ''<br>
    offset: 5<br>
    close: true<br>
    position: 'top'<br>
</p>
<p>
    Можно создать отдельный экземпляр тултипа
</p>
<pre>
    var tooltip = new Tooltip('tooltip');   // например, 'tooltip' - название класса тултипа
    tooltip.init(element, {                 // инициализация, element - тег, по координатам которого выведем тултип
        modClass: '',                       // класс модификатор, если нужно изменить внешний вид
        offset: 5,                          // смещение относительно элемента
        close: true,                        // кнопка закрытия по умолчанию выводится
        position: 'top'                     // по умолчанию выводится сверху
    });
    tooltip.html('text');                   // текст, который надо вывести
    tooltip.show();                         // принудительно показываем на странице тултип
    tooltip.update();                       // обновляем координаты, если вдруг вставили новый текст
    tooltip.close();                        // закрываем тултип
</pre>
<p>
    Пример кода на четвертой кнопке
</p>
<pre>
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
</pre>