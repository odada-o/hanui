import type { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
}

/**
 * PageSection - 문서 페이지의 섹션 래퍼
 *
 * KRDS h2-h2 간격 기준을 자동으로 적용
 * - Mobile: 40px (mb-10)
 * - PC: 80px (md:mb-20)
 *
 * @example
 * ```tsx
 * <PageHeader title="..." />
 * <PageSection>
 *   <Heading level="h2">개요</Heading>
 *   <Body>...</Body>
 * </PageSection>
 * <PageSection>
 *   <Heading level="h2">설치</Heading>
 *   <Installation />
 * </PageSection>
 * ```
 */
export function PageSection({ children }: PageSectionProps) {
  return <section className="mb-10 md:mb-20">{children}</section>;
}
