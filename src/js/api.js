import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    "live_G8No5jLEC0Hyhz9TVkp1FzjOQtC3iJfyLEQT986IIUEg29M6mpDlIiGzX6cVhrvr";

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}