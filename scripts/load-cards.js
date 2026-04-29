const featuredContributors = ['roshanjossey.html', 'gokultp.html'];

let currentLetter = '';
const usedLetters = [];

function getLetterKey(contributor) {
    const first = contributor[0].toLowerCase();
    return /[a-z]/.test(first) ? first : '0';
}

function buildNavs() {
    const featuredLink = `<a href="#section-featured">FEATURED</a>`;
    const alphaLinks = usedLetters.map(l =>
        `<a href="#section-${l}">${l === '0' ? '#' : l.toUpperCase()}</a>`
    ).join('');
    document.querySelectorAll('.alpha-nav').forEach(nav => nav.innerHTML = featuredLink + alphaLinks);
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

// Featured section — always pinned at top
const featuredSection = document.createElement('div');
featuredSection.id = 'section-featured';
featuredSection.className = 'alpha-anchor';
featuredSection.innerHTML = `FEATURED <span class="anchor-jump"><a href="#top">TOP</a> | <a href="#alpha-nav-bottom">BOTTOM</a></span>`;
document.getElementById('contributor-cards').appendChild(featuredSection);
featuredContributors.forEach(f => document.getElementById('contributor-cards').appendChild(makeIframe(f)));

// Pin latest contributor below featured
if (typeof latestContributor !== 'undefined' && latestContributor) {
    const newSection = document.createElement('div');
    newSection.className = 'alpha-anchor';
    newSection.innerHTML = `New! <span class="anchor-jump"><a href="#top">TOP</a> | <a href="#alpha-nav-bottom">BOTTOM</a></span>`;
    document.getElementById('contributor-cards').appendChild(newSection);
    document.getElementById('contributor-cards').appendChild(makeIframe(latestContributor));
}

// Dedup, exclude featured and latest, sort A-Z
const excluded = new Set([...featuredContributors, latestContributor]);
[...new Set(contributorFiles)]
    .filter(f => !excluded.has(f))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(contributor => createCard(contributor));

buildNavs();
