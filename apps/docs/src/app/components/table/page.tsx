'use client';

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@hanui/react';
import Link from 'next/link';

export default function TablePage() {
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
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-60 dark:text-gray-40 mb-4">
            <Link href="/components" className="hover:text-primary-60">
              컴포넌트
            </Link>
            {' / '}
            <span>Table</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">Table</h1>
          <p className="text-xl text-gray-60 dark:text-gray-40 mb-8">
            데이터를 구조화하여 표시하는 KRDS 기반 테이블 컴포넌트
          </p>

          {/* Quick Start */}
          <section className="mb-12">
            <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>김철수</TableCell>
                    <TableCell>개발자</TableCell>
                    <TableCell>활성</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>이영희</TableCell>
                    <TableCell>디자이너</TableCell>
                    <TableCell>활성</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
              <code>{`import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@hanui/react';

export default () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>이름</TableHead>
        <TableHead>역할</TableHead>
        <TableHead>상태</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>김철수</TableCell>
        <TableCell>개발자</TableCell>
        <TableCell>활성</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);`}</code>
            </pre>
          </section>

          {/* Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Examples</h2>

            <div className="space-y-12">
              {/* Basic Table */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Basic Table</h3>
                <p className="text-gray-60 dark:text-gray-40 mb-4">
                  기본 테이블 구조입니다. Header, Body, Footer로 구성됩니다.
                </p>
                <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>제품명</TableHead>
                        <TableHead>카테고리</TableHead>
                        <TableHead>가격</TableHead>
                        <TableHead>재고</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>노트북</TableCell>
                        <TableCell>전자제품</TableCell>
                        <TableCell>1,500,000원</TableCell>
                        <TableCell>23</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>마우스</TableCell>
                        <TableCell>전자제품</TableCell>
                        <TableCell>35,000원</TableCell>
                        <TableCell>156</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>키보드</TableCell>
                        <TableCell>전자제품</TableCell>
                        <TableCell>89,000원</TableCell>
                        <TableCell>87</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                  <code>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>제품명</TableHead>
      <TableHead>카테고리</TableHead>
      <TableHead>가격</TableHead>
      <TableHead>재고</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>노트북</TableCell>
      <TableCell>전자제품</TableCell>
      <TableCell>1,500,000원</TableCell>
      <TableCell>23</TableCell>
    </TableRow>
    {/* ... */}
  </TableBody>
</Table>`}</code>
                </pre>
              </div>

              {/* With Caption */}
              <div>
                <h3 className="text-xl font-semibold mb-4">With Caption</h3>
                <p className="text-gray-60 dark:text-gray-40 mb-4">
                  테이블에 설명 캡션을 추가할 수 있습니다.
                </p>
                <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg overflow-x-auto">
                  <Table>
                    <TableCaption>2024년 1분기 매출 현황</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>월</TableHead>
                        <TableHead>매출</TableHead>
                        <TableHead>성장률</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1월</TableCell>
                        <TableCell>1,200만원</TableCell>
                        <TableCell>+15%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2월</TableCell>
                        <TableCell>1,450만원</TableCell>
                        <TableCell>+20.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3월</TableCell>
                        <TableCell>1,680만원</TableCell>
                        <TableCell>+15.9%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                  <code>{`<Table>
  <TableCaption>2024년 1분기 매출 현황</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>월</TableHead>
      <TableHead>매출</TableHead>
      <TableHead>성장률</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* ... */}
  </TableBody>
</Table>`}</code>
                </pre>
              </div>

              {/* With Footer */}
              <div>
                <h3 className="text-xl font-semibold mb-4">With Footer</h3>
                <p className="text-gray-60 dark:text-gray-40 mb-4">
                  합계나 요약 정보를 표시하는 Footer를 추가할 수 있습니다.
                </p>
                <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>항목</TableHead>
                        <TableHead>수량</TableHead>
                        <TableHead>단가</TableHead>
                        <TableHead>금액</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>상품 A</TableCell>
                        <TableCell>10</TableCell>
                        <TableCell>5,000원</TableCell>
                        <TableCell>50,000원</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>상품 B</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>12,000원</TableCell>
                        <TableCell>60,000원</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>상품 C</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>30,000원</TableCell>
                        <TableCell>90,000원</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3}>합계</TableCell>
                        <TableCell>200,000원</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </div>
                <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                  <code>{`<Table>
  <TableHeader>
    {/* ... */}
  </TableHeader>
  <TableBody>
    {/* ... */}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>합계</TableCell>
      <TableCell>200,000원</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}</code>
                </pre>
              </div>

              {/* Striped Rows */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Striped Rows</h3>
                <p className="text-gray-60 dark:text-gray-40 mb-4">
                  교차 배경색을 적용하여 가독성을 높일 수 있습니다.
                </p>
                <div className="p-6 bg-gray-5 dark:bg-gray-90 rounded-lg overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>순번</TableHead>
                        <TableHead>이름</TableHead>
                        <TableHead>부서</TableHead>
                        <TableHead>직급</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody striped>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>김철수</TableCell>
                        <TableCell>개발팀</TableCell>
                        <TableCell>팀장</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>이영희</TableCell>
                        <TableCell>디자인팀</TableCell>
                        <TableCell>팀장</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>박민수</TableCell>
                        <TableCell>기획팀</TableCell>
                        <TableCell>대리</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>정수진</TableCell>
                        <TableCell>마케팅팀</TableCell>
                        <TableCell>과장</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>최동욱</TableCell>
                        <TableCell>개발팀</TableCell>
                        <TableCell>주임</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <pre className="mt-4 p-4 bg-white dark:bg-gray-95 rounded overflow-x-auto text-sm">
                  <code>{`<Table>
  <TableHeader>
    {/* ... */}
  </TableHeader>
  <TableBody striped>
    <TableRow>
      {/* ... */}
    </TableRow>
    {/* ... */}
  </TableBody>
</Table>`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">API Reference</h2>

            <div className="space-y-8">
              {/* Table */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Table</h3>
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
                        <td className="py-3 px-4 font-mono text-sm">
                          children
                        </td>
                        <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                          React.ReactNode
                        </td>
                        <td className="py-3 px-4 font-mono text-sm">-</td>
                        <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                          테이블 내용
                        </td>
                      </tr>
                      <tr className="border-b border-gray-20 dark:border-gray-80">
                        <td className="py-3 px-4 font-mono text-sm">
                          className
                        </td>
                        <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                          string
                        </td>
                        <td className="py-3 px-4 font-mono text-sm">-</td>
                        <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                          추가 CSS 클래스
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TableBody */}
              <div>
                <h3 className="text-xl font-semibold mb-4">TableBody</h3>
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
                        <td className="py-3 px-4 font-mono text-sm">striped</td>
                        <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                          boolean
                        </td>
                        <td className="py-3 px-4 font-mono text-sm">false</td>
                        <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                          교차 배경색 적용
                        </td>
                      </tr>
                      <tr className="border-b border-gray-20 dark:border-gray-80">
                        <td className="py-3 px-4 font-mono text-sm">
                          children
                        </td>
                        <td className="py-3 px-4 font-mono text-sm text-gray-60 dark:text-gray-40">
                          React.ReactNode
                        </td>
                        <td className="py-3 px-4 font-mono text-sm">-</td>
                        <td className="py-3 px-4 text-gray-60 dark:text-gray-40">
                          테이블 본문 내용
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Components */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Other Components</h3>
                <p className="text-gray-60 dark:text-gray-40 mb-4">
                  TableHeader, TableFooter, TableRow, TableHead, TableCell,
                  TableCaption은 기본 HTML 속성과 children을 받습니다.
                </p>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Accessibility</h2>
            <div className="space-y-4 text-gray-70 dark:text-gray-30">
              <p>이 컴포넌트는 WCAG 2.1 AA 기준을 준수합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>시맨틱 HTML:</strong> 적절한 table, thead, tbody,
                  tfoot, tr, th, td 태그 사용
                </li>
                <li>
                  <strong>헤더 셀:</strong> TableHead는 scope 속성으로 접근성
                  향상
                </li>
                <li>
                  <strong>캡션:</strong> TableCaption으로 테이블 설명 제공
                </li>
                <li>
                  <strong>키보드 네비게이션:</strong> 테이블 내 요소는 키보드로
                  탐색 가능
                </li>
                <li>
                  <strong>색상 대비:</strong> KRDS 색상 팔레트로 충분한 대비
                  보장
                </li>
                <li>
                  <strong>반응형 디자인:</strong> 작은 화면에서는 스크롤 가능
                </li>
              </ul>
            </div>
          </section>
        </div>
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
