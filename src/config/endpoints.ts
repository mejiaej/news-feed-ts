const POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const generateCommentsByPostIdEndpoint = (postId: number) =>
  `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

export { POST_ENDPOINT, generateCommentsByPostIdEndpoint };
