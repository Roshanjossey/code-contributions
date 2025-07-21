# Etapas para contribuir

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork este repositório" />

## Faça um fork deste repositório clicando no botão Fork

## Clone o seu fork deste repositório

No seu fork deste repositório, clique no botão _Code_. Selecione a aba _SSH_ e depois clique no botão `copy to clipboard`.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone este repositório" />
Abra um terminal e execute o comando `git clone`:

```bash
git clone "url que você copiou"
```

> [!IMPORTANT]
> Nas etapas a seguir, sempre que vir `<seu-github-id>`, substitua **_id_** pelo seu nome de usuário do GitHub.
> Por exemplo, se seu usuário do GitHub for `aaronsw`, então:
> `git switch -c add-<seu-github-id>` vira `git switch -c add-aaronsw`
> `contributors/<seu-github-id>.html` vira `contributors/aaronsw.html`

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copiar URL para a área de transferência" />

## Crie uma branch

Acesse o diretório do repositório (se ainda não estiver nele):

```bash
cd code-contributions
```

Crie uma nova branch com o comando `git switch`:

```bash
git switch -c add-<seu-github-id>
```

## Crie seu card

Você pode adicionar seu card como um arquivo HTML no diretório `contributors`. Crie um arquivo com o seu nome de usuário nesse diretório. Você pode usar o seguinte modelo para começar:

`contributors/<seu-github-id>.html`

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

## Adicione seu card à lista de contribuidores

Adicione o nome do seu arquivo no arquivo `scripts/contributors.js`.

`scripts/contributors.js`

```js
const contributorFiles = [
  "<seu-github-id>.html", // adicione o nome do seu arquivo aqui
  "roshanjossey.html",
  "gokultp.html",
];
```

## Visualize suas alterações em um navegador

Você pode ver suas alterações abrindo o arquivo `index.html` em um navegador. Você deverá ver o novo card que adicionou nas etapas anteriores.

Você pode continuar ajustando o seu card e atualizando a aba do navegador para ver as mudanças.

## Faça commit das suas alterações

Primeiro, adicione as alterações com o comando `git add`:

```bash
git add contributors/<seu-github-id>.html
```

Agora faça o commit com o comando `git commit`:

```bash
git commit -m "add <seu-github-id>"
```

## Envie suas alterações para o GitHub

```bash
git push -u origin add-<seu-github-id>
```

## Envie suas alterações para revisão

Se você acessar seu repositório no GitHub, verá o botão `Compare & pull request`. Clique nesse botão.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="criar um pull request" />

Agora envie o _pull request_.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="enviar pull request" />

Você receberá uma notificação por e-mail assim que as alterações forem mescladas.
