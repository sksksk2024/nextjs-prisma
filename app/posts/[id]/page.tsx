import { getPostById } from '@/lib/prismaHelpers';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

// function generateStaticParams() {}

// Correct type: params is a plain object, not a Promise
// type PageProps = {
//   params: Promise<{ id: string }>
// };

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) notFound();

  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p>by {post.author.name}</p>
      <div>{post.content}</div>
    </article>
  );
}
