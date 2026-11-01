"use client";

import type { ReactNode } from "react";
import { useToast } from "./Toast";

type MockLinkProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  message?: string;
};

/** 아직 연결되지 않은 목업 링크: 이동 대신 토스트만 표시 */
export default function MockLink({ children, className, label, message = "준비 중인 기능이에요" }: MockLinkProps) {
  const toast = useToast();

  return (
    <a
      href="#"
      aria-label={label}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        toast(message);
      }}
    >
      {children}
    </a>
  );
}
