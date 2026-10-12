import Image from "next/image";

type ContentPreviewImageProps = {
  src: string;
  alt: string;
  /** 16/10 for marketing shots; 16/9 for dashboards */
  aspect?: "16/10" | "16/9";
  /** Fixed height for equal thumbnails in project grids */
  variant?: "fluid" | "card";
  priority?: boolean;
  className?: string;
};

export function ContentPreviewImage({
  src,
  alt,
  aspect = "16/10",
  variant = "fluid",
  priority = false,
  className = "",
}: ContentPreviewImageProps) {
  const isCard = variant === "card";

  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden bg-slate-900/60 ${
        isCard ? "h-40 sm:h-44" : ""
      } ${className}`}
      style={isCard ? undefined : { aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 42rem"
        className="object-cover object-top"
      />
    </div>
  );
}
