import { getPostById } from '@/lib/prismaHelpers';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

// Next.js expects params?: Promise<{ id: string }>
type PageProps = {
  params?: Promise<{ id: string }>;
};

export default async function Page(props: PageProps) {
  let id: string | undefined;

  if (props.params) {
    const resolved = await props.params;
    id = resolved.id;
  }

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
