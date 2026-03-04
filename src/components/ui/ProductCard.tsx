import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
}

export default function ProductCard({
  name,
  price,
  description,
  image,
  badge,
}: ProductCardProps) {
  return (
    <div className="flex flex-col bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
      <div className="relative h-[200px] md:h-[220px] bg-[var(--muted)] overflow-hidden group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold tracking-[0.5px] bg-[var(--primary)] text-white rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 px-5 pb-5 pt-4">
        <h3 className="font-primary text-[18px] font-bold text-[var(--foreground)]">
          {name}
        </h3>
        <span className="font-primary text-[24px] font-extrabold text-[var(--primary)]">
          {price}
        </span>
        <p className="text-[13px] text-[var(--muted-foreground)]">{description}</p>
      </div>
    </div>
  );
}
