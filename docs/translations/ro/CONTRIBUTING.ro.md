# Pași pentru a contribui

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="dă fork la acest repository" />

## Fă fork la acest repository făcând click pe butonul fork

## Clonează fork-ul tău al acestui repository.

În fork-ul tău al acestui repository, apasă pe butonul code. Selectează tab-ul SSH și apoi apasă pe butonul `copy to clipboard`.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clonează acest repository" />
Deschide un terminal și rulează comanda `git clone`

```bash
git clone "url pe care l-ai copiat"
```

> [!IMPORTANT]
> În pașii următori, când vezi `<github-id-ul-tău>` trebuie să îl înlocuiești cu ID-ul tău de GitHub.  
> De exemplu, dacă ID-ul tău de GitHub este `aaronsw`,  
> `git switch -c add-<github-id-ul-tău>` devine `git switch -c add-aaronsw`  
> `contributors/<github-id-ul-tău>.html` devine `contributors/aaronsw.html`  

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copiază URL-ul în clipboard" />

## Creează un branch

Mergi în directorul repository-ului dacă nu ești deja acolo

```bash
cd code-contributions
```

Creează un branch cu comanda `git switch`

```bash
git switch -c add-<github-id-ul-tău>
```


## Creează cardul tău

Poți adăuga cardul tău ca fișier HTML în directorul contributors. Creează un fișier cu username-ul tău în directorul contributors. Poți copia următorul template pentru a începe.

`contributors/<github-id-ul-tău>.html`
```html
<article>
  <h3>Username-ul tău</h3>
  <p>O scurtă descriere despre tine (opțional)</p>
  <h4>Limbaje de programare pe care le folosesc</h4>
  <section class="container">
    <div class="badge" style="background-color: #3874a4; color: white">
      Python
    </div>
    <div class="badge" style="background-color: #f7df1e; color: black;">
      JavaScript
    </div>
  </section>

  <h4>Unelte pe care le folosesc</h4>
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
## Adaugă cardul tău în lista de contributori

Adaugă numele fișierului pe care l-ai creat în fișierul `scripts/contributors.js`.

`scripts/contributors.js`
```js
const contributorFiles = [
  "<github-id-ul-tău>.html", // adaugă numele fișierului tău aici
  "roshanjossey.html",
  "gokultp.html",
];
```

## Vezi modificările într-un browser web

Poți vedea modificările deschizând `index.html` într-un browser web. Ar trebui să poți vedea noul card pe care l-ai adăugat în pașii anteriori.

Poți continua să faci modificări la cardul tău și să reîmprospătezi tab-ul din browser-ul web pentru a vedea schimbările.

## Fă commit la modificările tale

Mai întâi adaugă modificările în staging cu comanda `git add`

```bash
git add contributors/<github-id-ul-tău>.html
```

Acum fă commit la modificări cu comanda `git commit`

```bash
git commit -m "add <github-id-ul-tău>"
```

## Dă push la modificările tale pe GitHub

```bash
git push -u origin add-<github-id-ul-tău>
```

## Trimite modificările pentru review

Dacă mergi la repository-ul tău pe GitHub, vei vedea un buton `Compare & pull request`. Apasă pe acel buton.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="creează un pull request" />

Acum trimite pull request-ul.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="trimite un pull request" />

Vei primi un email de notificare după ce modificările au fost îmbinate (merged).
