# 🎬 Movie Browsing App

React + TypeScript 기반의 영화 탐색 웹 애플리케이션입니다.

---

## 🛠 기술 스택

| 분류                 | 기술                  |
| -------------------- | --------------------- |
| 프레임워크           | React 19 + TypeScript |
| 빌드 도구            | Vite                  |
| 라우팅               | React Router DOM v7   |
| 서버 상태 관리       | TanStack Query v5     |
| 클라이언트 상태 관리 | Zustand v5            |
| HTTP 클라이언트      | Axios                 |
| 스타일링             | Panda CSS             |

---

## 🚀 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 📁 프로젝트 구조

```
src/
├── api/                          # 서버 통신 로직 (fetch/axios 등)
│   └── movieApi.ts               # 영화 데이터 fetch 함수들
├── assets/                       # 이미지, 아이콘 등 정적 파일
├── components/                   # 재사용 가능한 UI 컴포넌트
│   ├── common/                   # 범용 컴포넌트
│   │   ├── Carousel.tsx          # 영화 목록 슬라이드 캐러셀
│   │   └── MovieCard.tsx         # 카드 형식의 영화 아이템
│   └── layout/                   # 화면 레이아웃 컴포넌트
│       ├── Layout.tsx            # 전체 레이아웃
│       └── Navbar.tsx            # 상단 네비게이션 바
├── constants/                    # 상수 모음
│   └── api.ts                    # BASE_URL, API_KEY 등 환경변수 가공
├── hooks/                        # 커스텀 훅
│   ├── queries/                  # TanStack Query 훅 모음
│   │   └── useMovies.ts          # 영화 목록/상세 데이터 패칭 훅
│   └── ui/                       # UI/브라우저 관련 훅
│       └── useIntersectionObserver.ts  # Intersection Observer 훅
├── pages/                        # 라우팅 단위 페이지 컴포넌트
│   ├── Home/
│   │   ├── index.tsx             # 메인 페이지
│   │   └── components/
│   │       └── HeroBanner.tsx    # Home 전용 히어로 배너
│   └── MovieDetail/
│       ├── index.tsx             # 영화 상세 페이지
│       └── components/
│           └── MovieInfo.tsx     # MovieDetail 전용 영화 정보
├── router/                       # 라우팅 설정 분리
│   └── index.tsx                 # react-router-dom 라우트 정의
├── store/                        # Zustand 전역 상태 관리
│   └── useMovieStore.ts          # UI 상태, 검색/필터 전역 상태
├── types/                        # 공통 TypeScript 타입/인터페이스
│   └── movie.d.ts                # 영화 데이터 타입 정의
├── utils/                        # 공통 유틸리티 함수
│   └── formatDate.ts             # 날짜 포맷 변환 함수
├── App.tsx                       # 전역 Provider 설정 (QueryClient 등)
└── main.tsx                      # React 진입점
```

---

## 🌐 페이지 구성

| 경로         | 페이지      | 설명                             |
| ------------ | ----------- | -------------------------------- |
| `/`          | Home        | 영화 목록 (캐러셀 + 카드 리스트) |
| `/movie/:id` | MovieDetail | 영화 상세 정보                   |
