# 권은진 포트폴리오
- **`작업 기간 :`** 23.04 - 23.04
- **`배포 링크 :`** [링크](https://skykwon1004.github.io/react_busan_restauran/)
- **`Stack` :** React, JavaScript, Axios, SCSS

## 설명
Axios를 사용하여 공공데이터 API를 가져와서 부산맛집지도 사이트를 제작했습니다. kakao-maps api를 이용하여 맛집을 지도에 표시해 줍니다. 부산의 구,군 별로 리스트를 만들었고 레스토랑을 클릭하면 레스토랑의 정보를 보여줍니다.

## 작업 사항
- 공공데이터 포탈 (https://www.data.go.kr/) API 데이터 사용하기
- `Axios` 활용해 API 데이터 가져오기
- 부산의 구,군 별로 카테고리를 분류
- `React Router Dom`을 사용하여 URL 구조를 설정
- API에서 가져온 데이터 값과 URL이 일치하는 경우, `useParams`를 사용하여 해당 URL로 이동
- `KakaoMap API`를 이용하여 맛집을 지도에 표시
- 레스토랑의 정보를 가져오고 해당 레스토랑 위치를 지도에 표시
- 댓글 게시,수정,삭제 기능 구현

<!-- ### Git Commit( feat: “커밋 내용” )
```
init: 초기 세팅을 했을 경우
setup: 폴더 혹은 전체적인 구조의 변경이 있을 경우
feat: 새로운 기능을 추가할 경우
fix: 버그를 고친 경우
docs: 문서를 수정한 경우
style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
refactor: 프로덕션 코드 리팩토링
test: 테스트 추가, 테스트 리팩토링 (코드 변경 X)
chore: 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 (코드 변경 X)
design: CSS 등 사용자 UI 디자인 변경
comment: 필요한 주석 추가 및 변경
rename: 파일 혹은 폴더명을 수정하는 경우
remove: 사용하지 않는 파일 혹은 폴더를 삭제하는 경우
``` --> 