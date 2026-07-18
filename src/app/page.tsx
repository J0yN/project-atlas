import { Workspace } from '@/components/home/Workspace';
import { workspaceContent } from '@/data/workspace';

export default function Home() {
  return <Workspace {...workspaceContent} />;
}
