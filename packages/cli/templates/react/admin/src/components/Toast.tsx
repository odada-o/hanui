import { useToast } from '@/contexts/ToastContext';
import './Toast.css';

export function Toast() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" role="region" aria-label="Notifications">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          role="alert"
          aria-live="polite"
        >
          <span>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="toast-close"
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}
