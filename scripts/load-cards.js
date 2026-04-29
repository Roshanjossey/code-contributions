let currentLetter = '';
const usedLetters = [];

function getLetterKey(contributor) {
    const first = contributor[0].toLowerCase();
    return /[a-z]/.test(first) ? first : '0';
}

function buildNavs() {
    const links = usedLetters.map(l =>
        `<a href="#section-${l}">${l === '0' ? '#' : l.toUpperCase()}</a>`
    ).join('');
    document.querySelectorAll('.alpha-nav').forEach(nav => nav.innerHTML = links);
}

function makeIframe(contributor) {
    const iframe = document.createElement('iframe');
    iframe.className = 'card col col-6-md col-3-lg bd-grey';
    iframe.dataset.src = `contributors/${contributor}`;
    iframe.title = contributor;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iframe.src = iframe.dataset.src;
                observer.disconnect();
            }
        });
    });
    observer.observe(iframe);
    return iframe;
}

function createCard(contributor) {
    const letter = getLetterKey(contributor);
    if (letter !== currentLetter) {
        currentLetter = letter;
        usedLetters.push(letter);
        const anchor = document.createElement('div');
        anchor.id = `section-${letter}`;
        anchor.className = 'alpha-anchor';
        anchor.innerHTML = `${letter === '0' ? '#' : letter.toUpperCase()} <span class="anchor-jump"><a href="#top">TOP</a> | <a href="#alpha-nav-bottom">BOTTOM</a></span>`;
        document.getElementById('contributor-cards').appendChild(anchor);
    }
    document.getElementById('contributor-cards').appendChild(makeIframe(contributor));
}

// Pin latest contributor at top
if (typeof latestContributor !== 'undefined' && latestContributor) {
    const newSection = document.createElement('div');
    newSection.className = 'alpha-anchor';
    newSection.innerHTML = `New! <span class="anchor-jump"><a href="#top">TOP</a> | <a href="#alpha-nav-bottom">BOTTOM</a></span>`;
    document.getElementById('contributor-cards').appendChild(newSection);
    document.getElementById('contributor-cards').appendChild(makeIframe(latestContributor));
}

// Dedup, exclude latest, sort A-Z
[...new Set(contributorFiles)]
    .filter(f => f !== latestContributor)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(contributor => createCard(contributor));

buildNavs();
