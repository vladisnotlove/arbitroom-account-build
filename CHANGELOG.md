# CHANGELOG

## [6.1.0]

### Добавлено

- Баннер с промо
- Слайдер с банерами событий
  
### Изменено

- Перемещен выбор языка в боковом меню для мобильных устройств


## [6.0.0]

### Добавлено
- Вкладка "Мероприятия"
- Страница с одним мероприятием (4 примера такой страницы)
- *ВАЖНО*: media-viewer, с помощью которого можно просматривать все `img` елементы с атрибутом `data-viewable`. Такие элементы можно добавлять динамически после загрузки страницы, они тоже будут просматриваться. 
- *ВАЖНО*: Добавил точку у вкладки. Чтобы она отобразилась, надо элементу с классом `tab` добавить класс `new`

### Изменено
- *ВАЖНО*: Оптимизировал bundle.js
  - Убрал jquery и video.js из bundle. Теперь они скачиваются отдельными скриптами (их можно найти в html под комментарием *vendor*)
  - Убрал chart.js из bundle
- *ВАЖНО*: Поменял структуру проекта:
  - Перенес все файлы связанные с версткой  в `/_layout-assets`. Следовательно, поменял ссылки в html c `img/` на `_layout-assets/img/` и тоже самое для css и js
  - Все ссылки сделал абсолютными. Вместо `src="_layout-assets/...` теперь `src="/_layout-assets/...`
  - Разделил index.html на страницы
  - Страница теперь это папка, внутри которой index.html

## [5.0.0]

### Добавлено

- Вкладка с обучением
- *ВАЖНО*: Добавлен видеоплейер id="videoPlayer". В нем можно добавить class "open", чтобы открыть, и `data-src=<video-url>`
- *ВАЖНО*: Добавлена логика открытия видеоплейера по клику на элемент. Реализуются с помощью `data-video-trigger=<video-url>` и также важно добавить `data-video-triggers-container` у контейнера, в котором находятся элементы с `data-video-trigger`. 

  ```html
  <!-- аттрибут для контейнера -->
  <div
      class="learn-section__lessons"
      data-drag-scroll-content
      data-video-triggers-container
  > 
      <div class="learn-section__lesson">
          <div class="learn-section__lesson-poster">
              <img class="learn-section__lesson-poster-img" src="/_layout-assets/img/transparent.png" alt="">
              
              <!-- аттрибут для самого триггера -->
              <div 
                  class="learn-section__lesson-play" 
                  data-video-trigger="video/lesson.mp4"
              >
              ...
              </div>
          </div>
          <div class="learn-section__lesson-title" title="Урок №1. Что такое нейросеть">...</div>
      </div>
    ...
  </div>
  ```

### Изменено

- *ВАЖНО*: Изменена логика "tab" и "tab__content". Добавил им аттрибут `data-key`, чтобы различать их не просто по порядковому номеру. Например:

    ````html
    <!-- вместо -->
    <div class="tab">...</div>
    <!-- теперь -->
    <div class="tab" data-key="balance">...</div>
    
    
    <!-- вместо -->
    <div class="tab-content">...</div>
    <!-- теперь -->
    <div class="tab-content" data-key="balance">...</div>
    ````

- *ВАЖНО*: Изменена логика "to-tab". Аттрибут `data-to-tab-index` заменен на `data-to-tab-key`. Например:

    ````html
    <!-- вместо -->
    <button class="button text to-tab" data-to-tab-index="8">Все операции</button>
    <!-- теперь -->
    <button class="button text to-tab" data-to-tab-key="operations">Все операции</button>
    ````
