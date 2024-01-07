import { getTranslations } from 'next-intl/server';

import { BouncyCardsFeatures } from '@/components/framer/features';
import ShuffleHero from '@/components/framer/hero';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <ShuffleHero />
      <BouncyCardsFeatures />
    </>
  );
}
