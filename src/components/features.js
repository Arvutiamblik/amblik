import React from 'react'
import PropTypes from 'prop-types'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map(item => (
      <div key={item.text} className="col-6">
      <h1>{item.title}</h1>
         <p><em><strong>
         {item.text}
         </strong></em></p>
         <button type="button" class="btn btn-primary"><strong>{item.button}</strong></button>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string
    })
  ),
}

export default FeatureGrid
