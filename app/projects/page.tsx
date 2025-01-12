import WIP from '@/components/wip';
import { siteMetadata } from '@/app/metadata';

export const metadata = {
  ...siteMetadata,
  title: 'Projects | Denis Gremaud',
  description: 'Learn more about Denis Gremaud\'s projects.',
};

const ProjectPage = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter mt-4">
		Projects
      </h1>
	  <WIP />
	</section>
  );
};

export default ProjectPage;
