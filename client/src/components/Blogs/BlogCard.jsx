import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author, id, slug, coverImage, tags }) => {
  // Use new data structure if available, fallback to old structure
  const blogData = {
    id: id,
    title: title,
    author: author,
    date: date,
    description: description,
    image: coverImage || image,
    tags: tags || []
  };

  // Use slug for SEO-friendly URLs, fallback to id if slug is not available
  const blogLink = slug ? `/blogs/${slug}` : `/blogs/${id}`;

  return (
    <>
      <Link
        to={blogLink}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
          <div className="overflow-hidden">
            <img
              src={blogData.image}
              alt={blogData.title}
              className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>{blogData.date}</p>
            <p className="line-clamp-1">By {blogData.author}</p>
          </div>
          <div className="space-y-2 py-3">
            <h1 className="line-clamp-1 font-bold">{blogData.title}</h1>
            <p className="line-clamp-2">{blogData.description}</p>
            {blogData.tags && blogData.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {blogData.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
