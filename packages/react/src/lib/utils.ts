import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge class names
 *
 * Combines clsx for conditional classes
 * Used throughout HANUI components to merge Tailwind classes
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 *
 * @example
 * ```tsx
 * cn('base-class', condition && 'conditional-class', className)
 * // => 'base-class conditional-class custom-class'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
