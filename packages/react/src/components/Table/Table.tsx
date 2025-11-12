import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Table Component
 *
 * KRDS-compliant table with accessibility support
 *
 * @example
 * ```tsx
 * <Table>
 *   <Table.Caption>사용자 목록</Table.Caption>
 *   <Table.Header>
 *     <Table.Row>
 *       <Table.Head>이름</Table.Head>
 *       <Table.Head>이메일</Table.Head>
 *     </Table.Row>
 *   </Table.Header>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Cell>홍길동</Table.Cell>
 *       <Table.Cell>hong@example.com</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 * ```
 */
export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        'w-full caption-bottom text-[15px] leading-[150%]',
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

/**
 * Table Header Component
 */
export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

/**
 * Table Body Component
 *
 * Supports striped rows for better readability
 */
export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & {
    /**
     * Enable striped rows for better readability
     * @default false
     */
    striped?: boolean;
  }
>(({ className, striped = false, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr:last-child]:border-0',
      striped && '[&_tr:nth-child(even)]:bg-gray-50',
      className
    )}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

/**
 * Table Footer Component
 */
export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-gray-50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

/**
 * Table Row Component
 */
export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-100',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

/**
 * Table Head Component
 *
 * Table header cell with proper accessibility
 */
export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
    /**
     * Enable sorting functionality
     */
    sortable?: boolean;
    /**
     * Current sort direction
     */
    sortDirection?: 'asc' | 'desc' | null;
    /**
     * Sort handler
     */
    onSort?: () => void;
  }
>(
  (
    { className, sortable, sortDirection, onSort, children, scope, ...props },
    ref
  ) => {
    const content = (
      <>
        {children}
        {sortable && sortDirection && (
          <span className="ml-2 inline-block">
            {sortDirection === 'asc' ? '↑' : '↓'}
          </span>
        )}
      </>
    );

    return (
      <th
        ref={ref}
        scope={scope || 'col'}
        className={cn(
          'h-10 px-4 text-left align-middle font-medium text-gray-600 [&:has([role=checkbox])]:pr-0',
          sortable && 'cursor-pointer select-none hover:bg-gray-100',
          className
        )}
        onClick={sortable ? onSort : undefined}
        {...props}
      >
        {content}
      </th>
    );
  }
);
TableHead.displayName = 'TableHead';

/**
 * Table Cell Component
 */
export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

/**
 * Table Caption Component
 *
 * Provides accessible description of table content
 */
export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-[15px] leading-[150%] text-gray-600', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';
