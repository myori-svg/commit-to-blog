# 구현 체크리스트

## 1. 프로젝트 세팅

### Frontend
- [x] Vite + React + TypeScript 초기화
- [ ] Tailwind CSS v4 설정
- [ ] Biome 설정 (lint + format)
- [ ] 디렉토리 구조 생성 (components / hooks / api / pages)

### Backend
- [x] Express + TypeScript 초기화 *(계획 변경: TypeScript 미적용, JS로 작성)*
- [x] mongoose, dotenv, cors 설치 및 기본 서버 세팅 (`server/index.js`)
- [ ] MongoDB Atlas 연결 확인
- [ ] Biome 설정
- [x] `.env` 파일 생성 및 `.gitignore` 등록

---

## 2. GitHub 연동

- [x] GitHub OAuth 또는 Personal Access Token 인증 처리 (서버에서만)
- [x] GitHub API (GraphQL) - Repository 목록 조회
- [ ] GitHub API - 브랜치 목록 조회
- [ ] GitHub API - 커밋 목록 조회
- [ ] GitHub API - 특정 커밋 diff/파일 변경사항 조회

---

## 3. 블로그 생성

- [ ] 레포지토리 선택 UI (페이지 or 모달)
- [ ] 브랜치 선택 UI
- [ ] 커밋 선택 UI (체크박스 or 단일 선택)
- [ ] 선택한 커밋 정보 → 서버 전송
- [ ] 서버: OpenAI API 호출하여 블로그 초안 생성
- [ ] 생성된 초안 클라이언트에 반환
- [ ] 생성된 글 편집 가능한 에디터 UI

---

## 4. 포스트 관리

- [ ] Post 스키마 정의 (MongoDB)
- [ ] 포스트 저장 API (`POST /posts`)
- [ ] 포스트 목록 조회 API (`GET /posts`)
- [ ] 포스트 단건 조회 API (`GET /posts/:id`)
- [ ] 포스트 수정 API (`PUT /posts/:id`)
- [ ] 포스트 발행 상태 관리 (draft / published)
- [ ] 포스트 카드형 목록 UI

---

## 5. 검증 기준 확인

- [ ] GitHub repo 선택 → 커밋 목록 정상 조회
- [ ] 커밋 선택 → AI 블로그 초안 생성
- [ ] 생성된 글 편집 후 저장 가능
- [ ] 저장된 포스트 목록 조회 가능
- [ ] 에러 발생 시 사용자에게 명확한 메시지 표시

---

## 6. 보안 / 제약

- [x] GitHub API 토큰 서버에서만 사용 확인
- [ ] OpenAI API 키 클라이언트 미노출 확인
- [x] `.env` 파일 `.gitignore` 등록 확인
