import type { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
}

/**
 * PageSection - 문서 페이지의 섹션 래퍼
 *
 * KRDS heading 간격을 자동으로 적용:
 * - h2-h2: 40px/80px (section 간 간격) - mb-10 md:mb-20
 *
 * 내부 간격은 Stack 컴포넌트 사용 권장:
 * - h2-본문: Stack spacing="title-body-medium" (12px/20px)
 * - h2-h3: Stack spacing="h2-h3" (24px/40px)
 * - h3-h3: Stack spacing="h3-h3" (32px/64px)
 *
 * @example
 * ```tsx
 * <PageSection>
 *   <Stack spacing="title-body-medium">
 *     <Heading level="h2">개요</Heading>
 *     <Body>...</Body>
 *   </Stack>
 * </PageSection>
 * ```
 */
export function PageSection({ children }: PageSectionProps) {
  return <section className="mb-10 md:mb-20">{children}</section>;
}
