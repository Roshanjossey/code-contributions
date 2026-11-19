# Étapes pour contribuer

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="forker ce dépôt" />

## Forke ce dépôt en cliquant sur le bouton « Fork »

## Clone ton fork de ce dépôt

Dans ton fork de ce dépôt, clique sur le bouton « Code ». Sélectionne l'onglet SSH, puis clique sur le bouton `copy to clipboard`.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="cloner ce dépôt" />
Ouvre un terminal et lance la commande `git clone`

```bash
git clone "url que tu as copiée"
```

> [!IMPORTANT]
> Dans les étapes suivantes, quand tu vois `<your-github-id>`, remplace-le par ton identifiant GitHub.  
> Par exemple, si ton identifiant GitHub est `aaronsw`,  
> `git switch -c add-<your-github-id>` devient `git switch -c add-aaronsw`  
> `contributors/<your-github-id>.html` devient `contributors/aaronsw.html`

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copier l'URL dans le presse-papiers" />

## Crée une branche

Va dans le dossier du dépôt si tu n'y es pas déjà

```bash
cd code-contributions
```

Crée une branche avec la commande `git switch`

```bash
git switch -c add-<your-github-id>
```


## Crée ta carte

Tu peux ajouter ta carte sous forme de fichier HTML dans le dossier `contributors`. Crée un fichier portant ton nom d'utilisateur dans ce dossier. Tu peux copier le modèle suivant pour commencer.

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
## Ajoute ta carte à la liste des contributeurs

Ajoute le nom du fichier que tu as créé dans le fichier `scripts/contributors.js`.

`scripts/contributors.js`
```js
const contributorFiles = [
  "<your-github-id>.html", // ajoute le nom de ton fichier ici
  "roshanjossey.html",
  "gokultp.html",
];
```

## Visualise tes modifications dans un navigateur

Tu peux voir tes modifications en ouvrant `index.html` dans un navigateur web. Tu devrais voir la nouvelle carte que tu as ajoutée aux étapes précédentes.

Tu peux continuer à modifier ta carte et actualiser l'onglet du navigateur pour voir les changements.

## Commite tes modifications

Commence par indexer tes modifications avec la commande `git add`

```bash
git add contributors/<your-github-id>.html
```

Puis commite tes modifications avec la commande `git commit`

```bash
git commit -m "add <your-github-id>"
```

## Pousse tes modifications sur GitHub

```bash
git push -u origin add-<your-github-id>
```

## Soumets tes modifications pour relecture

Si tu vas sur ton dépôt GitHub, tu verras un bouton `Compare & pull request`. Clique dessus.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="créer une pull request" />

Soumets maintenant la pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="soumettre la pull request" />

Tu recevras un email de notification dès que tes modifications auront été fusionnées.
