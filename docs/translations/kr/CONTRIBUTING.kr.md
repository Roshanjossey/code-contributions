기여하는 방법
<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="이 저장소를 포크하세요" />
이 저장소를 포크하세요
오른쪽 상단의 Fork 버튼을 클릭하여 이 저장소를 포크하세요.

포크한 저장소를 클론하세요
포크한 저장소에서 Code 버튼을 클릭하세요. SSH 탭을 선택한 다음 클립보드에 복사 버튼을 클릭하세요.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="이 저장소 클론하기" />
터미널을 열고 git clone 명령어를 실행하세요:

bash
Copy
Edit
git clone "복사한 URL"
[!IMPORTANT]
다음 단계에서 <tu-github-id>를 보면, 본인의 GitHub ID로 바꿔야 합니다.
예를 들어, GitHub ID가 aaronsw라면
git switch -c add-<tu-github-id> → git switch -c add-aaronsw
contributors/<tu-github-id>.html → contributors/aaronsw.html

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="URL 복사하기" />
브랜치 생성
아직 저장소 디렉토리에 들어가지 않았다면 이동하세요:

bash
Copy
Edit
cd code-contributions
git switch 명령어로 브랜치를 만드세요:

bash
Copy
Edit
git switch -c add-<tu-github-id>
카드 생성
contributors 디렉토리에 HTML 파일로 본인의 카드를 추가할 수 있습니다.
GitHub 사용자 이름으로 파일을 만들어주세요. 아래 템플릿을 복사하여 시작할 수 있습니다.

contributors/<tu-github-id>.html

html
Copy
Edit
<article>
    <h3>당신의 GitHub 사용자 이름</h3>
    <p>당신에 대한 간단한 소개 (선택 사항)</p>
    <h4>사용하는 프로그래밍 언어</h4>
    <section class="container">
        <div class="badge" style="background-color: #3874a4; color: white">
            Python
        </div>
        <div class="badge" style="background-color: #f7df1e; color: black;">
            JavaScript
        </div>
    </section>

    <h4>사용하는 도구</h4>
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
기여자 목록에 카드 추가
생성한 파일 이름을 scripts/contributors.js 파일에 추가하세요:

scripts/contributors.js

js
Copy
Edit
const contributorFiles = [
    "<tu-github-id>.html", // 여기에 파일 이름을 추가하세요
    "roshanjossey.html",
    "gokultp.html",
];
웹 브라우저에서 변경 사항 확인
index.html 파일을 브라우저에서 열어 변경 사항을 확인할 수 있습니다.
앞서 만든 새로운 카드가 표시되어야 합니다.

카드를 계속 수정하면서 브라우저 탭을 새로고침해 변화를 확인할 수 있습니다.

변경 사항 커밋
먼저 git add 명령어로 변경 사항을 준비합니다:

bash
Copy
Edit
git add contributors/<tu-github-id>.html
그 다음 git commit 명령어로 커밋하세요:

bash
Copy
Edit
git commit -m "add <tu-github-id>"
GitHub에 푸시
bash
Copy
Edit
git push -u origin add-<tu-github-id>
변경 사항 제출 (Pull Request 만들기)
GitHub 저장소로 이동하면 Compare & pull request 버튼이 표시됩니다. 클릭하세요.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="Pull Request 만들기" />
그런 다음 Pull Request를 제출하세요.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="Pull Request 제출하기" />
변경 사항이 병합되면 알림 이메일을 받게 됩니다.

필요하다면 이 내용을 PDF나 Markdown 파일로도 정리해 드릴 수 있어요.








