"use client";

import { useToast } from "./Toast";

/** 현재 페이지 주소를 복사하고 토스트 표시 */
export function useShareLink() {
  const toast = useToast();

  return async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // 클립보드 권한이 없어도 데모 토스트는 표시
    }
    toast("링크가 복사되었어요");
  };
}
