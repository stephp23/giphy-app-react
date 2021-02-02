import { useEffect, useState } from "react";
import getRandomGif from "../services/getRandomGif";


function RandomGifPage() {

  const [randomGifUrl, setRandomGifUrl] = useState("");

  const getGifAsyncly = async () => {
        const { data } = await getRandomGif();
        console.log(data);
        const { fixed_height_downsampled_url } = data;
        setRandomGifUrl(fixed_height_downsampled_url);
  };
  
  useEffect(() => {
    getGifAsyncly();
  }, []);

  return (
    <div>
    <img alt="random gif" src = { randomGifUrl } />
    <button onClick = {getGifAsyncly}>Get New Gif</button>
    </div>
  );
}

export default RandomGifPage;