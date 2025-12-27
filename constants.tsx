
import React from 'react';
import { 
  Video, 
  Palette, 
  Heart, 
  Megaphone, 
  Code, 
  Layout,
  Instagram,
  Facebook,
  Phone
} from 'lucide-react';
import { PortfolioItem } from './types';

export const LOGO_URL = 'https://i.ibb.co/wh4fj5FC/image.png'; 
export const PROFILE_IMAGE_URL = 'https://i.ibb.co/1G3xDGV3/Gemini-Generated-Image-7bcw597bcw597bcw.png'; 

export const COLORS = {
  primary: '#570F80',
  charcoal: '#380F48',
  mediumPurple: '#380F64',
  deepestDark: '#1A0F2C',
};

export const PARTNERS = [
  { id: 1, name: 'Partner 1', logo: 'https://i.ibb.co/gMSZKtTZ/2.png' },
  { id: 2, name: 'Partner 2', logo: 'https://i.ibb.co/mCH4bvYb/image.png' },
  { id: 3, name: 'Partner 3', logo: 'https://i.ibb.co/6cktLXhn/image.png' },
  { id: 4, name: 'Partner 4', logo: 'https://i.ibb.co/v4hcnnkY/2.png' },
  { id: 5, name: 'Partner 5', logo: 'https://i.ibb.co/Q3CbVBsG/2025.png' },
  { id: 6, name: 'Partner 6', logo: 'https://i.ibb.co/q3cWB45P/image.png' },
];

export const SERVICES = [
  {
    id: 'billboards',
    title: 'لوحات إعلانية',
    description: 'تصميم لوحات خارجية ضخمة تلفت الأنظار وتوصل رسالتك بوضوح احترافي.',
    icon: <Layout className="w-10 h-10 text-[#570F80]" />
  },
  {
    id: 'wedding',
    title: 'خدمات الزفاف',
    description: 'دعوات زفاف فاخرة وتصاميم تخلد ذكرى يومك الكبير بأناقة ملكية.',
    icon: <Heart className="w-10 h-10 text-[#570F80]" />
  },
  {
    id: 'advertising',
    title: 'خدمات إعلانية',
    description: 'حلول إعلانية متكاملة تشمل المطبوعات والبروشورات والهويات البصرية.',
    icon: <Megaphone className="w-10 h-10 text-[#570F80]" />
  },
  {
    id: 'social-media',
    title: 'سوشال ميديا',
    description: 'تصاميم جذابة لمنصات التواصل الاجتماعي تزيد من تفاعل جمهورك المستهدف.',
    icon: <Palette className="w-10 h-10 text-[#570F80]" />
  },
  {
    id: 'montage',
    title: 'مونتاج فيديو',
    description: 'تحرير فيديو احترافي وموشن جرافيك يروي قصتك بأسلوب سينمائي مبتكر.',
    icon: <Video className="w-10 h-10 text-[#570F80]" />
  },
  {
    id: 'programming',
    title: 'برمجة وتطوير',
    description: 'بناء مواقع ويب وتطبيقات ذكية بأحدث التقنيات لضمان أفضل تجربة مستخدم.',
    icon: <Code className="w-10 h-10 text-[#570F80]" />
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'هوية "ليان" للعطور', 
    category: 'هوية بصرية', 
    imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
    projectImages: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=90&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  { 
    id: '2', 
    title: 'تطبيق "تداول" الذكي', 
    category: 'UI/UX Design', 
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    projectImages: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=90&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  { 
    id: '3', 
    title: 'بوستر "الخريف" السينمائي', 
    category: 'إعلانات', 
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
    projectImages: [
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=90&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  { 
    id: '4', 
    title: 'مجموعة "الزفاف الملكي"', 
    category: 'مناسبات', 
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    projectImages: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=90&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  { 
    id: '5', 
    title: 'حملة "أوريكس" الرقمية', 
    category: 'سوشال ميديا', 
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    projectImages: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=90&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  { 
    id: '6', 
    title: 'إعلان سيارة "نيرفانا"', 
    category: 'مونتاج', 
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    projectImages: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=90&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: 'https://www.instagram.com/9l7iz', icon: <Instagram className="w-6 h-6" /> },
  { platform: 'Facebook', url: 'https://www.facebook.com/9l7iz', icon: <Facebook className="w-6 h-6" /> },
  { platform: 'WhatsApp', url: 'https://wa.me/967772655825', icon: <Phone className="w-6 h-6" /> },
];
