import { Dialog, Transition } from '@headlessui/react';
import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Modal Size Variants
 */
const modalSizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4',
} as const;

/**
 * Modal Props Interface
 */
export interface ModalProps {
  /**
   * Control modal visibility
   */
  open: boolean;

  /**
   * Callback when modal should close
   */
  onClose: (value: boolean) => void;

  /**
   * Modal size
   * @default "md"
   */
  size?: keyof typeof modalSizes;

  /**
   * Modal content
   */
  children: React.ReactNode;

  /**
   * Additional className for modal panel
   */
  className?: string;
}

/**
 * Modal Component
 *
 * KRDS-compliant modal using Headless UI Dialog
 * - Full accessibility (focus trap, ESC key, ARIA)
 * - Backdrop overlay
 * - Smooth animations
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Modal open={isOpen} onClose={setIsOpen}>
 *   <Modal.Title>제목</Modal.Title>
 *   <Modal.Body>
 *     내용
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button onClick={() => setIsOpen(false)}>확인</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, size = 'md', children, className }, ref) => {
    return (
      <Transition show={open} as={React.Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          {/* Backdrop */}
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  ref={ref}
                  className={cn(
                    'w-full',
                    modalSizes[size],
                    'transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all',
                    className
                  )}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
);
Modal.displayName = 'Modal';

/**
 * Modal Title Component
 */
export const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <Dialog.Title
    as="h3"
    ref={ref}
    className={cn('text-lg font-medium leading-6 text-gray-900', className)}
    {...props}
  >
    {children}
  </Dialog.Title>
));
ModalTitle.displayName = 'ModalTitle';

/**
 * Modal Body Component
 */
export const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-4 text-sm text-gray-600', className)}
    {...props}
  />
));
ModalBody.displayName = 'ModalBody';

/**
 * Modal Footer Component
 */
export const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-6 flex justify-end gap-2', className)}
    {...props}
  />
));
ModalFooter.displayName = 'ModalFooter';

/**
 * Modal Close Button Component
 */
export const ModalCloseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      'absolute right-4 top-4 rounded-md p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#256ef4]',
      className
    )}
    {...props}
  >
    <span className="sr-only">닫기</span>
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
));
ModalCloseButton.displayName = 'ModalCloseButton';
