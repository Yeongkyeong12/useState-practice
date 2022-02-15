# 📌Wanted_preOnboarding 과제

### :white_check_mark:구현한 예시 목록

- [x] Toggle.js
- [x] Modal.js
- [ ] Tab.js
- [ ] Tag.js
- [ ] AutoComplete.js
- [ ] ClickToEdit.js

### :white_check_mark:예시 별 README 필수 포함 내용

- 구현한 방법과 이유에 대한 간략한 내용
- 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
- 자세한 실행 방법

## Toggle.js

1. 구현한 방법과 이유에 대한 간략한 내용

- 리액트 Hooks인 useState를 활용하여, 토글 버튼이 활성화됐을 때와 비활성화일 때의<br>
  상태를 나누어 표시할 수 있도록 하고 toggler함수가 input onClick이벤트 발생 시 작동하게 했습니다.

2. 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

- input checkbox 요소와 span을 스타일링할 초기에는, 헷갈리는 부분이 있어 원하는 토글 모양이
  나오지 않았습니다. 위치나 색상을 바꿔가며 조절해서 원하는 모양을 만들어낼 수 있었습니다.
- 예시에 나와있던 토글 색상 변경 애니메이션 효과를 그대로 적용하지 못한 아쉬움이 있습니다.

3. 자세한 실행 방법

- toggle의 기본값은 'false'로 설정하여, 브라우저를 처음 띄웠을 때 비활성화 상태를 기본적으로 보여줍니다.
- toggle 버튼을 클릭하면, 토글이 비활성 -> 활성 상태로 변경되는 동시에 색상도 (회색 -> 보라색) 변경됩니다.
- 토글이 비활성 -> 활성 상태로 변경될 때 useState Hooks와 toggler Onclick 이벤트로 인해
  Toggle Switch 문구 또한 " ON => OFF" 로 변경됩니다.

## Modal.js

1. 구현한 방법과 이유에 대한 간략한 내용

- 리액트 Hooks인 useState를 활용하여, 모달 버튼이 활성화됐을 때와 비활성화일 때의<br>
  상태를 나누어 표시할 수 있도록 하고 toggleModal함수가 Modal버튼(ModalBtn) onClick이벤트 발생 시 작동하게 했습니다.

2. 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

- 버튼을 클릭하여 모달창을 띄웠을 때, 모달창을 제외한 배경 부분의 색깔을 다르게 만드는 것에 시간을 조금
  할애했던 것 같습니다.background라는 className을 가진 div요소를 modal-content div요소 상단에 추가하고
  onClick이벤트를 추가하여 배경 색상을 다르게 했고, 배경 부분을 클릭해도 모달창이 닫히도록 구현했습니다.

3. 자세한 실행 방법

- modal의 기본값은 'false'로 설정하여, 브라우저를 처음 띄웠을 때는 모달창이 없는 기본 상태가 나옵니다.
- modalBtn 버튼을 클릭하면, modal값이 비활성 -> 활성 상태로 변경되어 모달창이 업로드되며, 모달창을 제외한
  배경색상은 어둡게 변합니다.
- 모달창 상단의 close 아이콘을 누르면 모달창이 닫히며, 모달창 뒷 부분(배경)을 클릭해도 모달창은 비활성 상태로 돌아갑니다.
