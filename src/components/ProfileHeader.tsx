import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { mockProfile } from "@/data/mockProfile";

type ProfileHeaderProps = {
  name: string;
  avatar: string;
};

export default function ProfileHeader({ name, avatar }: ProfileHeaderProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative">
        {/* 라임 glow: 사진 오른쪽 위 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[120px] -top-[90px] h-[220px] w-[220px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(198,244,50,0.14), transparent 65%)" }}
        />
        {/* 3px 그라데이션 링 + 3px 배경색 간격 */}
        <div
          className="relative rounded-full p-[3px] shadow-[0_0_48px_rgba(124,58,237,0.35)]"
          style={{ background: "linear-gradient(140deg, #c6f432, #7c3aed)" }}
        >
          <div className="rounded-full bg-background p-[3px]">
            <Image
              src={avatar}
              alt={`${name} 프로필 사진`}
              width={118}
              height={118}
              priority
              className="h-[118px] w-[118px] rounded-full object-cover"
            />
          </div>
        </div>
        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-background bg-point px-2.5 py-0.5 text-[11px] font-bold text-black">
          ● 새 영상
        </span>
      </div>
      <h1 className="mt-6 flex items-center gap-1.5 text-[26px] font-extrabold tracking-[0.5px]">
        {name}
        {mockProfile.verified && (
          <BadgeCheck className="h-6 w-6 fill-verified text-background" aria-label="인증된 계정" />
        )}
      </h1>
      <p className="mt-1 text-sm text-muted">
        {mockProfile.handle} · {mockProfile.role} · {mockProfile.location}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed">
        {mockProfile.bio[0]}
        <br />
        <span className="text-muted">{mockProfile.bio[1]}</span>
      </p>
    </section>
  );
}
