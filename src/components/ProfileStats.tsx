import { mockProfile } from "@/data/mockProfile";

export default function ProfileStats() {
  return (
    <section className="px-6">
      <dl className="grid grid-cols-3 divide-x divide-line rounded-[20px] border border-line bg-card py-4">
        {mockProfile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center gap-0.5">
            <dt className="text-xs text-muted">{stat.label}</dt>
            <dd className="text-lg font-bold tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
