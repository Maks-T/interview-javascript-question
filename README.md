# interview-javascript-question

---

## Общие вопросы Javascript

### 1. Типы данных в JavaScript?

На данный момент в JavaScript существует 8-мь основных типов данных:

1. `String` - строка.
2. `Number` - число (как целочисленные так и с плавающей запятой)
3. `BigInt` - число не ограниченной величины. Идентификатор BigInt это `n` на конце числа.
4. `Boolean` - булевое число, то есть `false` или `true`.
5. `Symbol` - используется для создания уникальных идентификаторов
6. `null` - специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
7. `undefined`- специальное значение, означающее, что «значение не было присвоено».
8. `Object` - это сложный тип данных, который позволяет нам хранить коллекции данных.

### 2. Разница между == и === (нестрогое/строгое равенство)?

Нестрогое просто сравнивание просто сравнивает значение. Нестрогое дополнительно сравнивает их типы.

### 3. Разница между function declaration и function expression?

`Function declaration` - Это функция созданная в основном потоке кода.
Для начала нужно указать ключевое слово `function`. Затем имя функции. В круглых скобках указывает ее аргументы, а фигурных скобах описываем ее логику.
`Function Expression` – объявление функции в контексте какого-либо выражения, например присваивания.

**Основное отличие между ними: функции, объявленные как `Function Declaration`, создаются интерпретатором до выполнения кода.**
Поэтому ее можно спокойно вызвать до объявления, и это не вызовет ошибку. Происходит это благодаря механизму который называется `hoisting` или всплытие.

### 4.Разница между null и undefined?

Оба значения означают отсутствующие данные, только `undefined` представляет собой значение по умолчанию для:

- переменной которой еще не было присвоено никого другого значения.
- функций, которая ничего не возвращает явно.
- несуществующего свойства объекта.

Если обобщить, то данное значение присваивается интерпретатором в момент выполнения скрипта.
Что же касается `null` - это явное задание отсутствующего значения, то есть когда разработчик самостоятельно определяет отсутствие каких либо данных.

### 5. Операторы «И» и «ИЛИ» (&& и ||)?

### 6. Операторы «И» и «ИЛИ» (&& и ||)?

`Hoisting` - это механизм поднятия функций или переменных в глобальную или функциональную область видимости. Это особенность движка Javascript. К переменным объявленным через `var`, а также к функциям `function declaration` можно получить доступ еще до объявления значения.

### 7. Что такое область видимости (Scope)?

Это место откуда мы имеем доступ к переменным или функциям.
В Javascript есть три вида областей видимости:

- Глобальная - переменные и функции объявленные в этой области становятся глобальными. Появляются в глобальном пространстве имен и доступны они из любого места в коде.
- Функциональная или локальная - переменные и функции объявленные внутри функции, доступны только этой функции и всем вложенным в нее функциям.
- Блочная - для переменных объявленных c помощью `let` и `const`. Такая область видимости находится внутри фигурных скобок. Переменные объявленные через `var` на такую область видимости не реагируют.

### 8. Разница между var, let и const?

- Переменные объявленные через `var` всплывают. Это значит, что если мы обратимся к переменной до момента ее инициализации, то получим просто `undefined`. В случае же с `let` и `const` мы получим ошибки.
- У них есть разные области видимости `let` и `const` ограничена блоком, а не функцией.
- Переменные объявленные через `const` невозможно переопределить.

### 9. Что такое замыкание (Closure)?

Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание даёт вам доступ к Scope (en-US) внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при создании функции, во время её создания.

### 10. Что такое Лексическое окружение (LexicalEnvironment)?

https://www.youtube.com/watch?v=GkmoRy0Kv14

В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.

Объект лексического окружения состоит из двух частей:

Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).

Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

"Переменная" – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».

**Один вызов – одно лексическое окружение**
Пожалуйста, обратите внимание, что новое лексическое окружение функции создаётся каждый раз, когда функция выполняется.

И, если функция вызывается несколько раз, то для каждого вызова будет своё лексическое окружение, со своими, специфичными для этого вызова, локальными переменными и параметрами.

### 11. Что обозначает this в JavaScript?

- **В глобальном контексте выполнения** (за пределами каких-либо функций) this ссылается на глобальный объект вне зависимости от режима (строгий или нестрогий).
- **В пределах функции** значение this зависит от того, каким образом вызвана функция:
  - в методах `this` ссылается на вызывающий его объект.
  - вне объекта `this` всегда ссылается на глобальны объект в обычном режиме и является `undefined` в строгом режиме.
  - в стрелочных функциях `this` ссылается на this внешней "нормальной функции"
