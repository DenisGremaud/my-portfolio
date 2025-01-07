import { BlogPosts } from 'app/components/posts'
import { ProjectsGrid } from 'app/components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Denis Gremaud !!!
      </h1>
      <p className="mb-4">
        Computer Engineering graduate passionate about web development and AI. I combine a solid education from HEPIA with a keen interest in innovation. Currently seeking opportunities to create impactful technological solutions.
      </p>
      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Projects</h2>
        <ProjectsGrid />
      </div>
      {/* <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Blog Posts</h2>
        <BlogPosts />
      </div> */}
    </section>
  )
}
