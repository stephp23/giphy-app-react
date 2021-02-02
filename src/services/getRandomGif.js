import axios from "axios";

async function getRandomGif() {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&tag=&rating=g`;
  const { data } = await axios.get(url);
  return data;

}

export default getRandomGif;