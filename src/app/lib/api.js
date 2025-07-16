const buildUrl = (...paths) =>
  `https://jsonplaceholder.typicode.com/posts/${paths.join('/')}`;

const stringifyQueryParams = (params) => new URLSearchParams(params).toString();

// const getPosts = () => fetch(buildUrl()).then((res) => res.json());
//
// console.log(getPosts());

const sendRequest = async (url, init) => {
  const response = await fetch(url, init);
  if (!response.ok) {
    throw new Error(await response.text());
  }

  return await response.json();
};

export const getPosts = () => sendRequest(buildUrl());
