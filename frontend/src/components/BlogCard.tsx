import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName : string;
    title: string;
    content : string;
    publishedDate : string;
    id : number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex items-center mb-2">
                <Avatar name={authorName} size="small" />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                <Circle />
                <div className="text-slate-500 text-xs">{publishedDate}</div>
            </div>
            <div className="text-xl font-semibold pt-2">{title}</div>
            <div className="text-md font-thin">{content}</div>
        </div>
    </Link>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500 mx-2"></div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-300`}>
            {name[0]?.toUpperCase()}
        </span>
    </div>
}