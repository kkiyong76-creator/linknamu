import Image from "next/image";
import type { SocialItem } from "@/data/profile";
import SocialLinks from "./SocialLinks";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatar: string;
  socials: SocialItem[];
};

export default function ProfileHeader({ name, bio, avatar, socials }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full border-[3px] border-foreground bg-avatar p-1.5">
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
        />
      </div>
      <div className="mt-6">
        <SocialLinks socials={socials} />
      </div>
      <h1 className="mt-5 text-xl font-extrabold tracking-wider sm:text-2xl">{name}</h1>
      <p className="mt-1 max-w-xs text-sm font-medium tracking-wide text-foreground/70 sm:text-base">{bio}</p>
    </header>
  );
}
