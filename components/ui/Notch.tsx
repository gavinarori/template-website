import type { CSSProperties, ReactNode } from "react";

type NotchProps = {
  /** Which corner of the parent to cut out */
  corner: "tr" | "bl";
  /** Notch size in px */
  w: number;
  h: number;
  /** Corner radius in px */
  r?: number;
  /** Must match the colour behind the parent (so it looks like a real cut-out) */
  bg: string;
  children?: ReactNode;
};

/**
 * Cuts a rounded notch into the corner of a `relative` parent and gives its
 * children somewhere to live (a button, a card...). Two tiny spans round the
 * outer corners so the cut-out looks smooth, like in the design.
 */
export function Notch({ corner, w, h, r = 28, bg, children }: NotchProps) {
  const top = corner === "tr";
  const box: CSSProperties = top
    ? { top: 0, right: 0, borderBottomLeftRadius: r }
    : { bottom: 0, left: 0, borderTopRightRadius: r };
  const center = top ? "0% 100%" : "100% 0%";
  const curve: CSSProperties = {
    width: r,
    height: r,
    background: `radial-gradient(circle at ${center}, transparent ${r - 0.5}px, ${bg} ${r}px)`,
  };
  const a: CSSProperties = top ? { top: 0, right: w } : { bottom: 0, left: w };
  const b: CSSProperties = top ? { top: h, right: 0 } : { bottom: h, left: 0 };

  return (
    <>
      <span aria-hidden className="pointer-events-none absolute" style={{ ...curve, ...a }} />
      <span aria-hidden className="pointer-events-none absolute" style={{ ...curve, ...b }} />
      <div className="absolute z-20 grid place-items-center" style={{ width: w, height: h, background: bg, ...box }}>
        {children}
      </div>
    </>
  );
}