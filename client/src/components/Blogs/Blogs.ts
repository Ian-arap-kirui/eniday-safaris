export interface BlogContentBlock {
  type: "heading" | "paragraph" | "image" | "list" | "quote" | "embed";
  level?: 1 | 2 | 3;
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  author?: string;
  provider?: "youtube" | "map";
  url?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  tags: string[];
  coverImage: string;
  content: BlogContentBlock[];
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "ultimate-kenya-safari",
    title: "The Ultimate Kenya Safari Experience for International Tourists",
    subtitle: "Explore Kenya's top safari destinations and wildlife wonders.",
    author: "Team Safari Curators",
    date: "July 2025",
    tags: ["Kenya", "Safari", "Travel", "Wildlife", "International Tourists"],
    coverImage: "/src/assets/places/The_Ultimate_Kenya_Safari_Experience_for_International_Tourists.jpg",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Introduction"
      },
      {
        type: "paragraph",
        text: "Kenya's world-renowned safaris, cultural richness, and scenic beauty offer international travelers an unforgettable adventure. From the Great Migration in Maasai Mara to the coastal retreats of Diani and Lamu, this guide walks you through the best ways to experience Kenya."
      },
      {
        type: "paragraph",
        text: "Discover authentic cultural tours, eco-lodges, and private game drives that support local communities and conservation efforts."
      },
      {
        type: "heading",
        level: 3,
        text: "Top Safari Parks to Visit"
      },
      {
        type: "list",
        items: [
          "Maasai Mara National Reserve - Home to the Great Migration",
          "Amboseli National Park - Famous for its elephant herds",
          "Tsavo East and West - Kenya's largest national park",
          "Lake Nakuru National Park - Bird watcher's paradise"
        ]
      },
      {
        type: "quote",
        text: "In Kenya, you don't just see the wild — you feel it.",
        author: "Team Safari Curators"
      },
      {
        type: "heading",
        level: 3,
        text: "Cultural Experiences"
      },
      {
        type: "paragraph",
        text: "Beyond wildlife, Kenya offers rich cultural experiences. Visit Maasai villages, learn traditional dances, and understand the deep connection between local communities and wildlife conservation."
      },
      {
        type: "embed",
        provider: "map",
        url: "https://maps.google.com/?q=Masai+Mara+National+Reserve"
      }
    ]
  },
  {
    id: 2,
    slug: "rediscover-kenya-domestic",
    title: "Rediscover Kenya: The Best Local Getaways for Domestic Travelers",
    subtitle: "Explore Kenya like never before with affordable local adventures.",
    author: "Team Safari Curators",
    date: "July 2025",
    tags: ["Kenya", "Domestic Travel", "Local Tourism", "Weekend Getaways"],
    coverImage: "/src/assets/places/Rediscover_Kenya_The_Best_Local_Getaways_for_Domestic_Travelers.jpg",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Local Adventures Await"
      },
      {
        type: "paragraph",
        text: "Explore Kenya like never before—right from Nairobi National Park day trips to weekend safaris in Amboseli and Nakuru. This blog is your go-to for quick, affordable, and culturally enriching escapes within the country."
      },
      {
        type: "paragraph",
        text: "Tailored for families, couples, and solo travelers looking to explore their homeland and support community-based tourism."
      },
      {
        type: "heading",
        level: 3,
        text: "Perfect Weekend Destinations"
      },
      {
        type: "list",
        items: [
          "Nairobi National Park - Wildlife just outside the city",
          "Amboseli National Park - Weekend safari adventures",
          "Lake Nakuru - Pink flamingo paradise",
          "Hell's Gate - Cycling and hiking adventures"
        ]
      },
      {
        type: "quote",
        text: "The best adventures are often found in your own backyard.",
        author: "Team Safari Curators"
      },
      {
        type: "heading",
        level: 3,
        text: "Budget-Friendly Tips"
      },
      {
        type: "paragraph",
        text: "Traveling locally doesn't mean compromising on experiences. We share insider tips on getting the best deals, finding hidden gems, and making the most of your domestic adventures."
      }
    ]
  },
  {
    id: 3,
    slug: "adventure-awaits-kenya",
    title: "Adventure Awaits: Kenya's Top Destinations for Thrill Seekers",
    subtitle: "Discover adrenaline-filled adventures across Kenya's wild landscapes.",
    author: "Team Safari Curators",
    date: "July 2025",
    tags: ["Adventure", "Thrill Seekers", "Mount Kenya", "Rafting", "Hiking"],
    coverImage: "/src/assets/places/Adventure Awaits_Kenya's_Top_Destinations_for_Thrill_Seekers.jpg",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Kenya's Wild Side"
      },
      {
        type: "paragraph",
        text: "Kenya's wild side is calling! Discover the adrenaline-filled adventures awaiting you—from summiting Mount Kenya to rafting on the Tana River and biking through Hell's Gate."
      },
      {
        type: "paragraph",
        text: "Whether you're into hiking, diving, or hot air balloon safaris over the Mara, this is your guide to unforgettable outdoor exploits in Kenya."
      },
      {
        type: "heading",
        level: 3,
        text: "Mountain Adventures"
      },
      {
        type: "list",
        items: [
          "Mount Kenya - Summit Africa's second-highest peak",
          "Mount Longonot - Volcanic crater hiking",
          "Ngong Hills - Scenic ridge walking",
          "Aberdare Ranges - Forest trekking"
        ]
      },
      {
        type: "quote",
        text: "The mountains are calling, and Kenya answers with some of Africa's most spectacular peaks.",
        author: "Team Safari Curators"
      },
      {
        type: "heading",
        level: 3,
        text: "Water Adventures"
      },
      {
        type: "paragraph",
        text: "From white-water rafting on the Tana River to diving in the Indian Ocean, Kenya offers aquatic adventures for every thrill level."
      },
      {
        type: "embed",
        provider: "map",
        url: "https://maps.google.com/?q=Mount+Kenya"
      }
    ]
  },
  {
    id: 4,
    slug: "luxury-wild-kenya",
    title: "Luxury in the Wild: Kenya's Finest Safari and Coastal Experiences",
    subtitle: "Indulge in Kenya's most exclusive escapes and five-star wilderness experiences.",
    author: "Team Safari Curators",
    date: "July 2025",
    tags: ["Luxury", "Safari", "Coastal", "Eco-Tourism", "Honeymoon"],
    coverImage: "/src/assets/places/Adventure Awaits_Kenya's_Top_Destinations_for_Thrill_Seekers.jpg",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Luxury Meets Wilderness"
      },
      {
        type: "paragraph",
        text: "Indulge in Kenya's most exclusive escapes—from private conservancy lodges in the Maasai Mara to beachfront villas in Diani. This blog outlines how you can enjoy five-star service while supporting eco-conscious tourism."
      },
      {
        type: "paragraph",
        text: "Perfect for honeymooners, high-end explorers, and luxury lovers looking for comfort without compromise."
      },
      {
        type: "heading",
        level: 3,
        text: "Exclusive Safari Lodges"
      },
      {
        type: "list",
        items: [
          "Private conservancy lodges in Maasai Mara",
          "Luxury tented camps with butler service",
          "Exclusive game viewing experiences",
          "Helicopter transfers and private guides"
        ]
      },
      {
        type: "quote",
        text: "Luxury in the wild isn't about comfort—it's about experiencing nature's grandeur in complete privacy.",
        author: "Team Safari Curators"
      },
      {
        type: "heading",
        level: 3,
        text: "Coastal Luxury"
      },
      {
        type: "paragraph",
        text: "From the pristine beaches of Diani to the historic charm of Lamu, Kenya's coastline offers world-class luxury accommodations with stunning ocean views and private beach access."
      },
      {
        type: "embed",
        provider: "map",
        url: "https://maps.google.com/?q=Diani+Beach+Kenya"
      }
    ]
  }
];
