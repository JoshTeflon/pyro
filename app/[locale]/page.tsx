import { setRequestLocale } from 'next-intl/server';

import { LandingClient } from '@/components/views';

export default function Page({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return <LandingClient />;
}
