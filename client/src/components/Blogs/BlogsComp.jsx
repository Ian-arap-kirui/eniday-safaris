import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/The_Ultimate_Kenya_Safari_Experience_for_International_Tourists.jpg";
import Img2 from "../../assets/places/Rediscover_Kenya_The_Best_Local_Getaways_for_Domestic_Travelers.jpg";
import Img3 from "../../assets/places/Adventure Awaits_Kenya's_Top_Destinations_for_Thrill_Seekers.jpg";
import Img4 from "../../assets/places/Adventure Awaits_Kenya's_Top_Destinations_for_Thrill_Seekers.jpg";
import { blogs } from "./Blogs";

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

// Legacy blog data for backward compatibility
const BlogsData = [
  {
    id: 1,
    slug: "ultimate-kenya-safari",
    image: Img1,
    title: "The Ultimate Kenya Safari Experience for International Tourists",
    description:
      "Kenya's world-renowned safaris, cultural richness, and scenic beauty offer international travelers an unforgettable adventure. From the Great Migration in Maasai Mara to the coastal retreats of Diani and Lamu, this guide walks you through the best ways to experience Kenya. Discover authentic cultural tours, eco-lodges, and private game drives that support local communities and conservation efforts.",
    author: "Team Safari Curators",
    date: "July 2025",
    category: "International Tourists",
    link: "/blogs#international",
  },
  {
    id: 2,
    slug: "rediscover-kenya-domestic",
    image: Img2,
    title: "Rediscover Kenya: The Best Local Getaways for Domestic Travelers",
    description:
      "Explore Kenya like never before—right from Nairobi National Park day trips to weekend safaris in Amboseli and Nakuru. This blog is your go-to for quick, affordable, and culturally enriching escapes within the country. Tailored for families, couples, and solo travelers looking to explore their homeland and support community-based tourism.",
    author: "Team Safari Curators",
    date: "July 2025",
    category: "Domestic Travelers",
    link: "/blogs#domestic",
  },
  {
    id: 3,
    slug: "adventure-awaits-kenya",
    image: Img3,
    title: "Adventure Awaits: Kenya's Top Destinations for Thrill Seekers",
    description:
      "Kenya's wild side is calling! Discover the adrenaline-filled adventures awaiting you—from summiting Mount Kenya to rafting on the Tana River and biking through Hell's Gate. Whether you're into hiking, diving, or hot air balloon safaris over the Mara, this is your guide to unforgettable outdoor exploits in Kenya.",
    author: "Team Safari Curators",
    date: "July 2025",
    category: "Adventure Seekers",
    link: "/blogs#adventure",
  },
  {
    id: 4,
    slug: "luxury-wild-kenya",
    image: Img4,
    title: "Luxury in the Wild: Kenya's Finest Safari and Coastal Experiences",
    description:
      "Indulge in Kenya's most exclusive escapes—from private conservancy lodges in the Maasai Mara to beachfront villas in Diani. This blog outlines how you can enjoy five-star service while supporting eco-conscious tourism. Perfect for honeymooners, high-end explorers, and luxury lovers looking for comfort without compromise.",
    author: "Team Safari Curators",
    date: "July 2025",
    category: "Luxury Travelers",
    link: "/blogs#luxury",
  },
];

const BlogsComp = () => {
  // Use new blog data if available, otherwise fall back to legacy data
  const displayBlogs = blogs.length > 0 ? blogs : BlogsData;

  // Process blogs to resolve image paths
  const processedBlogs = displayBlogs.map(blog => ({
    ...blog,
    image: blog.image || blog.coverImage,
    coverImage: resolveImage(blog.coverImage || blog.image)
  }));

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {processedBlogs.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
