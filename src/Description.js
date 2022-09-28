// DO NOT DELETE
import * as React from 'react'
import { DogImage } from "./DogImage"
import  { useState } from 'react'


export const Description = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  return (
    <div>
        <p>Appは未定です</p>
      <DogImage url={dogUrl} alt="犬の画像" />
      <button onClick={async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json()
        if (data.status == "success") {
         setDogUrl(data.message)
        } 
      }
      }
        >更新</button>
    </div>    
  );
}
