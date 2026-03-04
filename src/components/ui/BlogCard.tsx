import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  image,
}: BlogCardProps) {
  return (
    <div className="flex flex-col bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
      <div className="relative h-[180px] md:h-[200px] bg-[var(--muted)] overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold tracking-[0.5px] bg-[var(--card)] text-[var(--foreground)] rounded-full">
          {category}
        </span>
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5 pt-4">
        <span className="text-[12px] text-[var(--muted-foreground)]">{date}</span>
        <h3 className="font-primary text-[18px] font-bold text-[var(--foreground)] leading-tight">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.5] text-[var(--muted-foreground)]">
          {excerpt}
        </p>
      </div>
    </div>
  );
}
