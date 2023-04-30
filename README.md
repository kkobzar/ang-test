# TestTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ТЗ:
[Ссылка API](https://api.crm.xonis.net/api/json/example/task/contactCards)
Для получение информации используйте GET запрос. В параметрах запроса необходимо указать token.
Ваш токен f0aef93c624599e8886290dcd85d640bdeb608cf-f8d7a20dd83e63817b3fddc1aac022dd-1682681241

Проект должен быть написан на AngularJS. Документацию можете посмотреть в интернете. Необходимо сделать простую страницу с контактами. Контакты нужно получить с помощью запроса на backend. Вид и дизайн необходимо придумать самостоятельно.

Для использования AngularJS необходимо установить nodeJS версии 18.14, а также AngularCLI версии 15.1.4+

В ответе будет JSON тело с массивом contacts в формате:
```
"contacts": [
  {
    "id": 1,
    "firstname": "Nick",
    "lastname": null,
    "age": 24,
    "phone": null,
    "email": "nick@xonis.net",
    "isOnline": false,
    "balance": 1
  }
]
```
А также total с числом контактов. При каждом запросе количество контактов будет случайным от 3х до 17 контактов.
Использование всех данных не обязательно, а также есть возможность использование дополнительной информации с интернета, либо написанной самостоятельно.
При указании дополнительных данных стоит учитывать, что данные должны быть разные для пользователей.
Данными могут быть логотип профиля, жанр музыки, любимый цвет и т.д

Дизайн страницы полностью свободен и должен быть выполнен в Figma, Photoshop, либо подобных приложениях.

Разрешено использование Bootstrap

Для запросов возможно использование ajax из библиотеки JQuery (Как пример решения)

Финальный вид не должен быть отзывчивым под все устройства. Достаточно десктопной версии 1920х1080

Финальный проект необходимо собрать с помощью команды ng build и отправить файлы всей директории
