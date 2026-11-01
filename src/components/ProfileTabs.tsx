"use client";

import { useState, type ReactNode } from "react";

type Tab = { id: string; label: string; panel: ReactNode };

type ProfileTabsProps = {
  tabs: Tab[];
};

export default function ProfileTabs({ tabs }: ProfileTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <section>
      <div role="tablist" aria-label="프로필 탭" className="relative grid border-b border-line" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`panel-${tab.id}`}
            onClick={() => setActive(i)}
            className={`h-12 text-[15px] font-semibold transition-colors ${
              active === i ? "text-foreground" : "text-muted hover:text-foreground/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* 활성 탭 밑줄: 부드럽게 이동 */}
        <span
          aria-hidden
          className="absolute -bottom-px left-0 h-0.5 rounded-full bg-point transition-transform duration-300 ease-out"
          style={{ width: `${100 / tabs.length}%`, transform: `translateX(${active * 100}%)` }}
        />
      </div>
      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== i}
          className="pt-5"
        >
          {tab.panel}
        </div>
      ))}
    </section>
  );
}
