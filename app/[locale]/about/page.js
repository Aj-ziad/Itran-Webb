// app/[locale]/about/page.tsx
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

// Generate localized metadata
export async function generateMetadata({ params: { locale }  }) {
  const t = await getTranslations({ locale, namespace: 'about.metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="relative min-h-screen overflow-hidden pt-10 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-white/5 to-white/5"></div>
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t('hero.title.before')}{' '}
            <span className="text-primary">{t('hero.title.highlight')}</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        <div className="space-y-8 text-gray-200">
          {/* Who We Are */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('whoWeAre.title')}</h2>
            <p>
              {t('whoWeAre.paragraph1.before')}{' '}
              <strong>{t('whoWeAre.paragraph1.morocco')}</strong>
              {t('whoWeAre.paragraph1.after')}
            </p>
            <p>
              {t('whoWeAre.paragraph2.before')}{' '}
              <strong>{t('whoWeAre.paragraph2.cities')}</strong>
              {t('whoWeAre.paragraph2.middle')}{' '}
              <strong>{t('whoWeAre.paragraph2.features')}</strong>
              {t('whoWeAre.paragraph2.after')}
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('mission.title')}</h2>
            <p>{t('mission.description')}</p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t('whyChooseUs.title')}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                'benefit1',
                'benefit2',
                'benefit3',
                'benefit4',
                'benefit5',
                'benefit6',
              ].map((key) => (
                <li key={key} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>
                    <strong>{t(`whyChooseUs.${key}.highlight`)}</strong>
                    {t(`whyChooseUs.${key}.rest`)}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Our Work & Expertise */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('workAndExpertise.title')}</h2>
            <p>{t('workAndExpertise.intro')}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>{t('workAndExpertise.project1.type')}</strong> –{' '}
                {t('workAndExpertise.project1.before')}{' '}
                <Link href="#" className="text-primary hover:underline">
                  {t('workAndExpertise.project1.name')}
                </Link>
                {t('workAndExpertise.project1.after')}
              </li>
              <li>
                <strong>{t('workAndExpertise.project2.type')}</strong> –{' '}
                {t('workAndExpertise.project2.before')}{' '}
                <Link href="#" className="text-primary hover:underline">
                  {t('workAndExpertise.project2.name')}
                </Link>
                {t('workAndExpertise.project2.after')}
              </li>
              <li>
                <strong>{t('workAndExpertise.project3.type')}</strong> –{' '}
                {t('workAndExpertise.project3.before')}{' '}
                <Link href="#" className="text-primary hover:underline">
                  {t('workAndExpertise.project3.name')}
                </Link>
                {t('workAndExpertise.project3.after')}
              </li>
            </ul>
          </section>

          {/* Local Presence */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t('localPresence.title')}</h2>
            <p>{t('localPresence.description1')}</p>
            <p className="mt-2">
              <strong>{t('localPresence.cities')}</strong> — {t('localPresence.remote')}
            </p>
            <p className="mt-3">
              {t('localPresence.description2.before')}{' '}
              <strong>{t('localPresence.description2.langs')}</strong>
              {t('localPresence.description2.after')}
            </p>
          </section>

          {/* CTA */}
          <section className="mt-12 pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="mb-6">{t('cta.description')}</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t('cta.button')} <ArrowRight className="inline-block ml-1" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}