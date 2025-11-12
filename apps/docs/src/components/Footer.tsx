import { Container } from '@hanui/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950">
      {/* Bottom */}
      <Container className="mt-12 py-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} HANUI. MIT License.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Built with ❤️ by{' '}
          <a
            href="https://github.com/odada-o"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            @odada-o
          </a>
        </p>
      </Container>
    </footer>
  );
}
