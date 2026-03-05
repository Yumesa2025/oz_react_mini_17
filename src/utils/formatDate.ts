// 날짜 포맷 변환 함수

/**
 * "2024-03-15" → "2024년 3월 15일"
 */
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};
