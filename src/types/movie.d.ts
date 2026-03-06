// 영화 데이터 타입 정의

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface MovieDetailType extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
}

// "page": 1,
//     "results": [
//         {
//             "adult": false,
//             "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
//             "genre_ids": [
//                 878,
//                 28,
//                 12
//             ],
//             "id": 823464,
//             "original_language": "en",
//             "original_title": "Godzilla x Kong: The New Empire",
//             "overview": "두 타이탄의 전설적인 대결 이후 할로우 어스에 남은 콩은 드디어 애타게 찾던 동족을 발견하지만 그 뒤에 도사리고 있는 예상치 못한 위협에 맞닥뜨린다. 한편, 깊은 동면에 빠진 고질라는 알 수 없는 신호로 인해 깨어나고 푸른 눈의 폭군 스카 킹의 지배 아래 위기에 처한 할로우 어스를 마주하게 된다. 할로우 어스는 물론, 지구상에도 출몰해 전세계를 초토화시키는 타이탄들의 도발 속에서 고질라와 콩은 사상 처음으로 한 팀을 이뤄 반격에 나서기로 하는데…",
//             "popularity": 5014.446,
//             "poster_path": "/4z1VMmlxHrziG45901esjB4dpIa.jpg",
//             "release_date": "2024-03-27",
//             "title": "고질라 X 콩: 뉴 엠파이어",
//             "video": false,
//             "vote_average": 7.243,
//             "vote_count": 2019
//         },
//-------------------------------------------------------------------------------
// {
//   "adult": false,
//   "backdrop_path": "/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
//   "belongs_to_collection": {
//       "id": 77816,
//       "name": "쿵푸팬더 시리즈",
//       "poster_path": "/xoYc0RYKSc3xC4S9OpPZxKocKtj.jpg",
//       "backdrop_path": "/uDosHOFFWtF5YteBRygHALFqLw2.jpg"
//   },
//   "budget": 85000000,
//   "genres": [
//       {
//           "id": 16,
//           "name": "애니메이션"
//       },
//       {
//           "id": 28,
//           "name": "액션"
//       },
//       {
//           "id": 10751,
//           "name": "가족"
//       },
//       {
//           "id": 35,
//           "name": "코미디"
//       },
//       {
//           "id": 14,
//           "name": "판타지"
//       }
//   ],
//   "homepage": "",
//   "id": 1011985,
//   "imdb_id": "tt21692408",
//   "origin_country": [
//       "US"
//   ],
//   "original_language": "en",
//   "original_title": "Kung Fu Panda 4",
//   "overview": "마침내 내면의 평화… 냉면의 평화…가 찾아왔다고 믿는 용의 전사 '포' 이젠 평화의 계곡의 영적 지도자가 되고, 자신을 대신할 후계자를 찾아야만 한다. \"이제 용의 전사는 그만둬야 해요?\" 용의 전사로의 모습이 익숙해지고 새로운 성장을 하기보다 지금 이대로가 좋은 '포' 하지만 모든 쿵푸 마스터들의 능력을 그대로 복제하는 강력한 빌런 '카멜레온'이 나타나고 그녀를 막기 위해 정체를 알 수 없는 쿵푸 고수 '젠'과 함께 모험을 떠나게 되는데… 포는 가장 강력한 빌런과 자기 자신마저 뛰어넘고 진정한 변화를 할 수 있을까?",
//   "popularity": 1037.028,
//   "poster_path": "/1ZNOOMmILNUzVYbzG1j7GYb5bEV.jpg",
//   "production_companies": [
//       {
//           "id": 521,
//           "logo_path": "/kP7t6RwGz2AvvTkvnI1uteEwHet.png",
//           "name": "DreamWorks Animation",
//           "origin_country": "US"
//       }
//   ],
//   "production_countries": [
//       {
//           "iso_3166_1": "US",
//           "name": "United States of America"
//       }
//   ],
//   "release_date": "2024-03-02",
//   "revenue": 533540090,
//   "runtime": 94,
//   "spoken_languages": [
//       {
//           "english_name": "English",
//           "iso_639_1": "en",
//           "name": "English"
//       }
//   ],
//   "status": "Released",
//   "tagline": "오랜만이지! 드림웍스 레전드 시리즈 마침내 컴백!",
//   "title": "쿵푸팬더 4",
//   "video": false,
//   "vote_average": 7.135,
//   "vote_count": 1751
// }