import type { CSSProperties } from "react";
import Image from "next/image";
import type { SocialItem } from "@/data/profile";
import SocialLinks from "./SocialLinks";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatar: string;
  socials: SocialItem[];
};

const order = (i: number) => ({ "--i": i }) as CSSProperties;

export default function ProfileHeader({ name, bio, avatar, socials }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={96}
        height={96}
        priority
        className="fade-up h-24 w-24 rounded-full object-cover ring-1 ring-border"
        style={order(0)}
      />
      <h1 className="fade-up mt-4 text-[22px] font-bold uppercase tracking-[0.5px]" style={order(1)}>
        {name}
      </h1>
      <p className="fade-up mt-1.5 text-[13px] tracking-[1.5px] text-muted" style={order(2)}>
        {bio}
      </p>
      <div className="fade-up mt-6" style={order(3)}>
        <SocialLinks socials={socials} />
      </div>
    </header>
  );
}
