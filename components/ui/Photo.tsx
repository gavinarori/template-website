/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes } from "react";

type PhotoProps = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string };

/**
 * One place to render every image. It is a plain <img> so any link works without
 * extra Next.js config. Swap for next/image later if you want automatic optimisation.
 */
export function Photo({ src, alt, loading = "lazy", ...rest }: PhotoProps) {
  return <img src={src} alt={alt} loading={loading} decoding="async" {...rest} />;
}