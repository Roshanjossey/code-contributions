# Étapes pour contribuer

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork le repository" />

## Fork le repository en cliquant sur le bouton fork

## Clone le repository "forké".

Dans le repository que vous avez forké, cliquez sur le bouton code.
Sélectionnez l'onglet SSH puis cliquez sur le bouton `copier dans le presse-papiers`.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone le repository" />

Ouvrez un terminal et exécutez la commande `git clone`.

```bash
git clone "Url que vous avez copié"
```

> [!IMPORTANT]
> Dans les étapes suivantes, lorsque vous voyez `<votre-pseudo-github>`, vous devez le remplacer par votre identifiant/pseudo GitHub.  
> Par exemple, si votre identifiant/pseudo GitHub est `aaronsw`,  
> `git switch -c add-<votre-pseudo-github>` devient `git switch -c add-aaronsw`  
> `contributors/<votre-pseudo-github>.html` devient `contributors/aaronsw.html`

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copiez l'URL dans le presse-papiers" />

## Création de votre branche

Allez dans le répertoire du dépôt si vous n'y êtes pas déjà.

```bash
cd code-contributions
```

Créez une branche avec la commande `git switch`.

```bash
git switch -c add-<votre-pseudo-github>
```

## Créez votre carte

Vous pouvez ajouter votre carte en tant que fichier HTML dans le répertoire contributors.
Créez un fichier avec votre nom d'utilisateur dans le répertoire contributors.

Vous pouvez copier le modèle suivant pour commencer.
(L'idéal est de faire une carte de présentation en anglais afin que tout le monde puisse la comprendre.)

`contributors/<votre-pseudo-github>.html`

```html
<article>
  <h3>Votre pseudo</h3>
  <p>Votre résumé (Optionnel)</p>
  <h4>
    Programming languages I use (ou "Les langages de programmation que
    j'utilise")
  </h4>
  <section class="container">
    <div class="badge" style="background-color: #3874a4; color: white">
      Python
    </div>
    <div class="badge" style="background-color: #f7df1e; color: black;">
      JavaScript
    </div>
  </section>

  <h4>Tools I use (ou "Les outils que j'utilise")</h4>
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

## Ajoutez votre carte à la liste des contributeurs

Ajoutez le nom du fichier que vous avez créé dans le fichier `scripts/contributors.js`.

`scripts/contributors.js`

```js
const contributorFiles = [
  "<your-pseudo-github>.html", // Ajoutez votre nom de fichier ici
  "roshanjossey.html",
  "gokultp.html",
];
```

## Observez vos modifications dans un navigateur web

Vous pouvez voir vos modifications en ouvrant `index.html` dans un navigateur web.
Vous devriez pouvoir voir la nouvelle carte que vous avez ajoutée dans les étapes précédentes.
Vous pouvez voir vos modifications dans un navigateur web en ouvrant le fichier `index.html` dans le navigateur web.
Vous devrez pouvoir voir la nouvelle carte que vous avez ajoutée dans les étapes précédentes.

Vous pouvez continuer à apporter des modifications à votre carte et actualiser l'onglet du navigateur web pour voir ces modifications.

## Commit vos modifications

Tout d'abord, mettez vos modifications en scène avec la commande `git add`

```bash
git add contributors/<your-pseudo-github>.html
```

Maintenant, commitez vos modifications avec la commande `git commit`

````bash
git commit -m "add-<votre-pseudo-github>"

## Push vos modifications sur GitHub

```bash
git push -u origin add-<votre-pseudo-github>
````

## Créez une Pull Request

Si vous allez sur votre repository sur GitHub, vous verrez un bouton `Compare & pull request`. Cliquez sur ce bouton.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Maintenant, soumettez la pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Vous recevrez un e-mail de notification une fois les modifications fusionnées.
