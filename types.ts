
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  projectImages?: string[]; // مصفوفة لصور المشروع الإضافية
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
