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
