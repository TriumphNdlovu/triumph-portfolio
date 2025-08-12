'use client';
import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPost {
  title: string;
  date: string;
  author: string;
  readmeContent: string;
}

interface BlogProps {
  posts: BlogPost[];
}

function Blog({ posts }: BlogProps) {
  const [visiblePostIndex, setVisiblePostIndex] = useState<number | null>(null);
  const [postsWithHtml, setPostsWithHtml] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const convertMarkdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).process(markdown);
    return result.toString();
  };

  useEffect(() => {
    const convertPostsToHtml = async () => {
      const postsWithHtmlContent = await Promise.all(
        posts.map(async (post) => ({
          ...post,
          readmeContent: await convertMarkdownToHtml(post.readmeContent),
        }))
      );
      setPostsWithHtml(postsWithHtmlContent);
    };

    if (posts.length > 0) {
      convertPostsToHtml();
    }
  }, [posts]);

  const togglePostVisibility = (index: number) => {
    setVisiblePostIndex(visiblePostIndex === index ? null : index);
  };

  // Search filter function
  const filteredPosts = postsWithHtml.filter((post) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchLower) ||
      post.readmeContent.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="container mx-auto w-full sm:w-[90%]">
      <h1 className="text-3xl font-bold text-maintextColor text-center mb-8">Blog Posts</h1>
      {/* a link to the blog website */}
      
      <div className="text-center mb-8 border border-gray-300 hover:border-gray-500 hover:shadow-lg rounded-xl p-6 bg-amber-100 transition-all duration-200">
        <a
          href="https://tiny-mooncake-80a739.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <span className="text-4xl font-extrabold text-gray-800">~commit log~</span>
          </div>
          <p className="text-lg font-medium text-gray-700 italic">
            A blog where I share my thoughts, experiments, and adventures in the tech world.
          </p>
          {/* add a click here button */}
          <button className="mt-4 px-4 py-2 bg-specialAccentColor text-white font-bold rounded-lg hover:opacity-80 transition-opacity">
            Click Here
          </button>
        </a>
      </div>

    </div>
  );
}

export default Blog;
