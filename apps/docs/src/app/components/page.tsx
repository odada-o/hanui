import Link from 'next/link';

const components = [
  {
    name: 'Button',
    href: '/components/button',
    updated: true,
  },
  {
    name: 'Input',
    href: '/components/input',
    updated: true,
  },
  {
    name: 'Select',
    href: '/components/select',
    updated: true,
  },
  {
    name: 'Card',
    href: '/components/card',
    updated: false,
  },
  {
    name: 'Table',
    href: '/components/table',
    updated: false,
  },
  {
    name: 'Modal',
    href: '/components/modal',
    updated: false,
  },
  {
    name: 'Breadcrumb',
    href: '/components/breadcrumb',
    updated: false,
  },
  {
    name: 'Pagination',
    href: '/components/pagination',
    updated: false,
  },
  {
    name: 'File Upload',
    href: '/components/file-upload',
    updated: false,
  },
];

const layoutComponents = [
  {
    name: 'Container',
    href: '/layout/container',
    updated: true,
  },
];

export default function ComponentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Here you can find all the components available in the library. We are
          working on adding more components.
        </p>
      </div>

      {/* Layout Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Layout</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {layoutComponents.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="relative block rounded-lg transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-gray-900 dark:text-gray-100 group-hover:underline transition-all">
                  {component.name}
                </span>
                {component.updated && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Components Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {components.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="relative block rounded-lg transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-medium text-gray-900 dark:text-gray-100 group-hover:underline transition-all">
                  {component.name}
                </span>
                {component.updated && (
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
