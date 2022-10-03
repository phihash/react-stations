// DO NOT DELETE
import * as React from 'react'
import  { useState  } from 'react'
import PropTypes from "prop-types";
import { DogImage } from "./DogImage"



export const BreedsSelect = ({breeds}) => {
  const breedsList = Object.keys(breeds);
  const [selectedBreeds,setSelectedBreeds] = useState("shiba");
  const [displayBreeds,setDisplayBreeds] = useState([]);


  const optionItems =  breedsList.map((elm,index) => {
    return <option key={index} value={elm}>{elm}</option>
  })

  const handleChange =(e) => {
    setSelectedBreeds(e.target.value);
  }

  const handleDisplay = () => {
    

    (async () => {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreeds}/images/random/12`);
      const data = await response.json();
      setDisplayBreeds(data.message);
      // const display_list = data.message;

      
    })()
    
  }

  const display_list_element = displayBreeds.map((elm,index) => {
    return <DogImage key={index} url={elm} alt="犬の画像" />
  })
  
  return (
      <div>
        <select value={selectedBreeds} onChange={handleChange}>
          {optionItems}
        </select>
      <button type='button' onClick={handleDisplay}>表示</button>
      <hr />
      {display_list_element}
      </div>    
        
  )
}

BreedsSelect.propTypes = {
  breeds : PropTypes.object,

}
