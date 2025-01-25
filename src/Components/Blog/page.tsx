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

      {/* Search Bar */}
      <div className="mb-6 text-secondaryTextColor bg-windowBackground">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-lg bg-windowBackground"
        />
      </div>

      <div className="bg-windowBackground border rounded-lg">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-maintextColor py-6">No posts found</p>
        ) : (
          filteredPosts.map((post, index) => (
            <div key={index} className="rounded-lg mb-6 overflow-auto ">
              <div className="p-6 text-secondaryTextColor ">
                {/* Post Title */}
                <h2
                  onClick={() => togglePostVisibility(index)}
                  className="text-3xl text-maintextColor font-semibold mb-2 cursor-pointer transition-colors duration-300"
                >
                  {post.title}
                </h2>

                {/* Post Date */}
                <p className="text-sm text-maintextColormb-4">{post.author}, {post.date}</p>

                {/* Snippet of the Post Content */}
                {visiblePostIndex === index ? (
                  
                  <div
                    className="markdown-body mb-4"
                    dangerouslySetInnerHTML={{
                      __html: post.readmeContent,
                    }}
                  />
                ) : (
                  <div
                    className="markdown-body mb-4"
                    dangerouslySetInnerHTML={{
                      __html: post.readmeContent.slice(0, 400) + '...',
                    }}
                  />
                )}
                {/* Expanding/Collapsing Indicator */}
                <button
                  className="flex items-center text-sm text-specialAccentColor hover:text-accentColor transition duration-300"
                  onClick={() => togglePostVisibility(index)}
                >
                  {visiblePostIndex === index ? (
                    <>
                      <FaAngleUp className="mr-2" /> Show Less
                    </>
                  ) : (
                    <>
                      <span className="underline">... read more</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;
