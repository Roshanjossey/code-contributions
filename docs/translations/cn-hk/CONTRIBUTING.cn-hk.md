# 提交的步驟

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## 點擊Fork按鈕来Fork這個程式碼倉庫（repo）

## Clone（克隆）你對這個專案的Fork

在你對這個專案的Fork倉庫中 , 點擊code按鈕。選擇SSH項然後點擊 `copy to clipboard` 按鈕。

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />
打開一個終端然後運行 `git clone` 命令

```bash
git clone "url you copied"
```

> [!IMPORTANT]
> 在以下步驟當中，当你看見 `<your-github-id>` 的时候，你應該用你的GitHub ID代替它。
>
> 举个例子，如果你的GitHub ID 是  `aaronsw`,  
> `git switch -c add-<your-github-id>`實際上就應該是`git switch -c add-aaronsw`  
> `contributors/<your-github-id>.html` 實際上是 `contributors/aaronsw.html`
>
> 

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

## 創建一個分支（branch）

如果當前不在程式碼倉庫路徑下的话，請移動到那裡。

```bash
cd code-contributions
```

用 `git switch` 命令創建一個分支

```bash
git switch -c add-<your-github-id>
```


## 創建屬於你自己的卡片

在提交者目录下，你可以以HTML檔案的形式添加你的卡片。在提交者目錄中用你的使用者名創建一個檔案。為了方便你開始，你可以複製下面的網頁範本。

`contributors/<your-github-id>.html`
```html
<article>
  <h3>Your username</h3>
  <p>A small bio about you (optional)</p>
  <h4>Programming languages I use</h4>
  <section class="container">
    <div class="badge" style="background-color: #3874a4; color: white">
      Python
    </div>
    <div class="badge" style="background-color: #f7df1e; color: black;">
      JavaScript
    </div>
  </section>

  <h4>Tools I use</h4>
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
## 在貢獻者清單裡添加屬於你的卡片

把你創建的檔案的名字添加到  `scripts/load-cards.js` 檔案。

`scripts/load-cards.js`
```js
const contributorFiles = [
  "<your-github-id>.html", // add your file name here
  "roshanjossey.html",
  "gokultp.html",
];
```

## 在一個網頁瀏覽器裡看你帶來的變化

你可以在一個瀏覽器裡打開`index.html` 檔案来查看你帶來的變化。 你應該可以看見你在前幾個步驟中添加的卡片。

你可以繼續在你的卡片上做出改變，然後刷新瀏覽器介面來看這些變化。

## 提交你做出的改變

首先用 `git add` 指令把你做出的改變添加到本地git倉庫

```bash
git add contributors/<your-github-id>.html
```

然後用 `git commit` 指令 提交你做出的改變

```bash
git commit -m "add <your-github-id>"
```

## 把你做的東西上傳到GitHub

```bash
git push -u origin add-<your-github-id>
```

## 為了便於檢查和回顧，提交你所做出的具體是什麼改变。

如果你前往自己的GitHub對這個專案的Fork倉庫，你可以看見一個`Compare & pull request` 按鈕。點擊這個按鈕。

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

然後提交合併分支的請求（pull request，簡稱pr）

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

一旦你做出的改變被合併，你將會收到一封提示性的郵件。
