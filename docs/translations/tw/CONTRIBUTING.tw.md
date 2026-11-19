# 提交步驟說明

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## 點擊 Fork 按鈕，Fork 這個程式碼儲存庫（repo）

## Clone（複製）你 Fork 出來的專案

在你 Fork 的專案頁面中，點擊 Code 按鈕，選擇 SSH，然後點擊 `copy to clipboard` 按鈕。

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />
接著打開終端機（Terminal），執行 `git clone` 指令

```bash
git clone "url you copied"
```

> [!IMPORTANT]
> 在接下來的步驟中，只要看到`<your-github-id>` 請用你自己的 GitHub 帳號名稱取代。
>
> 例如，如果你的 GitHub ID 是  `aaronsw`,  
> `git switch -c add-<your-github-id>`應該改成`git switch -c add-aaronsw`  
> `contributors/<your-github-id>.html` 實際上是 `contributors/aaronsw.html`
>
> 

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

## 建立一個分支（branch）

如果你目前不在專案資料夾中，請先切換到該目錄：

```bash
cd code-contributions
```

用 `git switch` 指令建立一個分支

```bash
git switch -c add-<your-github-id>
```


## 建立屬於你自己的卡片

在 contributors 目錄底下，你可以用 HTML 檔案 的方式新增你的個人卡片。
請使用你的 GitHub 使用者名稱作為檔名。在提交者目录中用你的用户名创建一个文件。為了方便你開始，可以直接複製以下範例模板：

`contributors/<your-github-id>.html`
```html
<article>
  <h3>你的使用者名稱</h3>
  <p>關於你的小簡介（可選）</p>

  <h4>我使用的程式語言</h4>
  <section class="container">
    <div class="badge" style="background-color: #3874a4; color: white">
      Python
    </div>
    <div class="badge" style="background-color: #f7df1e; color: black;">
      JavaScript
    </div>
  </section>

  <h4>我使用的工具</h4>
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
## 在貢獻者清單中加入你的卡片

請將你新增的檔名加入到 `scripts/contributors.js`  檔案中。 

`scripts/contributors.js`
```js
const contributorFiles = [
  "<your-github-id>.html", // 在這裡加入你的檔名
  "roshanjossey.html",
  "gokultp.html",
];
```

## 在瀏覽器中查看你的變更

你可以直接用瀏覽器開啟 `index.html` 檔案，
確認你剛剛新增的卡片是否正確顯示。

如果你繼續修改卡片內容，只要重新整理瀏覽器頁面，就能看到更新後的結果。



## 提交你的變更

首先，使用 `git add` 將變更加入暫存區：

```bash
git add contributors/<your-github-id>.html
```

接著使用 `git commit` 提交變更：

```bash
git commit -m "add <your-github-id>"
```

## 將你的分支推送到 GitHub

```bash
git push -u origin add-<your-github-id>
```

## 提交 Pull Request（PR）以便檢查與合併

前往你 GitHub 上的 Fork 專案頁面，你會看到 `Compare & pull request` 按鈕，請點擊它。

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

接著送出 Pull Request：

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

當你的變更被合併後，你會收到一封通知信。
