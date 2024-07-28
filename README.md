# 🤝 <span style="color:#303030;">Atomic Components</span>

## <span style="color:#303030;">수행 조건</span>

테스트는 다음 조건을 충족해야 합니다.

- [ ] 모두가 접근 가능
- [ ] 의미있는 구조 설계
- [ ] 체계적인 표현 설계
- [ ] 원할한 상호작용 설계

## 🚲 <span style="color:#303030;">작업 및 스타일링</span>

- Layout Page

  - App.js
    - InputGroup과 ButtonGroup을 각각 import 하였습니다.
  - Container.js
    - 레이아웃의 큰 틀을 담당합니다. ButtonGroup과 InputGroup을 나눠주는 역할을 합니다.
  - Section.js
    - 레이아웃의 흰 박스 역할입니다. 각 상태 및 스타일, 사이즈 별 컴포넌트를 분리합니다.
  - Group.js
    - 내부 컴포넌트 뷰 박스입니다. flex-flow를 사용하여 wrap 속성을 가질 수 있도록 하였습니다.

- Components

  - Input.js
    - input의 사이즈, 상태별 클래스를 정의하였습니다.
  - InputGroup.js
    - input에 정의한 사이즈, 상태를 map 메서드로 group 컴포넌트 안에 뿌려주었습니다.
    - 처음엔 map 메서드를 생각을 못해서 App.js에 한땀한땀 input을 넣다가 아 이게 아닌데...? 싶어져서 수정하였습니다 ㅎ
  - Button.js
    - button의 스타일, 상태별 클래스를 정의하였습니다.
  - ButtonGroup.js
    - button에 정의한 스타일, 상태를 map 메서드로 group 컴포넌트 안에 뿌려주었습니다.
    - 처음엔 map 메서드를 생각을 못해서 App.js에 input과 마찬가지로 한땀한땀 button을 넣다가 아 이게 아닌데...? 싶어져서 수정하였습니다 ㅎ

- Build
  - 현재 (07/28) Netlify 빌드 관련 오류가 있어 확인 중
  - 레포 그냥 분리할걸 후회하는 중

## 🎥 <span style="color:#303030;">스크린샷</span>

![과제 스크린샷](image.png)
