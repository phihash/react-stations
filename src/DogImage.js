// DO NOT DELETE
import * as React from 'react'
import PropTypes from "prop-types";


export const DogImage = (props) => {
  return(
    <div>
      <img src={props.url} alt="画像" />
    </div>
  )
}

DogImage.propTypes = {
  url : PropTypes.string
}
