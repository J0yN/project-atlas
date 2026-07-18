import { Workspace } from '@/components/home/Workspace';
import { getWorkspaceContent } from '@/data/workspace';
import { getRouteLocale, type LocaleParams } from '@/i18n/server';

export default async function Home({
  params
}: {
  params: LocaleParams;
}) {
  const locale = await getRouteLocale(params);

  return <Workspace locale={locale} {...getWorkspaceContent(locale)} />;
}
