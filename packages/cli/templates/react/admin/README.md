# HANUI Admin Template

A production-ready admin dashboard template built with React, TypeScript, Vite, and HANUI components.

## Features

- **Authentication System**: Login/logout with protected routes
- **Dashboard**: Summary cards, charts, and recent activity feed
- **Notice Management**: Full CRUD operations with filtering, sorting, and pagination
- **User Management**: User list with search, filtering, and status management
- **Responsive Design**: Mobile-friendly with collapsible sidebar
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Toast Notifications**: Real-time feedback for user actions
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: React 18, Vite, React Router, Recharts

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3001`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout with sidebar and topbar
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── TopBar.tsx      # Top navigation bar
│   └── Toast.tsx       # Toast notification system
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication state
│   └── ToastContext.tsx # Toast notifications
├── pages/              # Page components
│   ├── Login.tsx       # Login page
│   ├── Dashboard.tsx   # Dashboard with stats and charts
│   ├── NoticeList.tsx  # Notice list with table
│   ├── NoticeForm.tsx  # Create/Edit notice form
│   └── UserManagement.tsx # User management
├── mock/               # Mock data
│   ├── notices.json    # Sample notices
│   ├── users.json      # Sample users
│   └── stats.json      # Dashboard statistics
├── types/              # TypeScript type definitions
│   └── index.ts        # All type definitions
├── App.tsx             # Main app with routing
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Authentication

### Demo Login Credentials

- **Email**: Any valid email format (e.g., admin@example.com)
- **Password**: `admin123`

The authentication is mocked for demonstration purposes. In a production environment, you would replace the `AuthContext` with real API calls.

## Pages Overview

### 1. Login (`/admin/login`)

- Email and password inputs
- Form validation
- Automatic redirect to dashboard after successful login

### 2. Dashboard (`/admin/dashboard`)

- Summary cards showing key metrics
- Bar chart displaying monthly statistics
- Recent activity feed with user actions

### 3. Notice List (`/admin/notice`)

- Data table with sorting and filtering
- Bulk selection with checkboxes
- Pagination support
- Status filters (all, published, draft, archived)
- Edit and delete actions per row
- Search functionality

### 4. Notice Form (`/admin/notice/new` and `/admin/notice/:id/edit`)

- Create new notices or edit existing ones
- Form validation
- Title, content, author, and status fields
- Save and cancel actions

### 5. User Management (`/admin/users`)

- User list with comprehensive information
- Search by name, email, or department
- Filter by status (active/inactive) and role
- Toggle user status
- Pagination support
- User statistics display

## Key Features

### Responsive Sidebar

- Desktop: Always visible (260px width)
- Mobile: Collapsible with hamburger menu
- 2-depth navigation structure

### Toast Notifications

- Success, error, info, and warning types
- Auto-dismiss after 3 seconds
- Accessible with ARIA labels
- Fixed position at top-right

### Data Tables

- Sortable columns
- Filterable data
- Pagination
- Bulk actions
- Responsive on mobile

### Accessibility

- ARIA labels and roles throughout
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Skip-to-main-content link

## Customization

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Sidebar.tsx`

### Modifying Mock Data

Edit JSON files in `src/mock/` directory to customize demo data.

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Co-located `.css` files
- Uses HANUI design tokens for consistency

### Connecting to Real API

Replace mock data imports with API calls:

```typescript
// Instead of:
import noticesData from '@/mock/notices.json';

// Use:
const { data: notices } = await fetch('/api/notices');
```

Update `AuthContext` to use real authentication endpoints.

## HANUI Components Used

- **Button**: Primary, secondary, and small variants
- **Input**: Text and password inputs with validation
- **Select**: Dropdown menus for filters
- **Card**: Container component for content sections
- **Table**: Data tables with sortable columns
- **Pagination**: Page navigation
- **Modal**: Confirmation dialogs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting with React Router
- Lazy loading for large data sets
- Optimized re-renders with useMemo
- Vite for fast builds and HMR

## Security Notes

This template includes mock authentication for demonstration. For production use:

1. Implement proper backend authentication
2. Use secure token storage (httpOnly cookies)
3. Add CSRF protection
4. Implement proper session management
5. Validate all user inputs server-side
6. Use HTTPS in production

## License

MIT

## Support

For issues and questions, please refer to the HANUI documentation or open an issue in the repository.
