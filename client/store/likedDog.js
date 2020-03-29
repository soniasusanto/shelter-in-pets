import axios from 'axios';

const UPLOAD_LIKED_DOG = 'UPLOAD_LIKED_DOG';

const uploadedLikedDog = dog => ({ type: UPLOAD_LIKED_DOG, dog });

export const likedDog = dog => async dispatch => {
  try {
    await axios.post(
      'http://localhost:3000/api/likedDog',
      //   'https://shelter-in-pets-server.herokuapp.com/api/likedDogs',
      {
        petFinderId: dog.id,
        breed: dog.breeds.primary,
      }
    );
    dispatch(uploadedLikedDog(dog));
  } catch (error) {
    console.error(error);
  }
};

const dog = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_LIKED_DOG:
      return action.dog;
    default:
      return state;
  }
};

export default dog;