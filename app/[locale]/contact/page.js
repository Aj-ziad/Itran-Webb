// app/[locale]/contact/page.tsx
import ContactUs1 from '@/components/mvpblocks/contact-us-1';
import { getTranslations } from 'next-intl/server';

// Generate localized metadata
export async function generateMetadata({ params: { locale }  }) {
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: `${t('title')} ${t('us')}`,
    description: t('globeText'),
  };
}

export default function ContactPage() {
  return <ContactUs1 />;
}