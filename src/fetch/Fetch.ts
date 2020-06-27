import axios from 'axios';
import {
  generateCommentsByPostIdEndpoint,
  POST_ENDPOINT,
} from '../config/endpoints';

const getPosts = async () => {
  try {
    const { data: posts } = await axios.get(POST_ENDPOINT);

    return posts;
  } catch (error) {
    return null;
  }
};

const getComments = async (postId: number) => {
  try {
    const { data: comments } = await axios.get(
      generateCommentsByPostIdEndpoint(postId),
    );

    return comments;
  } catch (error) {
    return null;
  }
};

export { getPosts, getComments };
