// src/lib/styles/constants.ts
export const STYLES = {
  TYPOGRAPHY: {
    DISPLAY: 'text-display',
    TITLE: 'text-title',
    BODY: 'text-body',
  },
  BUTTONS: {
    PRIMARY: 'btn-primary',
    SECONDARY: 'btn-secondary',
  },
  LAYOUT: {
    CARD: 'card',
    INPUT: 'input-primary',
    CONTAINER: 'container-app',
  },
} as const;

export const COLORS = {
  brand: {
    green: 'var(--brand-green)',
    grayLight: 'var(--brand-gray-light)',
    grayMedium: 'var(--brand-gray-medium)',
    grayDark: 'var(--brand-gray-dark)',
    mint: 'var(--brand-mint)',
  }
} as const;