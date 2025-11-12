import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Title Variants Definition
 *
 * KRDS Typography - Heading 스타일 가이드 준수
 * - h1 (xlarge): 40px(PC) / 28px(Mobile) - 페이지/섹션 주제 강조
 * - h2 (large): 32px(PC) / 24px(Mobile) - 주요 섹션 구분
 * - h3 (medium): 24px(PC) / 22px(Mobile) - 세부 섹션 제목
 * - h4 (small): 19px(PC/Mobile) - 본문 유사 크기 세부 설명
 * - h5 (xsmall): 17px(PC/Mobile) - 부차적 정보/보조 설명
 * - 모든 레벨 굵기 700(bold), 줄 간격 150%
 */
const titleVariants = cva(
  // Base styles (applied to all variants)
  ['font-bold', 'leading-[150%]'].join(' '),
  {
    variants: {
      /**
       * Level - 제목 레벨 (h1~h5)
       * KRDS 가이드 기준 폰트 크기 적용
       */
      level: {
        h1: ['text-[28px]', 'md:text-[40px]'].join(' '), // xlarge
        h2: ['text-[24px]', 'md:text-[32px]'].join(' '), // large
        h3: ['text-[22px]', 'md:text-[24px]'].join(' '), // medium
        h4: 'text-[19px]', // small
        h5: 'text-[17px]', // xsmall
      },
    },
    defaultVariants: {
      level: 'h2',
    },
  }
);

/**
 * Title Component Props
 */
export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  /**
   * 제목 레벨 (h1~h5)
   * @default "h2"
   */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

  /**
   * 제목 텍스트
   */
  children: React.ReactNode;
}

/**
 * Title Component
 *
 * KRDS 타이포그래피 가이드를 따르는 제목 컴포넌트
 *
 * @example
 * ```tsx
 * <Title level="h1">페이지 제목</Title>
 * <Title level="h2">섹션 제목</Title>
 * <Title level="h3">세부 제목</Title>
 * ```
 */
export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, level = 'h2', children, ...props }, ref) => {
    const Component = level as keyof JSX.IntrinsicElements;

    return (
      <Component
        ref={ref as any}
        className={cn(titleVariants({ level }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Title.displayName = 'Title';
