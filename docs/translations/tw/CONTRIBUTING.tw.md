# 提交流程

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

## 點擊 Fork 按鈕來 Fork 這個專案

## Clone（複製）你 Fork 的專案

在你 Fork 的專案頁面中，點擊 Code 按鈕，選擇 SSH，然後點擊「copy to clipboard」。

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

打開終端機，執行：

```bash
git clone "url you copied"
```

> [!IMPORTANT]
> 在以下步驟中，如果你看到 `<your-github-id>`，請用你的 GitHub 帳號取代。
>
> 例如，如果你的 GitHub 帳號是 `aaronsw`：
>
> `git switch -c add-<your-github-id>` 就會是 `git switch -c add-aaronsw`
> 
> `contributors/<your-github-id>.html` 就會是 `contributors/aaronsw.html`

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

## 建立分支（branch）

如果你目前不在專案資料夾中，請先進入：

```bash
cd code-contributions
```

建立新的分支：

```bash
git switch -c add-<your-github-id>
```

## 建立你的個人卡片

在 `contributors` 資料夾中建立一個 HTML 檔案，檔名為你的 GitHub 帳號：

`contributors/<your-github-id>.html`

你可以使用以下範本開始：

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

## 把你的卡片加入清單

打開檔案：

`scripts/contributors.js`

在陣列中加入你的檔名：

```js
const contributorFiles = [
  "<your-github-id>.html",
  "roshanjossey.html",
  "gokultp.html",
];
```

## 在瀏覽器中預覽變更

打開：

`index.html`

你應該可以看到你新增的卡片。

你可以持續修改卡片內容，並重新整理瀏覽器查看效果。

## 提交你的變更

先將檔案加入 Git：

```bash
git add contributors/<your-github-id>.html
```

提交變更：

```bash
git commit -m "add <your-github-id>"
```

## 上傳到 GitHub

```bash
git push -u origin add-<your-github-id>
```

## 建立 Pull Request（PR）

回到 GitHub，你會看到：

👉 **Compare & pull request**

點擊後建立 PR。

## 完成 🎉

當你的 PR 被合併後，你會收到通知信。
