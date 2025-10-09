import type { PostTypes } from '@/app/lib/types/types';

const buildUrl = (...paths: (string | number)[]): string =>
  `https://jsonplaceholder.typicode.com/posts/${paths.join('/')}`;

const stringifyQueryParams = (
  params: Record<string, string | number>
): string => new URLSearchParams(params as Record<string, string>).toString();

const sendRequest = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export const getPosts = (): Promise<PostTypes[]> =>
  sendRequest<PostTypes[]>(buildUrl());

export const getPostText = (
  id: string | number,
  init?: RequestInit
): Promise<PostTypes> => {
  return sendRequest<PostTypes>(buildUrl(id), init);
};
