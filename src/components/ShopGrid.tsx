import { Star } from "lucide-react";
import { products } from "@/data/mockProfile";
import MockLink from "./MockLink";

const won = (n: number) => `₩${n.toLocaleString("ko-KR")}`;

export default function ShopGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {products.map((product) => {
        const Icon = product.icon;
        const discount = product.originalPrice
          ? Math.round((1 - product.price / product.originalPrice) * 100)
          : null;
        return (
          <li key={product.id}>
            <MockLink className="bento press flex h-full flex-col overflow-hidden">
              <div className={`relative grid aspect-square place-items-center bg-linear-to-br ${product.gradient}`}>
                <Icon className="h-10 w-10 text-white/80" aria-hidden />
                {product.best && (
                  <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-point px-2 py-0.5 text-[11px] font-bold text-on-point">
                    <Star className="h-3 w-3 fill-current" aria-hidden />
                    베스트
                  </span>
                )}
              </div>
              <div className="p-3.5">
                <p className="truncate text-sm font-semibold">{product.title}</p>
                <p className="mt-1.5 flex items-baseline gap-1.5 tabular-nums">
                  {discount && <span className="text-sm font-bold text-point">{discount}%</span>}
                  <span className="text-[15px] font-bold">{won(product.price)}</span>
                </p>
                {product.originalPrice && (
                  <p className="text-xs text-muted line-through tabular-nums">{won(product.originalPrice)}</p>
                )}
              </div>
            </MockLink>
          </li>
        );
      })}
    </ul>
  );
}
