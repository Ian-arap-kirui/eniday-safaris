import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";
import BlogRenderer from "../components/Blogs/BlogRenderer";
import { blogs } from "../components/Blogs/Blogs";
import Img1 from "../assets/places/The_Ultimate_Kenya_Safari_Experience_for_International_Tourists.jpg";
import Img2 from "../assets/places/Rediscover_Kenya_The_Best_Local_Getaways_for_Domestic_Travelers.jpg";
import Img3 from "../assets/places/Adventure Awaits_Kenya's_Top_Destinations_for_Thrill_Seekers.jpg";

// Image mapping for resolving string paths to imported images
const imageMap = {
  "/src/assets/places/The_Ultimate_Kenya_Safari_Experience_for_International_Tourists.jpg": Img1,
  "/src/assets/places/Rediscover_Kenya_The_Best_Local_Getaways_for_Domestic_Travelers.jpg": Img2,
  "/src/assets/places/Adventure Awaits_Kenya's_Top_Destinations_for_Thrill_Seekers.jpg": Img3,
};

// Helper function to resolve image paths
const resolveImage = (imagePath) => {
  return imageMap[imagePath] || imagePath;
};

const BlogsDetails = () => {
  const location = useLocation();
  const { slug } = useParams();
  
  // Try to get blog from the new data structure first using slug
  const blogFromData = blogs.find(blog => blog.slug === slug);
  
  // Fallback to location state for backward compatibility
  const { image, date, title, description, author } = location.state || {};
  
  const blog = blogFromData || {
    id: parseInt(slug) || 1, // fallback to id if slug is numeric
    title,
    author,
    date,
    coverImage: image,
    content: [
      {
        type: "paragraph",
        text: description
      }
    ]
  };

  // Resolve the cover image
  const resolvedCoverImage = resolveImage(blog.coverImage || image);

  return (
    <div className="pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={resolvedCoverImage}
          alt={blog.title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-slate-600 text-sm py-3">
              Written by {blog.author} on {blog.date}
            </p>
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            {blog.subtitle && (
              <p className="text-xl text-gray-600 mb-6">{blog.subtitle}</p>
            )}
            {blog.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          {/* Use BlogRenderer for rich content */}
          <div className="prose prose-lg max-w-none">
            <BlogRenderer content={blog.content} />
          </div>
        </div>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;
