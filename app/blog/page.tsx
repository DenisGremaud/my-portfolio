import { BlogPosts } from '@/app/components/posts';
import { siteMetadata } from '@/app/metadata';

export const metadata = {
  ...siteMetadata,
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter mt-4">
        Blog Posts
      </h1>
      <BlogPosts />
    </section>
  );
}
