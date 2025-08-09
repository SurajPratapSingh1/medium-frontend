import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";

const dummyBlog = {
  id: 1,
  authorName: "Alice Smith",
  title: "How to Build a Blog with React",
  content: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.`,
  publishedDate: "Aug 9, 2025"
};

export const Blog = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <FullBlog {...dummyBlog} />
      </div>
    </div>
  );
}