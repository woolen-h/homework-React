# Today's To-do List

[오늘 할 일 : 우리, 오늘 뭐할까? by React](https://todays-todolist.netlify.app/)

오늘 할 일 : 우리, 오늘 뭐할까?는 사용자가 매일의 할 일 목록을 작성하고 관리할 수 있는 간단한 웹 애플리케이션입니다. 이 애플리케이션은 직관적인 사용자 인터페이스와 효율적인 작업 관리를 목표로 개발되었습니다.

## 주요 기능

- **할 일 추가**: 사용자는 매일의 할 일을 목록에 추가할 수 있습니다.
- **할 일 완료 표시**: 할 일을 완료하면 클릭 한 번으로 완료 상태로 변경할 수 있습니다.
- **한 일 보관**: 한 일 중 보관할 일은 보관 아이콘 버튼을 누르면 보관이 가능합니다.

## 기술 스택

- **프론트엔드**:
  - HTML5
  - CSS3
  - JavaScript
  - React.js
- **배포**: Netlify

## 설치 및 실행 방법

이 프로젝트를 로컬에서 실행하려면 다음 단계를 따르세요.

1. **저장소 클론**:

   ```bash
   git clone https://github.com/yourusername/todays-todolist.git
   cd todays-todolist
   ```

2. **의존성 설치**:

   ```bash
   npm install
   ```

3. **개발 서버 실행**:
   ```bash
   npm start
   ```
   이후 브라우저에서 `http://localhost:3000`으로 접속하면 앱을 확인할 수 있습니다.

## 프로젝트 구조

```bash
todays-todolist/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TodoItem.js
│   │   ├── TodoList.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

- `public/`: 정적 파일들이 위치한 디렉토리입니다.
- `src/`: 애플리케이션의 주요 소스 코드가 포함된 디렉토리입니다.
  - `components/`: 할 일 목록과 아이템 등을 관리하는 컴포넌트들이 포함되어 있습니다.
  - `App.js`: 애플리케이션의 메인 컴포넌트입니다.
  - `index.js`: ReactDOM을 통해 애플리케이션을 렌더링하는 엔트리 파일입니다.

## 빌드 및 배포

이 프로젝트는 `create-react-app`을 사용하여 빌드되었습니다. 빌드 및 배포 과정은 다음과 같습니다.

### 1. 로컬에서 빌드

로컬 환경에서 프로젝트를 빌드하려면 다음 명령어를 사용하세요.

```bash
npm run build
```

이 명령어는 `build` 폴더에 최적화된 프로덕션용 빌드를 생성합니다. 생성된 빌드 파일들은 HTML, CSS, JavaScript로 구성되며, 최적화 및 압축되어 최종 사용자에게 빠르게 로드될 수 있도록 준비됩니다.

### 2. Netlify를 통한 배포

이 프로젝트는 Netlify를 통해 배포되었습니다. 배포 과정은 다음과 같습니다.

1. **Netlify 계정 생성 및 로그인**: [Netlify](https://www.netlify.com/) 웹사이트에서 계정을 생성하고 로그인합니다.

2. **새 사이트 배포**: Netlify 대시보드에서 "New site from Git"을 클릭하고, GitHub 저장소와 연결합니다.

3. **빌드 설정**: Netlify가 자동으로 빌드를 수행할 수 있도록 다음과 같이 설정합니다.

   - 빌드 명령어: `npm run build`
   - 배포 디렉토리: `build`

4. **배포 시작**: 설정이 완료되면 Netlify가 자동으로 빌드를 수행하고, 결과를 웹사이트에 배포합니다.

5. **도메인 설정**: 원하는 경우, Netlify에서 제공하는 도메인을 사용하거나 사용자 지정 도메인을 설정할 수 있습니다.

## 기여 방법

기여를 환영합니다! 기여하려면 다음 단계를 따르세요.

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 만듭니다. (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다. (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/amazing-feature`)
5. 풀 리퀘스트를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 문의

프로젝트 관련 문의 사항은 [your-email@example.com](mailto:your-email@example.com)으로 연락해주세요.

---

위 README는 프로젝트의 빌드 및 배포 과정을 설명하는 부분을 포함하고 있습니다. 필요에 따라 추가적인 내용을 보강하거나 수정할 수 있습니다.
