# योगदान करने के चरण

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="इस रिपॉजिटरी को fork करें" />

## Fork बटन पर क्लिक करके इस रिपॉजिटरी को fork करें

## इस रिपॉजिटरी के अपने fork को clone करें

अपने fork की गई रिपॉजिटरी में जाएँ और **Code** बटन पर क्लिक करें। **SSH** टैब चुनें और फिर `copy to clipboard` बटन पर क्लिक करें।

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="इस रिपॉजिटरी को clone करें" />

अब एक टर्मिनल खोलें और `git clone` कमांड चलाएँ:

```bash
git clone "आपने जो URL कॉपी किया है"
```

> [!IMPORTANT]
> नीचे दिए गए चरणों में, जहाँ भी `<आपकी-github-id>` दिखे, उसे अपने GitHub ID से बदलें।  
> उदाहरण के लिए, यदि आपका GitHub ID `aaronsw` है, तो:  
> `git switch -c add-<आपकी-github-id>` बन जाएगा `git switch -c add-aaronsw`  
> `contributors/<आपकी-github-id>.html` बन जाएगा `contributors/aaronsw.html`

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="URL को clipboard में कॉपी करें" />


## एक शाखा बनाएँ

यदि आप पहले से वहाँ नहीं हैं, तो रिपॉजिटरी डायरेक्टरी में जाएँ:

```bash
cd code-contributions
```

`git switch` कमांड का उपयोग करके एक नई शाखा बनाएँ:

```bash
git switch -c add-<आपकी-github-id>
```

## अपनी कार्ड बनाएँ

आप contributors डायरेक्टरी में एक HTML फ़ाइल के रूप में अपना कार्ड जोड़ सकते हैं। contributors डायरेक्टरी में अपने username के नाम से एक फ़ाइल बनाएँ। शुरुआत करने के लिए आप नीचे दिया गया टेम्पलेट कॉपी कर सकते हैं:

`contributors/<आपकी-github-id>.html`
```html
<article>
  <h3>आपका username</h3>
  <p>आपके बारे में एक छोटा सा परिचय (वैकल्पिक)</p>
  <h4>मैं जिन प्रोग्रामिंग भाषाओं का उपयोग करता हूँ</h4>
  <section class="container">
    <div class="badge" style="background-color: #3874a4; color: white">
      Python
    </div>
    <div class="badge" style="background-color: #f7df1e; color: black;">
      JavaScript
    </div>
  </section>

  <h4>मैं जिन टूल्स का उपयोग करता हूँ</h4>
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

## contributors सूची में अपनी कार्ड जोड़ें

आपने जो फ़ाइल बनाई है उसका नाम `scripts/contributors.js` फ़ाइल में जोड़ें।

`scripts/contributors.js`
```js
const contributorFiles = [
  "<आपकी-github-id>.html", // यहाँ अपनी फ़ाइल का नाम जोड़ें
  "roshanjossey.html",
  "gokultp.html",
];
```

## वेब ब्राउज़र में अपने बदलाव देखें

आप वेब ब्राउज़र में `index.html` खोलकर अपने बदलाव देख सकते हैं। आपको पिछले चरण में जोड़ा गया नया कार्ड दिख जाना चाहिए।

आप अपने कार्ड में बदलाव करना जारी रख सकते हैं और उन बदलावों को देखने के लिए वेब ब्राउज़र टैब को रिफ्रेश कर सकते हैं।

## अपना परिवर्तन प्रतिबद्ध करें

सबसे पहले `git add` कमांड से अपने बदलाव करें:

```bash
git add contributors/<आपकी-github-id>.html
```

अब `git commit` कमांड से अपने बदलाव कमिट करें:

```bash
git commit -m "add <आपकी-github-id>"
```

## अपने बदलाव GitHub पर पुश करें

```bash
git push -u origin add-<आपकी-github-id>
```

## अपने बदलाव समीक्षा के लिए जमा करें

यदि आप GitHub पर अपनी रिपॉजिटरी पर जाते हैं, तो आपको `Compare & pull request` बटन दिखाई देगा। उस पर क्लिक करें।

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="एक पुल(pull) अनुरोध बनाएँ" />

अब पुल अनुरोध सबमिट करें।

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="पुल(pull) अनुरोध सबमिट करें" />

बदलाव मर्ज होने के बाद आपको एक नोटिफिकेशन ईमेल मिलेगा।