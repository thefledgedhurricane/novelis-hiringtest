import { GET_POSTS, POSTS_ERROR } from '../types';
import axios from 'axios';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=6d6a8abdb52341f9b01140e37990ec2c`
    );
    dispatch({
      type: GET_POSTS,
      payload: response.data.articles,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error,
    });
  }
};
