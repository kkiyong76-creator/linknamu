import FeaturedCard from "./FeaturedCard";
import VideoCard from "./VideoCard";
import MusicCard from "./MusicCard";
import NewsletterCard from "./NewsletterCard";
import CoffeeChatCard from "./CoffeeChatCard";
import InstagramCard from "./InstagramCard";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <FeaturedCard />
      <VideoCard />
      <MusicCard />
      <NewsletterCard />
      <CoffeeChatCard />
      <InstagramCard />
    </div>
  );
}
