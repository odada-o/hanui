import * as React from 'react';
import { cn } from '../../lib/utils';

export interface PaginationProps {
  /**
   * Current active page (1-indexed)
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;

  /**
   * Number of page buttons to show
   * @default 5
   */
  siblingCount?: number;

  /**
   * Additional className
   */
  className?: string;
}

/**
 * Generate page numbers with ellipsis
 */
function generatePageNumbers(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1
): (number | string)[] {
  const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
  const totalBlocks = totalNumbers + 2; // + 2 ellipsis

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, '...', totalPages];
  }

  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    return [1, '...', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  );
  return [1, '...', ...middleRange, '...', totalPages];
}

/**
 * Pagination Component
 *
 * KRDS-compliant pagination with accessibility
 *
 * @example
 * ```tsx
 * const [page, setPage] = useState(1);
 *
 * <Pagination
 *   currentPage={page}
 *   totalPages={10}
 *   onPageChange={setPage}
 * />
 * ```
 */
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    { currentPage, totalPages, onPageChange, siblingCount = 1, className },
    ref
  ) => {
    const pages = generatePageNumbers(currentPage, totalPages, siblingCount);

    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn('flex items-center justify-center gap-1', className)}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={cn(
            'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors',
            'hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#256ef4]',
            'disabled:pointer-events-none disabled:opacity-50'
          )}
          aria-label="Go to previous page"
        >
          ← 이전
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="inline-flex h-9 w-9 items-center justify-center text-sm"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors',
                'hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#256ef4]',
                isActive &&
                  'bg-[#256ef4] text-white hover:bg-[#0b50d0] pointer-events-none'
              )}
              aria-label={`Go to page ${pageNumber}`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={cn(
            'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors',
            'hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#256ef4]',
            'disabled:pointer-events-none disabled:opacity-50'
          )}
          aria-label="Go to next page"
        >
          다음 →
        </button>
      </nav>
    );
  }
);
Pagination.displayName = 'Pagination';
