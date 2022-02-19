## Вопросы по Angular

### 1. Что такое Angular?

Angular представляет фреймворк от компании Google, который позволяет создавать клиентские web-приложения. Прежде всего он нацелен на разработку SPA-решений (Single Page Application), то есть одностраничных приложений.

### 2. Перечислите основные компоненты фреймворка (модуль, роут, директива и т .п.). //ToDo

- Modules
- Components
- Templates
- Metadata
- Data binding
- Directives
- Services
- Dependency injection

### 3. В чем разница между компонентом и директивой?

Angular директивы используются для изменения внешнего вида или поведения DOM-элемента. Выделяют три типа директив:

С собственным шаблоном, или по-другому компоненты (компоненты являются директивами);
Структурные, которые изменяют структуру DOM-дерева;
Атрибуты, которые изменяют внешний вид или поведение по умолчанию элемента DOM-дерева.

Компонент (Angular component) - обособленная часть функционала со своей логикой, HTML-шаблоном и CSS-стилями.

### 4. Расскажите о жизненном цикле компонента.

Каждый компонент имеет свой жизненный цикл (Component Lifecycle), в процессе которого вызываются ряд описывающих текущий этап методов (Angular Hooks):

- `OnChanges` - устанавливаются или изменяются значения входных свойств класса компонента;
- `OnInit` - устанавливаются "обычные" свойства; вызывается единожды вслед за первым вызовом `OnChanges()`;
- `DoCheck`` - происходит изменения свойства или вызывается какое-либо событие;
- `AfterContentInit` - в шаблон включается контент, заключенный между тегами компонента;
- `AfterContentChecked` - аналогичен `DoCheck()`, только используется для контента, заключенного между тегами компонента;
- `AfterViewInit` - инициализируются компоненты, которые входят в шаблон текущего компонента;
- `AfterViewChecked` - аналогичен `DoCheck()`, только используется для дочерних компонентов;
- `OnDestroy` - компонент "умирает", т. е. удаляется из DOM-дерева

Первым вызывается OnChanges(), повторный вызов которого осуществляется при изменении хотя бы одного входного свойства. В качестве аргумента ему передается объект с текущим и предыдущим значениями измененных @Input() свойств.

Если входные свойства отсутствуют, то метод не будет вызван.

Следом вызывается OnInit(), который говорит о том, что инициализированы внутренние свойства компонента, в данном случае свойство company. Метод вызывается только один раз.

Третьим по счету идет DoCheck(), который отслеживает изменения, не связанные со свойствами. Его вызов осуществляется довольно часто, в ответ на каждое взаимодействие пользователя с интерфейсом (например, фокусировка поля формы или потеря фокуса).

Далее инициализируются шаблоны. Сначала подгружается контент, находящийся между тегами компонента. За это отвечает ngAfterContentInit().

### 5. В чем разница между конструктором и ngOnInit-хуком?

Конструктор класса в Angular почти всегда используется для вставки зависимостей.

когда Angular вызывает ngOnInit, он уже построил DOM компонента, вставил все необходимые зависимости через конструктор и обработал назначения входных данных. Здесь хранится все необходимая информация, что делает этот метод подходящим местом для выполнения логики инициализации.

### 6. Как защитить роут от несанкционированного доступа? Какие механизмы предоставляет для этого фреймворк?

https://angdev.ru/doc/angular-routing-guards/

Route Guards позволяют ограничить доступ к маршрутам на основе определенного условия, например, только авторизованные пользователи с определенным набором прав могут просматривать страницу.

Также можно перед переходом на другой URL предупредить пользователя, что все его несохраненные изменения на текущей странице будут потеряны.

### 7. Что такое Lazy loading, как и для чего используется?

https://angdev.ru/doc/angular-asynchronous-routing/

С ростом приложения увеличивается количество его модулей и общее время его загрузки. Для оптимизации скорости работы приложения можно применить асинхронную (lazy load) маршрутизацию.

Асинхронная загрузка позволяет загружать модули в момент обращения пользователя к одному из его маршрутов или загружать только те, которые доступны пользователю в зависимости от его прав.

Для отложенной загрузки необходимо задать свойство маршрута loadChildren в модуле родителе в следующем формате:

```js

{path: 'order', loadChildren: './modules/order/order.module#OrderModule'}

```

### 8. Какое назначение ?RouterOutlet

Компоненты, на которые указывает Angular routing, подгружаются в место, где указана директива

`<router-outlet></router-outlet>`

### 9. Как компоненты могут взаимодействовать друг с другом?

1. Родитель ребенку: Обмен данными через `Input()`

Это, вероятно, самый распространенный и простой способ обмена данными. Он работает с использованием декоратора `@Input()`, позволяющего передавать данные через шаблон.

**parent.component.ts**

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: ` <app-child [childMessage]="parentMessage"></app-child> `,
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentMessage = 'message from parent';
  constructor() {}
}
```

**child.component.ts**

```js
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` Say {{ message }} `,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() childMessage: string;
  constructor() {}
}
```

2. Ребенок родителю: Обмен данными через Просмотр `ViewChild()`

