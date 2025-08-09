import { Avatar } from "./BlogCard";

interface FullBlogProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const FullBlog = ({
  authorName,
  title,
  content,
  publishedDate
}: FullBlogProps) => {
  return (
    <div className="max-w-2xl w-full p-8">
      <div className="text-4xl font-bold mb-4">{title}</div>
      <div className="flex items-center mb-8">
        <Avatar name={authorName} size="big" />
        <div className="ml-3">
          <div className="font-semibold">{authorName}</div>
          <div className="text-sm text-slate-500">{publishedDate}</div>
        </div>
      </div>
      <div className="text-lg leading-relaxed whitespace-pre-line">{content}</div>
    </div>
  );
}