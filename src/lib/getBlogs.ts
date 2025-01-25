// lib/getBlogs.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'posts'); // Adjust path to your Markdown files

export function getAllBlogs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogs = fileNames.map((fileName) => {
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      dateAndTime: data.date,
      readmeContent: content,
      imageUrl: data.imageUrl, // Assuming your front matter has an imageUrl field
      slug: fileName.replace(/\.md$/, ''),
    };
  });
  return allBlogs;
}
