import Image from "next/image";

interface OfferCardProps {
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  image: string;
  badge: string;
}

export default function OfferCard({
  name,
  price,
  originalPrice,
  description,
  image,
  badge,
}: OfferCardProps) {
  return (
    <div className="flex flex-col bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden">
      <div className="relative h-[220px] bg-[var(--muted)]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold tracking-[0.5px] bg-[var(--primary)] text-white rounded-full">
          {badge}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-5 pb-5 pt-4">
        <h3 className="font-primary text-[18px] font-bold text-[var(--foreground)]">
          {name}
        </h3>
        <div className="flex items-center gap-3">
          <span className="font-primary text-[24px] font-extrabold text-[var(--primary)]">
            {price}
          </span>
          <span className="text-[16px] text-[var(--muted-foreground)] line-through">
            {originalPrice}
          </span>
        </div>
        <p className="text-[13px] text-[var(--muted-foreground)]">{description}</p>
      </div>
    </div>
  );
}
