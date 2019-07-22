import React from 'react'
import PropTypes from 'prop-types'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="container">
  <div className="columns">
    <div className="row">
    {gridItems.map(item => (
      <div key={item.blockHeading} className="col-6">
      <h1>{item.blockHeading}</h1>
         <p><em><strong>
         {item.blockDescription}
         </strong></em></p>
         <button type="button" class="btn btn-primary"><strong>{item.buttonPlaceholder}</strong></button>
      </div>
    ))}
     </div>
          </div>
          </div>
        
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      blockHeading: PropTypes.string,
      blockDescription: PropTypes.string,
      buttonPlaceholder: PropTypes.string
    })
  ),
}

export default FeatureGrid
