// DO NOT DELETE
import * as React from 'react'
import  { useState ,useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect';


export const DogListContainer = () => {
  const [breeds,setBreeds] = useState("");
  // const [selectedBreeds,setSelectedBreeds] = useState("shiba");

  // const response = await fetch(`https://dog.ceo/api/breed/${selectedBreeds}/images/random/`);
  // const data = await response.json();
  // console.log(data);



  useEffect(() => {
    (async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    setBreeds(data.message);

    })()
    
  },[])
  return (
    <div>
      <BreedsSelect breeds={breeds}/>
    </div>
  )
}