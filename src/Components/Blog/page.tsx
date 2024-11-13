export default function Blog() {
    return (

        <>
        <h2 className="text-4xl text-blue-500 font-semibold mb-8 text-center">Blog</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                          <h3 className="text-2xl text-blue-400 font-semibold mb-4">Why I Love TypeScript</h3>
                          <p className="text-lg mb-4">In this post, I'll discuss why TypeScript has become my go-to language for building robust and maintainable web applications.</p>
                          <a href="/blog/why-i-love-typescript" className="text-blue-500">Read more</a>
                        </div>
                      </div>
        </>
    );
}