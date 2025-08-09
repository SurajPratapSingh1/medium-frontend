import { Appbar } from "../components/Appbar";
import { useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);

  const handlePublish = () => {
    if (title && content) {
      setSuccess(true);
      setTitle("");
      setContent("");
      setTimeout(() => setSuccess(false), 2000);
    } else {
      alert("Please fill in both title and content.");
    }
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-2xl bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-6">Publish a new blog</h2>
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
              Blog published successfully!
            </div>
          )}
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 min-h-[200px]"
            placeholder="Write your blog content here..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}