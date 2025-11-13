'use client';

import { Pagination } from '@hanui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [currentPage3, setCurrentPage3] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-20 dark:border-gray-80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary-60">HANUI</h1>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-70 dark:text-gray-30 hover:text-primary-60 transition"
            >
              홈
            </Link>
            <Link href="/components" className="text-primary-60 font-semibold">
              컴포넌트
            </Link>
            <Link
              href="https://github.com/odada-o/hanui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-70 dark:text-gray-30 hover:text-primary-60 transition"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-60 dark:text-gray-40 mb-4">
          <Link href="/components" className="hover:text-primary-60">
            컴포넌트
          </Link>
          {' / '}
          <span>Pagination</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">Pagination</h1>
        <p className="text-xl text-gray-60 dark:text-gray-40 mb-8">
          페이지 네비게이션을 제공하는 KRDS 기반 페이지네이션 컴포넌트
        </p>

        {/* Quick Start */}
        <section className="mb-12">
          <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg">
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>
            <p className="text-center mt-4 text-sm text-gray-60 dark:text-gray-40">
              현재 페이지: {currentPage}
            </p>
          </div>
          <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
            <code>{`import { Pagination } from '@hanui/react';
import { useState } from 'react';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={setCurrentPage}
    />
  );
};`}</code>
          </pre>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Examples</h2>

          <div className="space-y-12">
            {/* Basic Pagination */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Basic Pagination</h3>
              <p className="text-gray-60 dark:text-gray-40 mb-4">
                기본 페이지네이션입니다. 이전/다음 버튼과 페이지 번호를
                표시합니다.
              </p>
              <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg">
                <div className="flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={20}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
              <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                <code>{`<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
/>`}</code>
              </pre>
            </div>

            {/* With Sibling Count */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Sibling Count</h3>
              <p className="text-gray-60 dark:text-gray-40 mb-4">
                siblingCount로 현재 페이지 양쪽에 표시할 페이지 수를 조정할 수
                있습니다. 기본값은 5입니다.
              </p>
              <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-60 dark:text-gray-40 mb-2">
                      siblingCount = 3
                    </p>
                    <div className="flex justify-center">
                      <Pagination
                        currentPage={currentPage2}
                        totalPages={20}
                        onPageChange={setCurrentPage2}
                        siblingCount={3}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-60 dark:text-gray-40 mb-2">
                      siblingCount = 7
                    </p>
                    <div className="flex justify-center">
                      <Pagination
                        currentPage={currentPage3}
                        totalPages={20}
                        onPageChange={setCurrentPage3}
                        siblingCount={7}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                <code>{`<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  siblingCount={3}
/>

<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  siblingCount={7}
/>`}</code>
              </pre>
            </div>

            {/* Few Pages */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Few Pages</h3>
              <p className="text-gray-60 dark:text-gray-40 mb-4">
                페이지가 적을 때는 모든 페이지 번호가 표시됩니다.
              </p>
              <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg">
                <div className="flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={5}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
              <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                <code>{`<Pagination
  currentPage={currentPage}
  totalPages={5}
  onPageChange={setCurrentPage}
/>`}</code>
              </pre>
            </div>

            {/* Many Pages */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Many Pages</h3>
              <p className="text-gray-60 dark:text-gray-40 mb-4">
                페이지가 많을 때는 생략 부호(...)로 표시됩니다.
              </p>
              <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg">
                <div className="flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={100}
                    onPageChange={setCurrentPage}
                  />
                </div>
                <p className="text-center mt-4 text-sm text-gray-60 dark:text-gray-40">
                  총 100페이지 중 {currentPage}페이지
                </p>
              </div>
              <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                <code>{`<Pagination
  currentPage={currentPage}
  totalPages={100}
  onPageChange={setCurrentPage}
/>`}</code>
              </pre>
            </div>

            {/* Practical Example */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Practical Example</h3>
              <p className="text-gray-60 dark:text-gray-40 mb-4">
                실제 데이터 목록과 함께 사용하는 예제입니다.
              </p>
              <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg">
                <div className="space-y-4">
                  {/* Mock Data List */}
                  <div className="space-y-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white dark:bg-gray-95 rounded border border-gray-20 dark:border-gray-80"
                      >
                        <h4 className="font-semibold">
                          항목 {(currentPage - 1) * 5 + i + 1}
                        </h4>
                        <p className="text-sm text-gray-60 dark:text-gray-40 mt-1">
                          페이지 {currentPage}의 항목입니다.
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center pt-4">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={10}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
              </div>
              <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                <code>{`const itemsPerPage = 5;
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = allItems.slice(startIndex, endIndex);

return (
  <div>
    {currentItems.map(item => (
      <div key={item.id}>{item.name}</div>
    ))}

    <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(allItems.length / itemsPerPage)}
      onPageChange={setCurrentPage}
    />
  </div>
);`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">API Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-20 dark:border-gray-80">
                  <th className="text-left py-3 px-4 font-semibold w-1/5">
                    Prop
                  </th>
                  <th className="text-left py-3 px-4 font-semibold w-2/5">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 font-semibold w-1/6">
                    Default
                  </th>
                  <th className="text-left py-3 px-4 font-semibold w-1/4">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-20 dark:border-gray-80">
                  <td className="py-3 px-4 font-mono text-sm">currentPage</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                    number
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                    현재 페이지 번호 (1부터 시작)
                  </td>
                </tr>
                <tr className="border-b border-gray-20 dark:border-gray-80">
                  <td className="py-3 px-4 font-mono text-sm">totalPages</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                    number
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                    전체 페이지 수
                  </td>
                </tr>
                <tr className="border-b border-gray-20 dark:border-gray-80">
                  <td className="py-3 px-4 font-mono text-sm">onPageChange</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                    (page: number) =&gt; void
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">-</td>
                  <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                    페이지 변경 핸들러
                  </td>
                </tr>
                <tr className="border-b border-gray-20 dark:border-gray-80">
                  <td className="py-3 px-4 font-mono text-sm">siblingCount</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                    number
                  </td>
                  <td className="py-3 px-4 font-mono text-sm">5</td>
                  <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                    현재 페이지 양쪽에 표시할 페이지 수
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <div className="space-y-4 text-gray-70 dark:text-gray-30">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>URL 동기화:</strong> 페이지 번호를 URL 쿼리 파라미터와
                동기화하면 북마크와 공유가 가능합니다
              </li>
              <li>
                <strong>로딩 상태:</strong> 페이지 변경 시 로딩 상태를 표시하여
                사용자에게 피드백을 제공하세요
              </li>
              <li>
                <strong>스크롤 위치:</strong> 페이지 변경 시 목록의 상단으로
                스크롤하는 것을 고려하세요
              </li>
              <li>
                <strong>siblingCount 조정:</strong> 화면 크기에 따라
                siblingCount를 조정하면 반응형 UI를 만들 수 있습니다
              </li>
              <li>
                <strong>총 항목 수 표시:</strong> 총 항목 수와 현재 범위를 함께
                표시하면 사용자에게 더 많은 정보를 제공할 수 있습니다
              </li>
            </ul>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Accessibility</h2>
          <div className="space-y-4 text-gray-70 dark:text-gray-30">
            <p>이 컴포넌트는 WCAG 2.1 AA 기준을 준수합니다:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>시맨틱 마크업:</strong> nav 태그와 적절한 ARIA 레이블
                사용
              </li>
              <li>
                <strong>키보드 네비게이션:</strong> Tab 키로 페이지 간 이동,
                Enter/Space로 선택
              </li>
              <li>
                <strong>포커스 표시:</strong> 현재 포커스된 페이지 버튼 명확히
                표시
              </li>
              <li>
                <strong>ARIA 속성:</strong> aria-current=&quot;page&quot;로 현재
                페이지 표시
              </li>
              <li>
                <strong>최소 터치 영역:</strong> 모든 버튼은 최소 40px 이상의
                터치 영역 보장
              </li>
              <li>
                <strong>비활성화 상태:</strong> 첫 페이지에서 이전 버튼, 마지막
                페이지에서 다음 버튼 비활성화
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-20 dark:border-gray-80 py-8">
        <div className="container mx-auto px-4 text-center text-gray-60 dark:text-gray-40">
          <p>MIT License · KRDS 기반 공공 웹 UI 컴포넌트 라이브러리</p>
        </div>
      </footer>
    </div>
  );
}
