"use client";

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

type ToastContextValue = (message: string) => void;

const ToastContext = createContext<ToastContextValue>(() => {});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((next: string) => {
    if (timer.current) clearTimeout(timer.current);
    setMessage(next);
    timer.current = setTimeout(() => setMessage(null), 2200);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-6 transition duration-200 ${
          message ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {message && (
          <p className="rounded-full border border-line bg-[#24242c] px-5 py-3 text-sm font-medium text-foreground shadow-lg shadow-black/40">
            {message}
          </p>
        )}
      </div>
    </ToastContext.Provider>
  );
}
