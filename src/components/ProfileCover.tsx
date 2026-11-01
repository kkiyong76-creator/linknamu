import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { mockProfile } from "@/data/mockProfile";

type ProfileCoverProps = {
  name: string;
  avatar: string;
};

export default function ProfileCover({ name, avatar }: ProfileCoverProps) {
  return (
    <section>
      {/* 보라 → 남색 메시 그라데이션 커버 */}
      <div
        className="h-[140px] rounded-b-[28px] sm:rounded-[28px]"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #7c3aed 0%, transparent 55%), radial-gradient(circle at 80% 20%, #4338ca 0%, transparent 50%), radial-gradient(circle at 60% 90%, #a855f7 0%, transparent 45%), linear-gradient(135deg, #312e81, #1e1b4b)",
        }}
        aria-hidden
      />
      <div className="flex flex-col items-center px-6 text-center">
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={104}
          height={104}
          priority
          className="-mt-[52px] h-[104px] w-[104px] rounded-full object-cover ring-2 ring-point ring-offset-4 ring-offset-background"
        />
        <h1 className="mt-4 flex items-center gap-1.5 text-2xl font-bold tracking-[0.5px]">
          {name}
          {mockProfile.verified && (
            <BadgeCheck className="h-5 w-5 fill-verified text-background" aria-label="인증된 계정" />
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
      </div>
    </section>
  );
}
