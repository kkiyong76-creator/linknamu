import { mockProfile } from "@/data/mockProfile";

export default function ProfileStats() {
  return (
    <section>
      <dl className="grid grid-cols-3">
        {mockProfile.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse items-center gap-0.5 ${i === 1 ? "border-x border-line" : ""}`}
          >
            <dt className="text-xs text-muted">{stat.label}</dt>
            <dd className="text-lg font-bold tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
