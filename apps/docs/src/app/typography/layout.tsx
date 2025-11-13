import type { ReactNode } from 'react';
import { DocsContentLayout } from '@/components/layout/DocsContentLayout';

export default function TypographyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DocsContentLayout>{children}</DocsContentLayout>;
}
