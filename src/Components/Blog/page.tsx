// import React, { useState } from 'react';
// import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
// import Image from 'next/image';

// function Blog() {
//   const [blogPosts] = useState([
//     {
//       title: "How I Built My Portfolio Website to Reflect My Skills and Style",
//       readmeContent: `
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>How I Built My Portfolio Website</title>
//   <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body class="bg-windowBackground text-secondaryTextColor font-sans">

//   <div class="container mx-auto p-1">
//     <h1 class="text-3xl font-bold text-maintextColor mb-8">How I Built My Portfolio Website to Reflect My Skills and Style</h1>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-3 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">Introduction</h2>
//       <p class="mb-4">Why does a developer need a portfolio? Isn't having a GitHub and LinkedIn profile enough? While both of these are essential (and I strongly recommend having them), a portfolio website offers something they can’t: the freedom to showcase who you are.</p>
//       <p class="mb-4">Let me explain. With a portfolio website, you’re not limited to standard templates or profiles. Instead, you can truly highlight your uniqueness and skills. For example, instead of just claiming to have “attention to detail,” your website can <span class="text-accentColor font-semibold">show</span> how much thought and care you put into your work.</p>
//       <p class="mb-4">In this post, I’ll explain how I approached building my website, and hopefully, some of the insights I’ve gained will inspire your own journey.</p>
//     </div>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-3 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">Defining the Brand and Style of the Website</h2>
//       <p class="mb-4">The first step was deciding how I wanted the site to look and feel—not just artistically, but also in a way that reflected who I am. A website is not just about showcasing projects; it’s also a personal statement.</p>
//     </div>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-6 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">Look and Feel</h2>
//       <p class="mb-4">I wanted my site to be unique but also user-friendly. The goal was to make it easy for visitors to navigate and interact with. One thing I’ve always loved is video games, especially retro games from the '90s. I thought, "Why not infuse that video game vibe into the design?"</p>
//       <p class="mb-4">I started looking for inspiration online—color palettes, fonts, icons—anything that could help me convey that nostalgic, retro feel. I decided on a color scheme and moved on to the layout.</p>
//       <p class="mb-4">Initially, I planned a mixture of modern and retro styles for the layout. This would give the site a sense of those '90s vibes while also allowing the design to remain fresh and modern.</p>
//     </div>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-6 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">The Pivot</h2>
//       <p class="mb-4">As I worked on the site, an idea struck me: Why not make the "About" section look like an open terminal window with a blinking cursor? It seemed like a fun and developer-friendly touch. I went ahead and built it, and when I saw how cool it looked, the idea expanded. Why not make the entire website look like a desktop screen? The more I worked on it, the more excited I became about the concept.</p>
//       <p class="mb-4">I continued refining the idea, making a few changes along the way, but I stuck to the core concept of the '90s retro game style, applying it to a desktop feel.</p>
//     </div>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-6 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">Advantage of the Desktop Style</h2>
//       <ul class="list-disc list-inside space-y-4">
//         <li><strong class="text-accentColor">Familiarity Breeds Comfort:</strong> The desktop layout uses familiar concepts that most users know, making navigation intuitive and reducing the learning curve.</li>
//         <li><strong class="text-accentColor">Surprise and Delight:</strong> The unique desktop interface surprises users, making the website memorable. Every visit offers something new or quirky, keeping it fresh in their minds.</li>
//         <li><strong class="text-accentColor">Interactivity and Engagement:</strong> The desktop style encourages interaction with features like clickable icons, draggable windows, and hidden "Easter eggs," making the experience feel more like a game than a traditional portfolio.</li>
//         <li><strong class="text-accentColor">Visual Consistency and Aesthetic Appeal:</strong> The cohesive retro aesthetic ties the site together with consistent colors, fonts, and icons, giving it a strong, creative identity that stands out.</li>
//       </ul>
//     </div>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-6 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">Future Updates</h2>
//       <p class="mb-4">I’m excited to share that I have future updates planned for the website. One feature I’m working on is a settings option that will allow visitors to customize the site by changing themes and swapping background images. This will enhance user engagement and make the site feel even more personal.</p>
//     </div>

//     <div class="bg-windowBackground p-1 rounded-lg shadow-lg mb-6 text-secondaryTextColor">
//       <h2 class="text-2xl font-semibold text-maintextColor mb-4">Conclusion</h2>
//       <p className="mb-4">Building my portfolio website has been a rewarding journey—one that not only allowed me to showcase my skills but also gave me the opportunity to push my creativity and challenge myself. By blending a retro desktop interface with modern design elements, I created something that feels familiar yet fresh, interactive yet simple. It’s been a fantastic way to stand out, reflect my unique style, and demonstrate my technical abilities in a way that goes beyond just listing skills on a resume.</p>
//       <p className="mb-4">Whether you’re a developer, designer, or anyone looking to build a personal website, I encourage you to think outside the box. Your portfolio is your chance to tell your story, showcase what you do best, and express your individuality. So, take the leap, experiment, and don’t be afraid to make it truly yours.</p>
//       <p className="mb-4">Feel free to explore my website, and if you have any questions or would like to connect, don’t hesitate to reach out! until next time, bye!!</p>
//     </div>
//   </div>

// </body>
// </html>

//       `,
//       imageUrl: "/portfolio_blog_post.png",
//       dateAndTime: "Triumph Ndlovu, 26 December 2024, 13:47",
//     },
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [visiblePostIndex, setVisiblePostIndex] = useState<number | null>(null);

//   const filteredPosts = blogPosts.filter(post =>
//     post.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const togglePostVisibility = (index: number) => {
//     setVisiblePostIndex(visiblePostIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto w-full sm:w-[90%]">
//       <h1 className="text-3xl font-bold text-maintextColor text-center mb-8">Blog Posts</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-2 border rounded-md"
//         />
//       </div>

//       <div className="bg-windowBackground border rounded-lg">
//         {filteredPosts.map((post, index) => (
//           <div key={index} className="rounded-lg shadow-md overflow-auto mb-6">
//             <div className="p-4 text-maintextColor">
//               <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
//               <p className="text-secondaryTextColor">{post.dateAndTime}</p>
//               <Image
//                 src={post.imageUrl}
//                 alt={post.title}
//                 width={800}
//                 height={400}
//                 quality={100}
//                 className="w-full h-48 object-cover"
//               />
//               <div
//                 className={`markdown-body ${visiblePostIndex === index ? 'open' : 'hidden'}`}
//                 dangerouslySetInnerHTML={{ __html: post.readmeContent }}
//               />
//               <button
//                 className="mt-4 bg-specialAccentColor text-white py-2 px-4 rounded-lg hover:bg-maintextColor hover:text-black transition duration-300 w-full sm:w-auto text-center"
//                 onClick={() => togglePostVisibility(index)}
//               >
                
//                 {visiblePostIndex === index ? <><FaAngleUp className="inline-block mr-2" /> Show Less</> : <><FaAngleDown className="inline-block mr-2" /> Full View</>}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Blog;

import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <a className="text-xl font-semibold text-blue-500 hover:underline">
                {post.title}
              </a>
            </Link>
            <p className="text-gray-600">{post.description}</p>
            <span className="text-sm text-gray-400">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
