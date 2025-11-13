'use client';

import { Heading, Body } from '@hanui/react';

import { Stack, VStack, HStack } from '@hanui/react';
import { ComponentPreview } from '@/components/content/ComponentPreview';
import { CodeBlock } from '@/components/content/CodeBlock';
import { Installation } from '@/components/content/Installation';
import { PageHeader } from '@/components/content/PageHeader';
import { PageSection } from '@/components/content/PageSection';

export default function StackPage() {
  return (
    <>
      <PageHeader
        title="Stack, VStack, HStack"
        description="KRDS 간격 시스템을 준수하는 유연한 레이아웃 컴포넌트. 수직(VStack), 수평(HStack) 스택을 제공합니다."
      />

      <PageSection>
        <ComponentPreview>
          <Stack spacing="md">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
              첫 번째 아이템
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
              두 번째 아이템
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
              세 번째 아이템
            </div>
          </Stack>
        </ComponentPreview>
      </PageSection>

      {/* Overview */}
      <PageSection>
        <Stack spacing="heading-content">
          <Heading level="h2">개요</Heading>
          <Body className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Stack 계열 컴포넌트는 요소들을 수직 또는 수평으로 정렬하고{' '}
            <strong>KRDS(한국형 웹 콘텐츠 접근성 지침)</strong>의 간격 기준을
            준수하는 레이아웃 컴포넌트입니다.
          </Body>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Stack</strong>: 기본 수직 레이아웃 (direction prop으로
              제어 가능)
            </li>
            <li>
              <strong>VStack</strong>: 명시적 수직 레이아웃
            </li>
            <li>
              <strong>HStack</strong>: 명시적 수평 레이아웃
            </li>
          </ul>
        </Stack>
      </PageSection>

      {/* Installation */}
      <PageSection>
        <Installation componentName="stack" />
      </PageSection>

      {/* Spacing Guide */}
      <PageSection>
        <Stack spacing="heading-content">
          <Heading level="h2">Spacing 선택 가이드</Heading>
          <Body>
            요소 간 <strong>관계</strong>에 따라 spacing을 선택하세요. HTML
            태그가 아닌 맥락으로 생각하면 쉽습니다.
          </Body>
        </Stack>

        <Stack spacing="content-loose" className="mt-2 md:mt-4">
          <Stack spacing="heading-tight">
            <Heading level="h3">Section Level - 큰 블록 구분</Heading>
            <Body>주요 섹션을 구분할 때 사용합니다.</Body>
            <ComponentPreview>
              <Stack spacing="section" className="w-full">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded">
                  <h2 className="font-bold text-lg mb-2">첫 번째 섹션</h2>
                  <p>주요 내용...</p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded">
                  <h2 className="font-bold text-lg mb-2">두 번째 섹션</h2>
                  <p>주요 내용...</p>
                </div>
              </Stack>
            </ComponentPreview>
            <CodeBlock
              code={`<Stack spacing="section">  {/* 40px/80px */}
  <Section1 />
  <Section2 />
</Stack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>

          <Stack spacing="heading-tight">
            <Heading level="h3">Heading-Content - 제목과 설명</Heading>
            <Body>제목과 바로 아래 설명/내용이 긴밀할 때 사용합니다.</Body>
            <ComponentPreview>
              <Stack spacing="heading-content">
                <h3 className="font-bold text-lg">제품 소개</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  이 제품은 KRDS 기반으로 설계된 디자인 시스템입니다.
                </p>
              </Stack>
            </ComponentPreview>
            <CodeBlock
              code={`<Stack spacing="heading-content">  {/* 12px/20px */}
  <Heading>제목</Heading>
  <Body>설명...</Body>
</Stack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>

          <Stack spacing="heading-tight">
            <Heading level="h3">Content - 같은 레벨 요소</Heading>
            <Body>
              문단, 카드, 리스트 아이템 등 동등한 요소들 사이에 사용합니다.
            </Body>
            <ComponentPreview>
              <Stack spacing="content">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
                  카드 1
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
                  카드 2
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
                  카드 3
                </div>
              </Stack>
            </ComponentPreview>
            <CodeBlock
              code={`<Stack spacing="content">  {/* 16px/24px */}
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Stack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>

          <Stack spacing="heading-tight">
            <Heading level="h3">Inline - 작은 요소</Heading>
            <Body>태그, 칩, 배지 같은 작은 요소들을 나열할 때 사용합니다.</Body>
            <ComponentPreview>
              <HStack spacing="inline" className="flex-wrap">
                <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm">
                  Tailwind
                </span>
              </HStack>
            </ComponentPreview>
            <CodeBlock
              code={`<HStack spacing="inline">  {/* 8px/12px */}
  <Tag>React</Tag>
  <Tag>TypeScript</Tag>
  <Tag>Tailwind</Tag>
</HStack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>
        </Stack>
      </PageSection>

      {/* Usage */}
      <PageSection>
        <Stack spacing="heading-content">
          <Heading level="h2">Usage</Heading>
          <Body>Stack, VStack, HStack 세 가지 컴포넌트를 제공합니다:</Body>
        </Stack>

        <Stack spacing="content-loose" className="mt-2 md:mt-4">
          <Stack spacing="heading-tight">
            <Heading level="h3">Stack - 기본 수직 레이아웃</Heading>
            <CodeBlock
              code={`import { Stack } from '@hanui/react'

<Stack spacing="content">
  <div>첫 번째</div>
  <div>두 번째</div>
</Stack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>

          <Stack spacing="heading-tight">
            <Heading level="h3">VStack - 명시적 수직 레이아웃</Heading>
            <CodeBlock
              code={`import { VStack } from '@hanui/react'

<VStack spacing="content">
  <div>위</div>
  <div>아래</div>
</VStack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>

          <Stack spacing="heading-tight">
            <Heading level="h3">HStack - 수평 레이아웃</Heading>
            <CodeBlock
              code={`import { HStack } from '@hanui/react'

<HStack spacing="inline">
  <div>왼쪽</div>
  <div>오른쪽</div>
</HStack>`}
              language="tsx"
              showLineNumbers={false}
            />
          </Stack>
        </Stack>
      </PageSection>

      {/* Examples */}
      <PageSection>
        <Heading level="h2">Examples</Heading>

        <Stack spacing="content-loose" className="mt-2 md:mt-4">
          {/* VStack */}
          <Stack spacing="heading-tight">
            <Heading level="h3">VStack - 수직 스택</Heading>
            <div>
              <ComponentPreview>
                <VStack spacing="md">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded w-full">
                    첫 번째 아이템
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded w-full">
                    두 번째 아이템
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded w-full">
                    세 번째 아이템
                  </div>
                </VStack>
              </ComponentPreview>
              <div className="mt-4">
                <CodeBlock
                  code={`<VStack spacing="md">
  <div>첫 번째 아이템</div>
  <div>두 번째 아이템</div>
  <div>세 번째 아이템</div>
</VStack>`}
                  language="tsx"
                  showLineNumbers={false}
                />
              </div>
            </div>
          </Stack>

          {/* HStack */}
          <Stack spacing="heading-tight">
            <Heading level="h3">HStack - 수평 스택</Heading>
            <div>
              <ComponentPreview>
                <HStack spacing="md">
                  <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded">
                    왼쪽
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded">
                    중앙
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded">
                    오른쪽
                  </div>
                </HStack>
              </ComponentPreview>
              <div className="mt-4">
                <CodeBlock
                  code={`<HStack spacing="md">
  <div>왼쪽</div>
  <div>중앙</div>
  <div>오른쪽</div>
</HStack>`}
                  language="tsx"
                  showLineNumbers={false}
                />
              </div>
            </div>
          </Stack>

          {/* Heading Spacing */}
          <Stack spacing="heading-tight">
            <Heading level="h3">Heading Spacing (heading-loose)</Heading>
            <div>
              <ComponentPreview>
                <Stack spacing="heading-loose">
                  <h1 className="text-3xl font-bold">메인 제목</h1>
                  <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
                    부제목
                  </h2>
                </Stack>
              </ComponentPreview>
              <div className="mt-4">
                <CodeBlock
                  code={`<Stack spacing="heading-loose">  {/* 20px/24px */}
  <h1>메인 제목</h1>
  <h2>부제목</h2>
</Stack>`}
                  language="tsx"
                  showLineNumbers={false}
                />
              </div>
            </div>
          </Stack>

          {/* Form */}
          <Stack spacing="heading-tight">
            <Heading level="h3">Form</Heading>
            <div>
              <ComponentPreview>
                <Stack spacing="form">
                  <HStack>
                    <label className="block text-sm font-medium mb-1">
                      이름
                    </label>
                    <div className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2">
                      Input
                    </div>
                  </HStack>
                  <HStack>
                    <label className="block text-sm font-medium mb-1">
                      이메일
                    </label>
                    <div className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2">
                      Input
                    </div>
                  </HStack>
                </Stack>
              </ComponentPreview>
              <div className="mt-4">
                <CodeBlock
                  code={`<Stack spacing="form">
  <div>
    <label>이름</label>
    <input type="text" />
  </div>
  <div>
    <label>이메일</label>
    <input type="email" />
  </div>
</Stack>`}
                  language="tsx"
                  showLineNumbers={false}
                />
              </div>
            </div>
          </Stack>

          {/* Alignment */}
          <Stack spacing="heading-tight">
            <Heading level="h3">Alignment</Heading>
            <div>
              <ComponentPreview>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold mb-2">
                      Center Alignment
                    </p>
                    <Stack
                      spacing="sm"
                      align="center"
                      className="border border-gray-300 dark:border-gray-700 rounded p-4"
                    >
                      <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded">
                        중앙 정렬
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded">
                        아이템
                      </div>
                    </Stack>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">
                      Space Between (HStack)
                    </p>
                    <HStack
                      justify="between"
                      className="border border-gray-300 dark:border-gray-700 rounded p-4"
                    >
                      <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded">
                        왼쪽
                      </div>
                      <div className="bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded">
                        오른쪽
                      </div>
                    </HStack>
                  </div>
                </div>
              </ComponentPreview>
              <div className="mt-4">
                <CodeBlock
                  code={`// 중앙 정렬
<VStack align="center">
  <div>중앙 정렬</div>
  <div>아이템</div>
</VStack>

// Space Between (수평)
<HStack justify="between">
  <div>왼쪽</div>
  <div>오른쪽</div>
</HStack>`}
                  language="tsx"
                  showLineNumbers={false}
                />
              </div>
            </div>
          </Stack>
        </Stack>
      </PageSection>

      {/* API Reference */}
      <PageSection>
        <Stack spacing="heading-content">
          <Heading level="h2">API Reference</Heading>

          <Body>
            <strong>Stack</strong>, <strong>VStack</strong>,{' '}
            <strong>HStack</strong> 모두 동일한 props를 지원합니다. VStack과
            HStack은 direction prop이 고정되어 있습니다.
          </Body>
        </Stack>

        <div className="overflow-x-auto mt-2 md:mt-4">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                  Prop
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                  Type
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                  Default
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  spacing
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  StackSpacing
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;md&apos;
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                  간격 프리셋
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  direction
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;vertical&apos; | &apos;horizontal&apos;
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;vertical&apos;
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                  스택 방향 (Stack만 사용 가능)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  align
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;start&apos; | &apos;center&apos; | &apos;end&apos; |
                  &apos;stretch&apos;
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  - (HStack: &apos;center&apos;)
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                  교차축 정렬
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  justify
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;start&apos; | &apos;center&apos; | &apos;end&apos; |
                  &apos;between&apos; | &apos;around&apos;
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  -
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                  주축 정렬
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  as
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;div&apos; | &apos;section&apos; | &apos;nav&apos; |
                  &apos;ul&apos; | ...
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                  &apos;div&apos;
                </td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                  렌더링할 HTML 요소
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 md:mt-16">
          <Stack spacing="heading-content">
            <Heading level="h3">Spacing Options</Heading>
            <Body className="text-gray-700 dark:text-gray-300">
              맥락 기반 KRDS 간격 시스템 (Context-based Spacing)
            </Body>
          </Stack>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                    값
                  </th>
                  <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                    간격
                  </th>
                  <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-700">
                    용도
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Header & Navigation
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    header-breadcrumb
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px (Mobile) / 24px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    헤더와 브레드크럼 간격
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Layout Spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    left-contents
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    0px (Mobile) / 64px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    왼쪽 사이드바와 콘텐츠
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    contents-right
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    0px (Mobile) / 40px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    콘텐츠와 오른쪽 사이드바
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    contents-footer
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    40px (Mobile) / 64px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    콘텐츠와 푸터
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Heading Hierarchy
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h1-h2
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    32px (Mobile) / 48px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H1과 H2 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h2-h2
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    40px (Mobile) / 80px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H2와 H2 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h2-h3
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    24px (Mobile) / 40px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H2와 H3 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h3-h3
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    32px (Mobile) / 64px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H3과 H3 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h3-h4
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px (Mobile) / 24px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H3과 H4 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h4-h4
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    24px (Mobile) / 40px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H4와 H4 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h4-h5
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    12px (Mobile) / 16px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H4와 H5 사이
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    h5-h5
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px (Mobile) / 32px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    H5와 H5 사이
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Title to Body Spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    title-body-small
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    8px (Mobile) / 16px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    제목과 본문 (작은 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    title-body-medium
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    12px (Mobile) / 20px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    제목과 본문 (중간 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    title-body-large
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    20px (Mobile) / 24px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    제목과 본문 (큰 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    breadcrumb-h1
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    32px (Mobile) / 40px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    브레드크럼과 H1
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Text Spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    text-text-large
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px (Mobile) / 20px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    텍스트 단락 (큰 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    text-text-medium
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    12px (Mobile) / 16px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    텍스트 단락 (중간 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    text-text-small
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    10px (Mobile) / 12px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    텍스트 단락 (작은 간격)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Image to Text Spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    image-text-small
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px (Mobile) / 20px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    이미지와 텍스트 (작은 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    image-text-medium
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    20px (Mobile) / 24px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    이미지와 텍스트 (중간 간격)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    image-text-large
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    24px (Mobile) / 32px (PC)
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    이미지와 텍스트 (큰 간격)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Component Spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    form
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    폼 필드 간격
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    card-list
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    24px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    카드 리스트
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    input-group
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    8px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    인풋 그룹 (라벨-입력)
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td
                    colSpan={3}
                    className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-semibold text-sm"
                  >
                    Generic Spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    xs
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    8px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    매우 작은 간격
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    sm
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    12px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    작은 간격
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    md
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    16px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    중간 간격 (기본값)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    lg
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    24px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    큰 간격
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    xl
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    32px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    매우 큰 간격
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    2xl
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    40px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    2배 큰 간격
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 font-mono text-sm">
                    3xl
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    64px
                  </td>
                  <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-sm">
                    3배 큰 간격
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PageSection>
    </>
  );
}
