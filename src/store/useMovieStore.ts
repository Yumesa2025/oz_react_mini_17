// UI 상태, 검색/필터 전역 상태 (Zustand)
import { create } from 'zustand';

interface MovieStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const useMovieStore = create<MovieStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useMovieStore;
