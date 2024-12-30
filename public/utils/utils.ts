/*
!------------------------------------------------
!file: utils.ts
!descriptions: 전역적으로 사용되는 유틸 함수들을 정의하고 Export하여 사용할 수 있도록 하기 위한 파일입니다.
!------------------------------------------------
*/

// 날짜를 YYYY.MM.DD 형식으로 포맷하는 함수
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};