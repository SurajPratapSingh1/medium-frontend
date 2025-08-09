import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";

const dummyBlogs = [
  {
    id: 1,
    authorName: "Alice Smith",
    title: "How to Build a Blog with React",
    content: "React makes it painless to create interactive UIs. Design simple views for each state in your application...",
    publishedDate: "Aug 9, 2025"
  },
  {
    id: 2,
    authorName: "Bob Johnson",
    title: "Understanding TypeScript",
    content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any OS. Anywhere...",
    publishedDate: "Aug 8, 2025"
  }
];

export const Blogs = () => {
  // Simulate loading state
  const loading = false;

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {loading ? (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          ) : (
            dummyBlogs.map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}