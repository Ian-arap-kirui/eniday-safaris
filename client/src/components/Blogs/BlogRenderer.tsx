import React from "react";
import { BlogContentBlock } from "./Blogs";

const BlogRenderer = ({ content }: { content: BlogContentBlock[] }) => {
  if (!content || content.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <div className="space-y-6 text-gray-800">
      {content.map((block, idx) => {
        switch (block.type) {
          case "heading":
            if (block.level === 1) return <h1 key={idx} className="text-4xl font-bold">{block.text}</h1>;
            if (block.level === 2) return <h2 key={idx} className="text-3xl font-semibold">{block.text}</h2>;
            return <h3 key={idx} className="text-2xl font-medium">{block.text}</h3>;
          case "paragraph":
            return <p key={idx} className="text-base leading-7">{block.text}</p>;
          case "image":
            return (
              <figure key={idx} className="my-4">
                <img src={block.src} alt={block.alt} className="rounded-xl" />
                {block.caption && <figcaption className="text-sm text-center text-gray-500 mt-2">{block.caption}</figcaption>}
              </figure>
            );
          case "list":
            return (
              <ul key={idx} className="list-disc pl-6">
                {block.items?.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={idx} className="border-l-4 border-yellow-600 pl-4 italic text-gray-600">
                "{block.text}"
                {block.author && <div className="mt-1 text-sm font-light text-right">— {block.author}</div>}
              </blockquote>
            );
          case "embed":
            return block.provider === "map" ? (
              <iframe
                key={idx}
                src={block.url}
                className="w-full h-72 rounded-lg border"
                loading="lazy"
              />
            ) : block.provider === "youtube" ? (
              <iframe
                key={idx}
                src={block.url}
                className="w-full aspect-video rounded-lg border"
                allowFullScreen
              />
            ) : null;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogRenderer;
