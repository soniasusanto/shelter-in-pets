import axios from 'axios';
import env from '../../environment';

const LIKE_DOG = 'LIKE_DOG';
const GET_LIKED_DOGS = 'GET_LIKED_DOGS';
const GET_LIKED_DOGS_IDS = 'GET_LIKED_DOGS_IDS';

const LikedDog = likedStatus => ({ type: LIKE_DOG, likedStatus: likedStatus });
const gotLikedDogs = dogs => ({ type: GET_LIKED_DOGS, dogs });
const gotLikedDogsId = ids => ({ type: GET_LIKED_DOGS_IDS, ids });

export const likeDog = dog => async dispatch => {
  try {
    const { data } = await axios.post(`${env.apiUrl}/api/likedDog`, {
      petFinderId: dog.id,
      breed: dog.breeds.primary,
    });
    dispatch(LikedDog(data.liked));
  } catch (error) {
    console.error(error);
  }
};

export const getLikedDogs = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/likedDog`);

      dispatch(gotLikedDogs(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getLikedDogsIds = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/likedDog/ids`);
      dispatch(gotLikedDogsId(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = {
  allLikedDogs: [],
  likedStatus: null,
  ids: [],
};

const likedDogs = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_DOG:
      return {
        ...state,
        likedStatus: action.likedStatus,
      };
    case GET_LIKED_DOGS:
      return { ...state, allLikedDogs: action.dogs };
    case GET_LIKED_DOGS_IDS:
      return { ...state, ids: action.ids };
    default:
      return state;
  }
};

export default likedDogs;
