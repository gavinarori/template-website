/** Tiny section label with a dot, e.g. "• About" */
export function Label({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wide ${light ? "text-paper/80" : "text-moss"}`}>
      <i className="size-1 rounded-full bg-current" />
      {children}
    </span>
  );
}