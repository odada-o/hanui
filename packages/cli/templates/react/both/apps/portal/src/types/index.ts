export interface Notice {
  id: number;
  title: string;
  date: string;
  views: number;
  content: string;
}

export interface CivilComplaint {
  name: string;
  email: string;
  phone: string;
  category: string;
  title: string;
  content: string;
  files?: File[];
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
}
