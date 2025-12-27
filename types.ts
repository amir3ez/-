
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  additionalImages?: string[];
  description: string;
  client?: string;
  goals?: string;
  technologies?: string[];
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export type Category = 'الكل' | 'هوية بصرية' | 'مواقع' | 'إعلانات' | 'مونتاج';
