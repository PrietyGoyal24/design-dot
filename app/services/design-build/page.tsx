import { Metadata } from 'next';
import DesignBuildPageClient from '@/components/DesignBuildPageClient';

export const metadata: Metadata = {
  title: 'DESIGN-BUILD : turnkey solutions | DesignDot',
  description: 'Design-Build. Rapid delivery. Total team coordination. A team working together from start to finish in open communication and purposeful collaboration to deliver otherwise unachievable results.',
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function DesignBuildPage() {
  return <DesignBuildPageClient />;
}
