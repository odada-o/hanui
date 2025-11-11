/**
 * KRDS (Korean Government Design System) Color Tokens
 *
 * Official color palette from KRDS Figma tokens
 * Source: https://github.com/KRDS-uiux/krds-uiux/blob/main/tokens/figma_token.json
 *
 * All colors are verified to meet WCAG 2.1 AA contrast ratio (4.5:1)
 * when used appropriately with their corresponding backgrounds.
 */

/**
 * Color palette scale type (KRDS official scale)
 * Uses 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95 scale
 */
export interface ColorScale {
  5: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
}

/**
 * KRDS Primary Color Scale
 * Official government primary color
 *
 * Usage: Main actions, links, primary information
 * Contrast ratios (on white):
 * - 50-95: ✓ AA compliant (4.5:1+)
 * - 5-40: Use with dark backgrounds
 */
export const primary: ColorScale = {
  5: '#ecf2fe',
  10: '#d8e5fd',
  20: '#b1cefb',
  30: '#86aff9',
  40: '#4c87f6',
  50: '#256ef4',
  60: '#0b50d0',
  70: '#083891',
  80: '#052561',
  90: '#03163a',
  95: '#020f27',
};

/**
 * KRDS Secondary Color Scale
 * Secondary accent color
 *
 * Usage: Secondary actions, accents, highlights
 * Contrast ratios (on white):
 * - 50-95: ✓ AA compliant (4.5:1+)
 */
export const secondary: ColorScale = {
  5: '#eef2f7',
  10: '#d6e0eb',
  20: '#bacbde',
  30: '#90b0d5',
  40: '#6b96c7',
  50: '#346fb2',
  60: '#1c589c',
  70: '#063a74',
  80: '#052b57',
  90: '#031f3f',
  95: '#02162c',
};

/**
 * Gray Scale with extended range (0-100)
 * Neutral colors for backgrounds, borders, and text
 *
 * Contrast ratios (on white):
 * - 50-100: ✓ AA compliant for body text (4.5:1+)
 * - 70-100: ✓ AAA compliant for body text (7:1+)
 */
export interface GrayScale extends ColorScale {
  0: string;
  100: string;
}

export const gray: GrayScale = {
  0: '#ffffff',
  5: '#f4f5f6',
  10: '#e6e8ea',
  20: '#cdd1d5',
  30: '#b1b8be',
  40: '#8a949e',
  50: '#6d7882',
  60: '#58616a',
  70: '#464c53',
  80: '#33363d',
  90: '#1e2124',
  95: '#131416',
  100: '#000000',
};

/**
 * Success Color Scale
 * Positive feedback, success states, confirmations
 *
 * Contrast ratios (on white):
 * - 50-95: ✓ AA compliant (4.5:1+)
 */
export const success: ColorScale = {
  5: '#eaf6ec',
  10: '#d8eedd',
  20: '#a9dab4',
  30: '#7ec88e',
  40: '#3fa654',
  50: '#228738',
  60: '#267337',
  70: '#285d33',
  80: '#1f4727',
  90: '#122b18',
  95: '#0e2012',
};

/**
 * Warning Color Scale
 * Warnings, cautions, attention needed
 *
 * Contrast ratios (on white):
 * - 50-95: ✓ AA compliant (4.5:1+)
 * - 5-40: Use with caution, border contrast only
 */
export const warning: ColorScale = {
  5: '#fff3db',
  10: '#ffe0a3',
  20: '#ffc95c',
  30: '#ffb114',
  40: '#c78500',
  50: '#9e6a00',
  60: '#8a5c00',
  70: '#614100',
  80: '#422c00',
  90: '#2e1f00',
  95: '#241800',
};

/**
 * Danger/Error Color Scale
 * Errors, destructive actions, alerts
 *
 * Contrast ratios (on white):
 * - 50-95: ✓ AA compliant (4.5:1+)
 */
export const danger: ColorScale = {
  5: '#fdefec',
  10: '#fcdfd9',
  20: '#f7afa1',
  30: '#f48771',
  40: '#f05f42',
  50: '#de3412',
  60: '#bd2c0f',
  70: '#8a240f',
  80: '#5c180a',
  90: '#390d05',
  95: '#260903',
};

/**
 * Information Color Scale
 * Informational messages, tips, helpful content
 *
 * Contrast ratios (on white):
 * - 50-95: ✓ AA compliant (4.5:1+)
 */
export const info: ColorScale = {
  5: '#e7f4fe',
  10: '#d3ebfd',
  20: '#9ed2fa',
  30: '#5fb5f7',
  40: '#2098f3',
  50: '#0b78cb',
  60: '#096ab3',
  70: '#085691',
  80: '#053961',
  90: '#03253f',
  95: '#021a2c',
};

/**
 * Complete color palette
 */
export const colors = {
  primary,
  secondary,
  gray,
  success,
  warning,
  danger,
  info,
  // Aliases for semantic usage
  error: danger,
} as const;

/**
 * Semantic color mapping for common use cases
 *
 * These provide accessible default colors for various UI states
 */
export const semanticColors = {
  // Text colors (all AA/AAA compliant on white)
  text: {
    primary: gray[95], // Darkest text (AAA ✓)
    secondary: gray[70], // Secondary text (AA ✓)
    tertiary: gray[60], // Tertiary text (AA ✓)
    disabled: gray[40],
    inverse: gray[0], // White
  },
  // Background colors
  background: {
    primary: gray[0], // White
    secondary: gray[5],
    tertiary: gray[10],
    disabled: gray[20],
    inverse: gray[95],
  },
  // Border colors
  border: {
    default: gray[20],
    hover: gray[30],
    focus: primary[50],
    error: danger[50],
  },
  // State colors (interactive elements)
  state: {
    success: {
      text: success[70],
      background: success[5],
      border: success[50],
    },
    warning: {
      text: warning[80],
      background: warning[5],
      border: warning[50],
    },
    error: {
      text: danger[70],
      background: danger[5],
      border: danger[50],
    },
    info: {
      text: info[70],
      background: info[5],
      border: info[50],
    },
  },
  // Link colors
  link: {
    default: primary[60],
    hover: primary[70],
    visited: primary[80],
  },
} as const;

/**
 * Dark mode color mapping
 *
 * Provides inverted color scales for dark mode support
 */
export const darkColors = {
  // Text colors (on dark background)
  text: {
    primary: gray[5],
    secondary: gray[30],
    tertiary: gray[40],
    disabled: gray[60],
    inverse: gray[95],
  },
  // Background colors
  background: {
    primary: gray[95],
    secondary: gray[90],
    tertiary: gray[80],
    disabled: gray[70],
    inverse: gray[0],
  },
  // Border colors
  border: {
    default: gray[80],
    hover: gray[70],
    focus: primary[40],
    error: danger[40],
  },
  // State colors (adjusted for dark backgrounds)
  state: {
    success: {
      text: success[30],
      background: success[95],
      border: success[40],
    },
    warning: {
      text: warning[30],
      background: warning[95],
      border: warning[40],
    },
    error: {
      text: danger[30],
      background: danger[95],
      border: danger[40],
    },
    info: {
      text: info[30],
      background: info[95],
      border: info[40],
    },
  },
  // Link colors
  link: {
    default: primary[40],
    hover: primary[30],
    visited: primary[50],
  },
} as const;

/**
 * Export all color types
 */
export type Colors = typeof colors;
export type SemanticColors = typeof semanticColors;
export type DarkColors = typeof darkColors;
