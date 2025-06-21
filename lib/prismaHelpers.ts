'use server';
import prisma from '@/lib/prisma';

// Post
export const getAllPosts = async () => {
  return prisma.post.findMany({
    include: {
      author: true,
    },
  });
};

export const getPostById = async (id: string) => {
  return prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  });
};

export const createPost = async (
  title: string,
  content: string,
  authorId: number
) => {
  return prisma.post.create({
    data: {
      title,
      content,
      authorId,
    },
  });
};

// User
export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const updateUsername = async (id: number, username: string) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      username,
    },
  });
};
