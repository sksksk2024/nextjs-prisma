'use server';

import { createPost } from '@/lib/prismaHelpers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPostHandler(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  await createPost(title, content, 2);
  revalidatePath('/posts');
  redirect('/posts');
}
