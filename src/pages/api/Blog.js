// src/app/api/blogs/route.ts or src/pages/api/blogs.js (for Next.js 10.x)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const blogDirectory = path.join(process.cwd(), 'src/posts');   // Adjust to where your Markdown files are stored

  const filenames = fs.readdirSync(blogDirectory);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      imageUrl: data.imageUrl || '',
      readmeContent: content,
      slug: filename.replace(/\.md$/, ''),
    };
  });

  return new Response(JSON.stringify(blogs), { status: 200 });
}