import { getAllPosts } from '@/lib/prismaHelpers';

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Posts
      </h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        {posts.map((post) => (
          <li key={post.authorId} className="text-black">
            {post.title}{' '}
            <span className="border border-red-400">by {post.author.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