`ViewChild` позволяет вводить один компонент в другой, предоставляя родительскому компоненту доступ к его атрибутам и функциям.

**parent.component.ts**

```js
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{ message }}
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child;

  constructor() {}
  message: string;

  ngAfterViewInit() {
    this.message = this.child.message;
  }
}
```

**child.component.ts**

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ``,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  message = 'Hola Mundo!';
  constructor() {}
}
```

Ребенок к родителю: Обмен данными через `Output()` и `EventEmitter()`

Этот подход идеален, когда вы хотите поделиться изменениями данных, которые происходят при таких вещах, как нажатие кнопок, ввод форм и другие пользовательские события.

В родительском мы создаем функцию для получения сообщения и устанавливаем ее равной переменной `message`.

В дочернем элементе мы объявляем переменную события сообщения с помощью декоратора `@Output()` и устанавливаем ее равной новому источнику события. Затем мы создаем функцию с именем `SendMessage`, которая вызывает `emit` для этого события с сообщением, которое мы хотим отправить. Наконец, мы создаем кнопку для запуска этой функции.

Теперь родитель может подписаться на это событие `MessageEvent`, которое выводится дочерним компонентом, а затем запускать функцию приема сообщений всякий раз, когда происходит это событие.

**parent.component.ts**

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{ message }}
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  constructor() {}
  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
```

**child.component.ts**

```js
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Hola Mundo!"
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
```

4. Несвязанные компоненты: Обмен данными с помощью сервисов

При передаче данных между компонентами, у которых отсутствует прямое соединение, такими как братья и сестры, внуки и т.д., вам следует использовать общую службу. Когда у вас есть данные, которые всегда должны быть синхронизированы, поведение `RxJS` очень полезно в этой ситуации.

Вы также можете использовать обычный `RxJS Subject` для обмена данными через сервис, но вот почему я предпочитаю тему поведения.

Он всегда будет возвращать текущее значение при подписке - нет необходимости вызывать onnext
В нем есть функция `GetValue()` для извлечения последнего значения в виде необработанных данных.
Это гарантирует, что компонент всегда получает самые последние данные.
В сервисе мы создаем частный объект `BehaviorSubject`, который будет содержать текущее значение сообщения. Мы определяем переменную currentMessage, обрабатывающую этот поток данных как наблюдаемый, который будет использоваться компонентами. Наконец, мы создаем функцию, которая вызывает следующий объект `BehaviorSubject`, чтобы изменить его значение.

Компоненты родителя, ребенка и брата получают одинаковое лечение. Мы вводим службу данных в конструктор, затем подписываемся на наблюдаемое значение currentMessage и устанавливаем его значение равным переменной message.

Теперь, если мы создадим функцию в любом из этих компонентов, которая изменит значение сообщения. когда эта функция выполняется, новые данные автоматически передаются всем остальным компонентам.

**data.service.ts**

```js
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
```

**parent.component.ts**

```js
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
  `,
  styleUrls: ['./sibling.component.css']
})
export class ParentComponent implements OnInit {

  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
```

**sibling.component.ts**

```js
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-sibling',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message:string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}
```

### 10. Как создать two-way binding свойство для компонента?

При двусторонней привязке данных переменные класса и шаблон поддерживают друг друга в актуальном состоянии. Это достигается с помощью [()].

Двусторонняя привязка данных в основном используется в формах и при работе с входными данными. Пользовательский ввод должен быть извлечен из DOM и сохранен в свойстве класса перед использованием.

```js
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message: string = 'Hello World!';
}
```

```html
<h2>Two-way Binding Example</h2>
<input [(ngModel)]="message" />
<p>{{message}}</p>
```

### 11. Какие типы форм у фреймворка? В каких случаях и что лучше использовать?

### 12. Какие состояния у формы и как это можно применить?

### 13. Зачем нужны сервисы? Как с ними работать?

### 14. Что такое singleton-сервисы? Каково их назначение? Способ создания?

### 15. Какие есть способы объявления сервисов?

### 16. Для чего нужны модули? Сколько их должно быть в проекте?

### 17. 81. Какая разница между интерфейсом и классом?

### 19. 82. В чем разница между интерфейсом и абстрактным классом?

### 20. 83. Какая разница между интерфейсом и типом?

### 21. 84. Что такое RxJS? Как он используется во фреймворке? Какие компоненты фреймворка тесно связаны с ним?

### 22. 85. Чем отличаются Observable и Promise?

### 23. 86. Для чего нужны Subjects? Какие типы Subjects существуют?

### 24. Как сделать несколько последовательных запросов к API с помощью HTTP-сервиса и RxJS?

### 25. Какая разница между switchMap, concatMap, mergeMap?

### 26. Как можно конфигурировать Angular-приложение?

### 27. Зачем нужны environment-файлы? Когда их лучше не использовать?

### 28. В чем разница между «умным» (smart) и «глупым» (dumb) компонентами? В каких случаях применяется каждый из них?

### 29. В чем разница между NgForm, FormGroup и FormControl и как их применяют для построения форм?

### 30. Зачем нужен и как работает async pipe?
