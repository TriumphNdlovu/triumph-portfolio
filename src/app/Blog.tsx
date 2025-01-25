'use client';
// src/app/Blog.tsx
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Image from 'next/image';

interface BlogPost {
  title: string;
  readmeContent: string;
  imageUrl: string;
  dateAndTime: string;
}

interface BlogProps {
  posts: BlogPost[];
}

function Blog({ posts }: BlogProps) {
  const [visiblePostIndex, setVisiblePostIndex] = useState<number | null>(null);

  const togglePostVisibility = (index: number) => {
    setVisiblePostIndex(visiblePostIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto w-full sm:w-[90%]">
      <div className="bg-windowBackground border rounded-lg">
        {posts.map((post, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-auto mb-6">
            <div className="p-4 text-maintextColor">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-secondaryTextColor">{post.dateAndTime}</p>
              {/* <Image
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={400}
                quality={100}
                className="w-full h-48 object-cover"
              /> */}
              <div
                className={`markdown-body ${visiblePostIndex === index ? 'open' : 'hidden'}`}
                dangerouslySetInnerHTML={{ __html: post.readmeContent }}
              />
              <button
                className="mt-4 bg-specialAccentColor text-white py-2 px-4 rounded-lg hover:bg-maintextColor hover:text-black transition duration-300 w-full sm:w-auto text-center"
                onClick={() => togglePostVisibility(index)}
              >
                {visiblePostIndex === index ? <><FaAngleUp className="inline-block mr-2" /> Show Less</> : <><FaAngleDown className="inline-block mr-2" /> Full View</>}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
