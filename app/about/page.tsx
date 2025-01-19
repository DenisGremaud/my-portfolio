import WIP from '@/components/wip';
import { siteMetadata } from '../metadata';

export const metadata = {
  ...siteMetadata,
  title: 'About | Denis Gremaud',
  description:
    'Learn more about Denis Gremaud and his journey in web development and AI.',
};

const AboutPage = () => {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter mt-4">
        About Me
      </h1>
      <WIP />
    </section>
  );
};

export default AboutPage;
