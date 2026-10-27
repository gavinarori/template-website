/** Shared easing: a soft, confident "ease-out expo" used across the whole template. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Seconds the intro (preloader) takes before the hero animations start.
 * Don't want a preloader? Set this to 0 and delete <Preloader /> in app/sitecraft/page.tsx.
 */
export const INTRO = 2.2;