import { redirect } from 'next/navigation';
import { detectLocale, localizeHref } from '@/lib/i18n';

export default async function HomeRedirect() {
  const locale = await detectLocale();
  redirect(localizeHref(locale, '/'));
}
