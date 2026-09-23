/**
 * Stacking order of the fixed layers. The custom cursor must stay above every overlay: its
 * ring used to sit below them, so over the PDF menu options (where the dot hides and the
 * labelled ring takes over) no cursor was visible at all.
 */
export const LAYER = {
  /** PDF download menu, case-study modal. */
  overlay: 9999,
  cursorRing: 10000,
  cursorDot: 10001,
} as const;
