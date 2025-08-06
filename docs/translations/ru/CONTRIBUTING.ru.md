# Шаги для участия

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## Сделайте форк этого репозитория, нажав кнопку **Fork**

## Клонируйте свой форк репозитория

В вашем форке нажмите кнопку **Code**. Выберите вкладку **SSH**, затем нажмите кнопку `copy to clipboard`.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />
Откройте терминал и выполните команду `git clone`:

```bash
git clone "url, который вы скопировали"
```

> [!ВНИМАНИЕ]
> В следующих шагах, когда вы видите `<your-github-id>`, замените это на ваш GitHub ID.  
> Например, если ваш GitHub ID — `aaronsw`,  
> `git switch -c add-<your-github-id>` превращается в `git switch -c add-aaronsw`  
> `contributors/<your-github-id>.html` становится `contributors/aaronsw.html`

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

## Создайте ветку

Перейдите в директорию репозитория, если вы ещё не в ней:

```bash
cd code-contributions
```

Создайте ветку с помощью команды `git switch`:

```bash
git switch -c add-<your-github-id>
```

## Создайте вашу карточку

Вы можете добавить карточку в виде HTML-файла в директорию `contributors`. Создайте файл с вашим именем пользователя в этой директории. Вы можете использовать шаблон ниже:

`contributors/<your-github-id>.html`

```html
<article>
  <h3>Ваше имя пользователя</h3>
  <p>Краткая информация о вас (необязательно)</p>
  <h4>Языки программирования, которые я использую</h4>
  <section class="container">
    <div class="badge" style="background-color: #3874a4; color: white">
      Python
    </div>
    <div class="badge" style="background-color: #f7df1e; color: black;">
      JavaScript
    </div>
  </section>

  <h4>Инструменты, которые я использую</h4>
  <section class="container">
    <img
      class="icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
    />
    <img
      class="icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
    />
  </section>
</article>
<style>
  body {
    font-family: sans-serif;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .badge {
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
  .icon {
    width: 2rem;
  }
</style>
```

## Добавьте свою карточку в список участников

Добавьте имя созданного файла в массив в файле `scripts/contributors.js`.

`scripts/contributors.js`

```js
const contributorFiles = [
  "<your-github-id>.html", // добавьте ваше имя файла здесь
  "roshanjossey.html",
  "gokultp.html",
];
```

## Посмотрите свои изменения в браузере

Откройте файл `index.html` в браузере, чтобы увидеть изменения. Вы должны увидеть карточку, которую добавили на предыдущем шаге.

Вы можете продолжать редактировать карточку и обновлять вкладку браузера, чтобы видеть изменения.

## Зафиксируйте изменения (commit)

Сначала добавьте изменения в индекс с помощью команды `git add`:

```bash
git add contributors/<your-github-id>.html
```

Теперь выполните коммит с описанием:

```bash
git commit -m "add <your-github-id>"
```

## Отправьте изменения в GitHub

```bash
git push -u origin add-<your-github-id>
```

## Отправьте изменения на проверку (Pull Request)

Перейдите в ваш репозиторий на GitHub — там появится кнопка `Compare & pull request`. Нажмите её.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Теперь отправьте Pull Request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Вы получите уведомление по email, как только ваши изменения будут приняты.
