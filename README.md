# Week 5-1 ~ 5-2. 호텔 예약 사이트
----
## 목차
[1. 프로젝트 소개](#1-프로젝트-소개)

[2. 역할](#2-역할)

[3. 프로젝트 요약](#3-프로젝트-요약)

[4. 설치 방법](#4-설치방법)

[5. 프로젝트 구조](#5-프로젝트-구조)

[6. 개발 하이라이트](#6-개발-하이라이트)

[7. 기능 구현](#7-기능-구현)

[8. 회의록](#8-회의록)

[9. 프로젝트 결과물](#9-프로젝트-결과물)


## 1. 프로젝트 소개

> 개요 : 원티드 프리온보딩 5기 5주차 여섯 번 째 팀 과제
> 
> 
> 주제 : 트립비토즈 기업과제 - 호텔 예약 사이트
> 
> 기간 : 2022.08.01 ~ 2022.08.05
> 

## 2. 역할

|                   이름                    | 직책  | 역할                                             |
| :---------------------------------------: | :---: | :----------------------------------------------- |
|  [오태권](https://github.com/ohtaekwon)   | 팀장  | 📌 검색 - 투숙객 입력폼 구현<br/>                 |
|  [추연빈](https://github.com/chuyeonbin)  | 팀원  | 📌 예약내역 구현<br />📌 헤더 UI 구현              |
| [엄일경](https://github.com/sunaerocket)  | 팀원  | 📌 검색 - 데이트피커 구현<br/>                    |
| [임은지](https://github.com/salangdung-i) | 팀원  | 📌 통신 작업<br />📌 무한 스크롤 <br />📌 서버 분리 |
|    [이진희](https://github.com/bebusl)    | 팀원  | 📌 메인페이지 - 호텔 정보 카드 구현               |
| [문성운](https://github.com/corgi-world)  | 팀원  | 📌 서치바 구현                                    |

## 3. 프로젝트 요약
![https://img.shields.io/badge/Laguage-Typescript-green?logo=Typescript&logoColor=#377549](https://img.shields.io/badge/Laguage-Typescript-green?logo=Typescript&logoColor=#377549)

![https://img.shields.io/badge/Libarary-React_Query-green?logo=reactquery&logoColor=#377549](https://img.shields.io/badge/Libarary-React_Query-green?logo=reactquery&logoColor=#377549)
![[https://img.shields.io/badge/Laguage-Typescript-red](https://img.shields.io/badge/Laguage-Typescript-red)](https://img.shields.io/badge/Libarary-Recoil-green?logo=Recoil&logoColor=#377549)

📌 본 과제는 호텔 예약 서비스이다.

<br/>

#### 프로젝트 흐름도

![구조도1.png](https://velog.velcdn.com/images/brill_be/post/a62b526a-ec66-4c93-a332-b03b830fbc53/image.png)

#### 1) 시나리오

- 고객이 예약 버튼을 누른다 →  React Query를 통해 서버에 patch요청을 보내고, 로컬스토리지에도 호텔 정보를 저장한다 ⇒ 요청 처리가 완료되면 refetch을 통해 업데이트된 내용을 서버에서 불러온다
- 스크롤이 페이지 끝에 닿으면 useInfiniteQuery를 통해 데이터를 10개씩 들고와 렌더링한다.
- 예약확인 페이지에서는 로컬스토리지에 저장되어 있는 예약 정보를 가져와 렌더링한다.

#### 2) 서버의 상태관리

- 리액트 쿼리를 사용하여 서버의 호텔 데이터 상태관리를 하도록 한다.
    - 예약 시 호텔 데이터를 업데이트하는 요청을 한다.
    - 리액트 쿼리의 useInfiniteQuery를 이용해 한 번에 10개의 데이터를 가져오게 한다.

#### 3) 서버의 데이터 정의

```
{
  "hotels": [
		{
      "hotelName": "Tongyeong Crown",
      "base": 2,
      "max": 4,
      "reservation": false,
      "id": 999
    },
    {
      "hotelName": "Gwangju Cheomdan Picasso",
      "base": 2,
      "max": 5,
      "reservation": false,
      "id": 1000
    }, ...
  ]
}

```

### 작업 단위 최소화

- 작업의 최소 단위까지 세분화하여 공동 작업 수행할 수 있도록 진행했다.

<br/>

## 4. 설치방법

1. 서버 설치 및 실행

```jsx
git clone https://github.com/wanted-pre-onboarding-fe-8/8ripbtoz-server.git
cd 8ripbtoz-server
npm i 
npm start
```

2. 클라이언트 설치 및 실행

```jsx
git clone https://github.com/wanted-pre-onboarding-fe-8/8ripbtoz.git
cd 8ripbitoz
npm i
npm start
```

## 5. 프로젝트 구조

```jsx

├── 📦 src
│   ├── index.tsx
│   ├── App.tsx
│   ├── 📂components
│   │   ├── FullSizePopup.tsx
│   │   ├── Header.tsx
│   │   ├── 📂datepicker
│   │   │   ├── Calendar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Weekdays.tsx
│   │   │   └── index.tsx
│   │   └── 📂guestselect
│   │       ├── GuestSelect.tsx
│   │       └── GuestSelectButton.tsx
│   ├── 📂hooks
│   │   ├── useGuestCountState.ts
│   │   ├── useKeywordState.ts
│   │   ├── useScheduleState.ts
│   │   ├── useScheduleValue.ts
│   │   └── useSearchPayload.ts
│   ├── 📂http
│   │   └── index.ts
│   ├── 📂layouts
│   │   └── DefaultLayout.tsx
│   ├── 📂pages
│   │   ├── 📂main
│   │   │   ├── index.tsx
│   │   │   ├── 📂card
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── GridCard.tsx
│   │   │   │   ├── Skeleton.tsx
│   │   │   │   └── index.tsx
│   │   │   └── 📂search
│   │   │       ├── index.tsx
│   │   │       ├── Popup.tsx
│   │   │       ├── 📂desktop
│   │   │       │   ├── Count.tsx
│   │   │       │   ├── Schedule.tsx
│   │   │       │   ├── Text.tsx
│   │   │       │   └── index.tsx
│   │   │       └── 📂mobile
│   │   │           ├── Count.tsx
│   │   │           ├── Schedule.tsx
│   │   │           ├── Text.tsx
│   │   │           └── index.tsx
│   │   └── 📂reservation
│   │       ├── index.tsx
│   │       └── ReservationCard.tsx
│   ├── 📂queries
│   │   └── hotel.ts
│   ├── 📂routes
│   │   └── DefaultRouter.tsx
│   ├── 📂store
│   │   └── searchAtom.ts
│   ├── 📂styles
│   │   └── globalStyles.ts
│   ├── 📂types
│   │   └── index.ts
│   └── 📂utils
│       ├── constants
│       │   ├── guest.ts
│       │   └── time.ts
│       ├── date.ts
│       └── storage.ts
└─── tsconfig.json
```

## 6. 개발 하이라이트

### 🔎 Recoil 도입기

```jsx
/main/index
	├──  SearchBar
	│	├── DatePicker
	│	└── GuestSelect
	└── Card
```

- 메인페이지의 index파일에서 검색관련 스테이트를 관리하고 검색완료시 Card컴포넌트에 데이터를 넣어 주려고 했다.
- index파일에서 DatePicker/GuestSelect까지 스테이트를 내려주려면 3~4겹의 레이어를 거쳐야 해 Props drilling이 발생했기때문에 전역으로 상태관리를 하는 것이 좋겠다고 판단해 Recoil을 도입하게 되었다.

### 🔎 모바일/웹의 서치바 따로 구현

- 모바일과 웹 환경에서의 **검색 요청 트리거**가 아예 다르고, **팝업을 닫는 방식**도 달랐다.
- 서치바 컴포넌트 내에서 데스크탑인지 모바일인지 구분짓고 로직을 분리하면 한 컴포넌트 내의 로직이 너무 많아지고, 컴포넌트의 사이즈가 너무 커질 수 있다.
- 그래서 각 환경에 대응되는 컴포넌트를 각각 만들고, react-responsive를 이용해 분기 처리를 해주어 각 환경에 맞는 컴포넌트를 렌더링하도록 하였다.
- 중복되는 로직은 커스텀 훅을 만들어 재사용하였다.

### 🔎 스켈레톤 UI

- 로딩 시 일반적으로 많이 쓰는 스피너/프로그래스바/스켈레톤 중 어떤 것을 사용할 지 고민했다.
- 사용자들은 다른 것에 비해 스켈레톤이 더 자연스럽고 빠르게 느껴지게 한다는 설문 결과가 있어 UX를 높이기 위해 스켈레톤 UI를 채택했다.

## 7. 기능 구현

- [x]  예약 페이지를 만든다
    - [x]  일자는 오늘을 기준으로 12개월 후까지 선택 가능하다
    - [x]  과거 일자는 비활성화 처리한다
    - [x]  초기값은 일주일 후 1박으로 처리한다
    - [x]  첫 선택일을 체크인, 두번째 선택일을 체크아웃 처리한다
    - [x]  두번째 선택일이 첫 선택일 보다 과거인 경우, 두번째 선택일을 체크인 날짜로 만들고 체크아웃 날짜는 제거한다
    - [x]  체크인과 체크아웃 사이의 기간은 하이라이트 처리한다
    - [x]  체크인과 체크아웃 모두 선택된 상태에서 다른 일자를 선택하면 선택한 날짜를 체크인 날짜로 만들고 체크아웃 날짜는 제거한다
    - [x]  성인과 아동을 구분한다
    - [x]  성인의 기본값은 2로 처리한다
    - [x]  아동의 기본값은 0으로 처리한다
    - [x]  투숙객 수는 -와 + 버튼을 통해 조절한다(예약 가능한 방의 수는 모두 하루 1개로 가정한다)
    - [x]  호텔 검색 결과는 무한 스크롤을 적용해야 한다
    - [x]  한 페이지의 노출 개수는 10개다
    - [x]  다음 페이지를 로딩할 때 로딩바를 노출한다(500ms 시간 설정)
    - [x]  이미 예약된 호텔은 비활성화 처리한다(localstorage에 정보가 있는 호텔)
    - [x]  일단 기본 호텔 이미지로 구현
    - [x]  여유가 생기면 이미지풀을 만들어서 랜덤처리
    - [x]  사용자가 선택한 호텔 정보를 로컬 스토리지에 저장한다
    - [x]  반응형 디자인은 PC/Mobile(480px) 두가지 형태로 구현한다
        - [x]  캘린더 → 투숙객 수 → 호텔 목록 순서로 표시한다
    - [x]  장바구니 기능을 구현한다.
        - [x]  예약한 호텔의 정보들을 표시한다.

## 8. 회의록

- [29일차💬](https://www.notion.so/5b14d37950d5413aa490e179b1cbd36f)
- [30일차💬](https://www.notion.so/8ed9221377bb4a83bb181bb3370cc4d2)
- [31일차💬](https://www.notion.so/86aec00942dc4550917ef22b22788d83)
- [32일차💬](https://www.notion.so/8b8d04ff19634eae8f5861d6b2799e32)
- [33일차💬](https://www.notion.so/33-b71f8c6baaa0442bb5c7041bb61bb29b)

## 9. 프로젝트 결과물

- 웹
  - 데이트피커
 ![웹서치바-캘린더](https://velog.velcdn.com/images/brill_be/post/941ae89d-a41d-476e-ad93-1d3ba479b7b4/image.png)

  - 투숙객 입력 폼
  ![웹서치바-인원](https://velog.velcdn.com/images/brill_be/post/e37b9f13-13e6-450c-91aa-99bc2d3b5e89/image.png)

  - 메인페이지
 ![웹메인](https://velog.velcdn.com/images/brill_be/post/f51ede25-ff44-4607-ab2c-772edbc5c8b7/image.png)

  - 예약 내역 확인페이지
![웹예약](https://velog.velcdn.com/images/brill_be/post/363b9157-d4cf-4cf1-91ba-bc553773a561/image.png)


- 모바일
    - 데이트피커와 투숙객 입력 폼
    
    ![image](https://user-images.githubusercontent.com/49019236/183225829-014e67c3-9a1e-4f22-8f15-b784114df479.png)![image](https://user-images.githubusercontent.com/49019236/183225842-7f48dc54-fbca-4283-ada3-71b97da8d81d.png)
    
    
    - 메인페이지와 예약 내역 확인 페이지
   
    ![image](https://user-images.githubusercontent.com/49019236/183225866-4cabb689-7967-4961-8d5c-ea5ed4496d13.png)![image](https://user-images.githubusercontent.com/49019236/183225849-1ef66dc7-5034-455a-b53c-0bc1494a0cd6.png)
