import { DocsLayout } from '@/components/DocsLayout';

export default function LayoutDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}
