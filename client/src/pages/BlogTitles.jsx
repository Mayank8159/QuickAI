import { Hash, Sparkles } from "lucide-react";
import React from "react";
import { useState } from "react";

const BlogTitles = () => {
  const blogCategories = [
    'General',
    'Technology',
    'Health',
    'Lifestyle',
    'Education',
    'Business',
    'Entertainment',
    'Travel',
    'Food',
    'Sports'
  ];

  const [selectedCategory, setSelectedCategory] = useState(blogCategories[0]);
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* left column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg shadow-sm border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="The future of Artificial Intelligence is ..."
          className="w-full mt-2 p-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7Aff]"
          required
        />
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedCategory === item
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-500 border-gray-300"
              }`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-white bg-gradient-to-r from-[#C341f6] to-[#8e37eb] rounded-lg cursor-pointer shadow hover:bg-[#3b6cb0]">
          <Hash className="w-5" />
          Generate Titles
        </button>
      </form>
      {/* right column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col min-h-96">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8e37eb]" />
          <h1 className="text-xl font-semibold">Generated Titles</h1>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-9 h-9" />
            <p>Enter a topic and click "Generate Title" to get started ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
