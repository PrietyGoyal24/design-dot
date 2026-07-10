import { Metadata } from 'next';
import ContactUsPageClient from '@/components/ContactUsPageClient';

export const metadata: Metadata = {
  title: 'CONTACT : WEBSITE, MOBILE, APPLICATION, ECOMMERCE, ERP, CRM, BRAND CREATION & STRATEGY, DIGITAL MEDIA MARKETING... | DesignDot',
  description: 'Looking for something special? Contact us now and let your ideas become reality! We offer web, mobile, custom application, ERP, CRM, and digital marketing consulting services.',
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ContactUsPage() {
  return <ContactUsPageClient />;
}
