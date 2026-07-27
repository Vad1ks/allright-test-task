# AllRight Playwright Test Task

End-to-end Playwright test automation for the AllRight registration quiz.

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

```bash
npm ci
npx playwright install
```

## Run tests

```bash
npx playwright test
```

Run the test interactively:

```bash
npx playwright test --headed
```

Run a single spec:

```bash
npx playwright test tests/registration-quiz.spec.ts
```

## Reports

After a test run, open the HTML report with:

```bash
npx playwright show-report
```

## Project structure

- `tests/registration-quiz.spec.ts` — registration-quiz end-to-end test.
- `src/core/QuizRunner.ts` — orchestrates the quiz flow.
- `src/steps/` — page-step implementations for individual quiz questions.
- `playwright.config.ts` — Playwright configuration; tests run in Chromium against the staging registration page.
- `.github/workflows/playwright.yml` — GitHub Actions workflow that runs tests and uploads the HTML report.

## Що робив би далі
- Реалізував би очищення середовища від створених заявок (шаблон у файлі з тестом є, але я не знайшов способу видаляти заявки).
- Для деяких елементів попросив би додати test-id бо довелось використовувати пошук з використанням тексту елементу. Я помітив що сайт доступний кількома мовами, тож краще не використовувати хардкод текст для пошуку.
- Для інпутів я би реалізував окремий компонент для того щоб можна було виконувати негативні перевірки (валідації, пусте поле) прямо всередині компоненту. Щоб локатором компонента посилатись на батьківський блок, який містить в собі блок з валідаційним повідомленням та самим інпутом.
- Робив би кейси для конкретних аб варіантів, тобто щоб ранити тести на експериментальних варіантах та бути певними що всі критично важливі варіанти коректно працюють. Тут маю на увазі запускати тест кейси з примусовим вибором конкретних експериментальних варіантів (localstorage, url params).
- У GitHub Actions перевірка на код +380 в полі телефону виявилася ненадійною, оскільки сайт визначає країну за IP адресою runner'а, через що може підставлятися +1. Треба зробити інший вейтер на стабілізацію інпуту номера телефона.